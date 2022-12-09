import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const e={},o=t(`<h1 id="创建根节点的代码生成节点" tabindex="-1"><a class="header-anchor" href="#创建根节点的代码生成节点" aria-hidden="true">#</a> 创建根节点的代码生成节点</h1><h2 id="createrootcodegen" tabindex="-1"><a class="header-anchor" href="#createrootcodegen" aria-hidden="true">#</a> createRootCodegen</h2><ul><li>createRootCodegen 目的就是 为 root 这个虚拟的 ast 根节点创建一个代码生成节点</li><li>如果 root 的子节点 children 是单个元素节点 就将 root 转换成一个 block 节点 把这个 child 的 codegenNode 赋值给 root 的 codegenNode</li><li>如果 root 的子节点 children 是多个节点 返回一个 fragement 的代码生成节点 并赋值给 root 的 codegenNode</li><li>createRootCodegen 完成之后 把转换 ast 节点的过程中创建的一些上下文数据赋值给 root 节点对应的属性</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createRootCodegen</span><span class="token punctuation">(</span>root<span class="token operator">:</span> RootNode<span class="token punctuation">,</span> context<span class="token operator">:</span> TransformContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> helper <span class="token punctuation">}</span> <span class="token operator">=</span> context
  <span class="token keyword">const</span> <span class="token punctuation">{</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> root
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> child <span class="token operator">=</span> children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token comment">// if the single child is an element, turn it into a block.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSingleElementRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> child<span class="token punctuation">.</span>codegenNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// single element root is never hoisted so codegenNode will never be</span>
      <span class="token comment">// SimpleExpressionNode</span>
      <span class="token keyword">const</span> codegenNode <span class="token operator">=</span> child<span class="token punctuation">.</span>codegenNode
      <span class="token keyword">if</span> <span class="token punctuation">(</span>codegenNode<span class="token punctuation">.</span>type <span class="token operator">===</span> NodeTypes<span class="token punctuation">.</span><span class="token constant">VNODE_CALL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">makeBlock</span><span class="token punctuation">(</span>codegenNode<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      root<span class="token punctuation">.</span>codegenNode <span class="token operator">=</span> codegenNode
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// - single &lt;slot/&gt;, IfNode, ForNode: already blocks.</span>
      <span class="token comment">// - single text node: always patched.</span>
      <span class="token comment">// root codegen falls through via genNode()</span>
      root<span class="token punctuation">.</span>codegenNode <span class="token operator">=</span> child
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// root has multiple nodes - return a fragment block.</span>
    <span class="token keyword">let</span> patchFlag <span class="token operator">=</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">STABLE_FRAGMENT</span>
    <span class="token keyword">let</span> patchFlagText <span class="token operator">=</span> PatchFlagNames<span class="token punctuation">[</span>PatchFlags<span class="token punctuation">.</span><span class="token constant">STABLE_FRAGMENT</span><span class="token punctuation">]</span>
    <span class="token comment">// check if the fragment actually contains a single valid child with</span>
    <span class="token comment">// the rest being comments</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      __DEV__ <span class="token operator">&amp;&amp;</span>
      children<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>type <span class="token operator">!==</span> NodeTypes<span class="token punctuation">.</span><span class="token constant">COMMENT</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      patchFlag <span class="token operator">|=</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">DEV_ROOT_FRAGMENT</span>
      patchFlagText <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>PatchFlagNames<span class="token punctuation">[</span>PatchFlags<span class="token punctuation">.</span><span class="token constant">DEV_ROOT_FRAGMENT</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    root<span class="token punctuation">.</span>codegenNode <span class="token operator">=</span> <span class="token function">createVNodeCall</span><span class="token punctuation">(</span>
      context<span class="token punctuation">,</span>
      <span class="token function">helper</span><span class="token punctuation">(</span><span class="token constant">FRAGMENT</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      root<span class="token punctuation">.</span>children<span class="token punctuation">,</span>
      patchFlag <span class="token operator">+</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> /* </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>patchFlagText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> */</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token boolean">false</span> <span class="token comment">/* isComponent */</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// no children = noop. codegen will return null.</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
