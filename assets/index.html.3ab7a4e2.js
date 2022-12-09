import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const p={},t=e(`<h1 id="监听器总结总结" tabindex="-1"><a class="header-anchor" href="#监听器总结总结" aria-hidden="true">#</a> 监听器总结总结</h1><ul><li>侦听器用于观测响应式数据的变化 然后执行执行某些逻辑 执行也分多钟 <ul><li>同步执行</li><li>渲染前执行</li><li>渲染后执行</li></ul></li><li>即使 侦听器观测的响应式数据在同一个 Tick 被多次修改 非同步的情况下 回调函数只会调用一次</li><li>当侦听器执行方式是 post 内部的 effect runner 会推入 vue 内部实现的异步队列</li><li>侦听器可以随时销毁 也可以在开发环境下调试</li><li>侦听器内部通过 new ReactiveEffect 创建的 effect 对象来实现对响应式数据变化的订阅 <ul><li>更适合在数据变化之后执行某些逻辑</li><li>计算属性用于一个数据依赖另外一些数据而来的场景</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  active <span class="token operator">=</span> <span class="token boolean">true</span>
  deps<span class="token operator">:</span> Dep<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  parent<span class="token operator">:</span> ReactiveEffect <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

  <span class="token doc-comment comment">/**
   * Can be attached after creation
   * <span class="token keyword">@internal</span>
   */</span>
  computed<span class="token operator">?</span><span class="token operator">:</span> ComputedRefImpl<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@internal</span>
   */</span>
  allowRecurse<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@internal</span>
   */</span>
  <span class="token keyword">private</span> deferStop<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>

  onStop<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// dev only</span>
  onTrack<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DebuggerEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token comment">// dev only</span>
  onTrigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> DebuggerEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> scheduler<span class="token operator">:</span> EffectScheduler <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    scope<span class="token operator">?</span><span class="token operator">:</span> EffectScope
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">recordEffectScope</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> scope<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> parent<span class="token operator">:</span> ReactiveEffect <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> activeEffect
    <span class="token keyword">let</span> lastShouldTrack <span class="token operator">=</span> shouldTrack
    <span class="token keyword">while</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>parent
    <span class="token punctuation">}</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> activeEffect
      activeEffect <span class="token operator">=</span> <span class="token keyword">this</span>
      shouldTrack <span class="token operator">=</span> <span class="token boolean">true</span>

      trackOpBit <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">++</span>effectTrackDepth

      <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTrackDepth <span class="token operator">&lt;=</span> maxMarkerBits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">initDepMarkers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">cleanupEffect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>effectTrackDepth <span class="token operator">&lt;=</span> maxMarkerBits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">finalizeDepMarkers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      trackOpBit <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">--</span>effectTrackDepth

      activeEffect <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parent
      shouldTrack <span class="token operator">=</span> lastShouldTrack
      <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>deferStop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// stopped while running itself - defer the cleanup</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>activeEffect <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>deferStop <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cleanupEffect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onStop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
