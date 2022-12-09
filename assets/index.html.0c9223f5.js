import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},p=e(`<h1 id="shallowreactive-api" tabindex="-1"><a class="header-anchor" href="#shallowreactive-api" aria-hidden="true">#</a> shallowReactive API</h1><ul><li>reactive 和 shallowReactive 主要区别相当于 baseHandlers 和 collectionHandlers 的区别</li><li>对于普通对象和数组类型数据的 Proxy 处理器对象 shallowReactive 函数传入的是 baseHandlers 的值是 shallowReactiveHandlers</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">shallowReactive</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ShallowReactive<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    shallowReactiveHandlers<span class="token punctuation">,</span>
    shallowCollectionHandlers<span class="token punctuation">,</span>
    shallowReactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shallowreactivehandlers" tabindex="-1"><a class="header-anchor" href="#shallowreactivehandlers" aria-hidden="true">#</a> shallowReactiveHandlers</h2><ul><li>是基于 mutableHandlers 的基础上进行拓展</li><li>修改了 get 和 set 函数的实现 实际执行的是 shallowGet shallowSet</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> shallowReactiveHandlers <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token function">extend</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  mutableHandlers<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    get<span class="token operator">:</span> shallowGet<span class="token punctuation">,</span>
    set<span class="token operator">:</span> shallowSet
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shallowget" tabindex="-1"><a class="header-anchor" href="#shallowget" aria-hidden="true">#</a> shallowGet</h2><ul><li>也是通过 createGetter 第二个参数传递是 true</li><li>第二个参数传递是 true 即使 返回的 res 的值是对象类型 也不会通过递归变成响应式 只会把对象的最外层属性变成响应式</li><li>在初始化 props 到过程中 就是对 instance.props 求值后 就是通过 shallowReactive 把它变成响应式</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> shallowGet <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span> <span class="token function">createGetter</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">createGetter</span><span class="token punctuation">(</span>isReadonly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> shallow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Target<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> receiver<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">!</span>isReadonly
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_READONLY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> isReadonly
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_SHALLOW</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> shallow
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      key <span class="token operator">===</span> ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span> <span class="token operator">&amp;&amp;</span>
      receiver <span class="token operator">===</span>
        <span class="token punctuation">(</span>isReadonly
          <span class="token operator">?</span> shallow
            <span class="token operator">?</span> shallowReadonlyMap
            <span class="token operator">:</span> readonlyMap
          <span class="token operator">:</span> shallow
          <span class="token operator">?</span> shallowReactiveMap
          <span class="token operator">:</span> reactiveMap
        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> target
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> targetIsArray <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly <span class="token operator">&amp;&amp;</span> targetIsArray <span class="token operator">&amp;&amp;</span> <span class="token function">hasOwn</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>arrayInstrumentations<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSymbol</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">?</span> builtInSymbols<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">isNonTrackableKeys</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReadonly<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> TrackOpTypes<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>shallow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ref unwrapping - skip unwrap for Array + integer key.</span>
      <span class="token keyword">return</span> targetIsArray <span class="token operator">&amp;&amp;</span> <span class="token function">isIntegerKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">?</span> res <span class="token operator">:</span> res<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Convert returned value into a proxy as well. we do the isObject check</span>
      <span class="token comment">// here to avoid invalid value warning. Also need to lazy access readonly</span>
      <span class="token comment">// and reactive here to avoid circular dependency.</span>
      <span class="token keyword">return</span> isReadonly <span class="token operator">?</span> <span class="token keyword">readonly</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
