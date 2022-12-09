import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},p=e(`<h1 id="computed-api" tabindex="-1"><a class="header-anchor" href="#computed-api" aria-hidden="true">#</a> computed API</h1><ul><li>如果传递给 computed 是一个函数 就会默认是 getter 函数 不能修改 只能获取</li><li>可以传递一个对象 就可以修改了 <ul><li>get 读取逻辑 一个函数</li><li>set 修改逻辑 一个函数</li></ul></li></ul><h2 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h2><ul><li>拥有单个参数 getterOrOptions 可以是 getter 函数 也可以是一个对象</li><li>首先会先标准化参数 拿到计算属性对应的 getter 函数和 setter函数</li><li>如果值传递了 getter 函数 在开发环境下 修改了计算属性的值 就会执行对应的 setter 函数 提醒该计算属性的值是只读的</li><li>compupted 函数返回了 ComputeRefImpl 的实例 在构造器内部 通过 new ReactiveEffect 方式创建了副作用实例 effect</li></ul><h2 id="reactiveeffect" tabindex="-1"><a class="header-anchor" href="#reactiveeffect" aria-hidden="true">#</a> ReactiveEffect</h2><ul><li>第一个参数 fn 函数在后续执行 effect.run 会执行这个 fn 函数</li><li>第二个参数 scheduler 函数 在后续执行派发通知的时候好 会通知 effect 依赖执行对应的 scheduler 函数</li><li>在 ComputeRefImpl 内部 对实例的 value 属性创建了 getter 和 setter 当 computed 对象的 value 属性被访问过之后 触发 getter 函数 对计算属性本身进行依赖收集</li><li>然后判断是否 _dirtry 如果是 执行 effect.run 函数重置_dirtry 的值</li><li>当我们直接设置 computed 对象的值 会触发 setter 执行 compunted 函数内部定义的 setter 函数</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","index.html.vue"]]);export{u as default};
