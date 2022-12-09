import{_ as s,z as n,A as a,a6 as e}from"./framework.fef63301.js";const p={},t=e(`<h1 id="webpack中的三种hash分别是" tabindex="-1"><a class="header-anchor" href="#webpack中的三种hash分别是" aria-hidden="true">#</a> webpack中的三种hash分别是</h1><h2 id="hash-全局hash" tabindex="-1"><a class="header-anchor" href="#hash-全局hash" aria-hidden="true">#</a> hash：全局hash</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">console</span><span class="token operator">:</span> <span class="token string">&#39;./src/console.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 修改为 hash</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[hash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 修改为 hash</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;styles/[name].[hash].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：牵一发动全身，只改了一个文件 会导致打包后所有文件的hash值都改变。所以当打包名称设置为hash时，整个项目文件是一致的，修改其中一个会导致所有跟着一起改。</p><h2 id="chunkhash-分组hash" tabindex="-1"><a class="header-anchor" href="#chunkhash-分组hash" aria-hidden="true">#</a> chunkhash：分组hash</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">console</span><span class="token operator">:</span> <span class="token string">&#39;./src/console.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 修改为 chunkhash</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[chunkhash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 修改为 chunkhash</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;styles/[name].[chunkhash].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：当规则为chunkhash时，打包后的hash值会根据入口文件的不用而不一样，当某个入口文件修改后重新打包，会导致本入口文件关联的所有文件的hash值都修改，但是不会影响到其他入口文件的hash值</p><h2 id="contenthash-内容hash" tabindex="-1"><a class="header-anchor" href="#contenthash-内容hash" aria-hidden="true">#</a> contenthash：内容hash</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">console</span><span class="token operator">:</span> <span class="token string">&#39;./src/console.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 修改为 contenthash</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/[name].[contenthash].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clean</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 修改为 contenthash</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;styles/[name].[contenthash].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：当规则为 contenthash 时，每个文件的hash值都是根据自身内容而生成，当某个文件内容修改时，打包后只会修改其本身的hash值，不会影响其他文件的hash值</p><h2 id="file-loader-配置的-hash-是上面说的哪一种-hash" tabindex="-1"><a class="header-anchor" href="#file-loader-配置的-hash-是上面说的哪一种-hash" aria-hidden="true">#</a> file-loader 配置的 hash 是上面说的哪一种 hash</h2><p>contenthash</p>`,12),o=[t];function l(c,i){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","index.html.vue"]]);export{u as default};
