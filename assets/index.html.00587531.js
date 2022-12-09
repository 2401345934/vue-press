import{_ as n,z as a,A as s,a6 as e}from"./framework.fef63301.js";const t={},o=e(`<h1 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h1><ul><li>readonly 和 reactive 主要区别 就是执行 createReactiveObject 函数的参数 isReadonly 不同</li><li>其次在于 baseHandlers 和 collectionHandlers 的区别</li><li>对于普通对象和数组类型数据的 Proxy 处理器对象 readonly 函数传入的是 baseHandlers 的值是 readonlyHandlers</li><li>执行 createReactiveObject 的时候 如果 isReadonly是 true 并且传递的参数 target 已经是响应式对象了 仍然可以变只读的对象</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token doc-comment comment">/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but \`readonly\` can be called on an already reactive object.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token keyword">readonly</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">object</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">)</span><span class="token operator">:</span> DeepReadonly<span class="token operator">&lt;</span>UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">true</span><span class="token punctuation">,</span>
    readonlyHandlers<span class="token punctuation">,</span>
    readonlyCollectionHandlers<span class="token punctuation">,</span>
    readonlyMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonlyhandlers" tabindex="-1"><a class="header-anchor" href="#readonlyhandlers" aria-hidden="true">#</a> readonlyHandlers</h2><ul><li>readonlyHandlers 和 mutableHandlers 区别主要是在于 get set 和 deleteProperty 这三个函数、</li><li>只读的响应式对象是不允许修改或删除属性的</li><li>所以在非生产韩剧下 set 和 deleteProperty 函数实现都会发出警告 提示用户对象是只读的</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> readonlyHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>object<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token operator">:</span> readonlyGet<span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Set operation on key &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; failed: target is readonly.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        target
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Delete operation on key &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot; failed: target is readonly.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        target
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonlyget" tabindex="-1"><a class="header-anchor" href="#readonlyget" aria-hidden="true">#</a> readonlyGet</h2><ul><li>就是 createGetter(true) 的返回值</li><li>readonly 和 reactive 最大区别就是 readonly 不做依赖收集 因为只读的对象不会被修改 所以不需要追踪变化</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> readonlyGet <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),p=[o];function l(i,c){return a(),s("div",null,p)}const u=n(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
