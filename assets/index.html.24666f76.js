import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},p=e(`<h1 id="异步任务队列的创建" tabindex="-1"><a class="header-anchor" href="#异步任务队列的创建" aria-hidden="true">#</a> 异步任务队列的创建</h1><h2 id="异步任务队列的创建-1" tabindex="-1"><a class="header-anchor" href="#异步任务队列的创建-1" aria-hidden="true">#</a> 异步任务队列的创建</h2><ul><li>组件的副作用函数 instance.update 在它依赖的响应数据更新后 通过 queueJob 方式再次运行</li><li>vue 内部维护了一个异步任务队列 queue 其中的一些异步任务 比如副作用渲染函数 <ul><li>就是通过 queueJob 的方式添加到队列 queue 中</li><li>并不是只要执行 queueJob(job) 这个任务就会添加到队列中</li><li>会通过 Array.include 的方式检测新添加的 job 是否已经存在队列</li></ul></li><li>当 isFlushing 为 false 未开始执行 job 的时候 flushIndex 始终为0 <ul><li>这个时候执行 queueJob(job) 只要保证心来的任务不在 queue 队列中即可</li><li>然后当 isFlushing 为 true 的时候 也就是开始执行任务的时候 flushIndex 会递增</li><li>在执行任务的时候又有新的任务进来 只需要 和queue 中未执行的任务对比</li></ul></li><li>无论是 queueJob 还是 queueCb 最终都会执行 queueFlush 函数</li></ul><h3 id="queueflush" tabindex="-1"><a class="header-anchor" href="#queueflush" aria-hidden="true">#</a> queueFlush</h3><ul><li>vue 内部维护了 isFlushing 和 isFlushPending 变量 用来控制异步任务的刷新逻辑</li><li>在 queueFlush 首次执行的时候 isFlushing 和 isFlushPending 都是 false 会把 isFlushPending设置为 true <ul><li>通过 promise.then 的方式 在下一个 Tick 去执行 flushJobs</li><li>进而执行队列中的任务</li></ul></li><li>isFlushPending 的控制 使得即使多次执行 queueFlush 也不会多次执行 flushJobs</li><li>因为 js 都是单线程执行的 这样异步设计可以保证在一个 Tick 内 <ul><li>即使多次执行 queueJob或者 queueCb 添加任务</li><li>也只是在宏任务执行完毕之后的微任务阶段执行一次 flushJobs</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">queueFlush</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isFlushing <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isFlushPending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    isFlushPending <span class="token operator">=</span> <span class="token boolean">true</span>
    currentFlushPromise <span class="token operator">=</span> resolvedPromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushJobs<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步任务队列的执行" tabindex="-1"><a class="header-anchor" href="#异步任务队列的执行" aria-hidden="true">#</a> 异步任务队列的执行</h2><h3 id="flushjobs" tabindex="-1"><a class="header-anchor" href="#flushjobs" aria-hidden="true">#</a> flushJobs</h3><ul><li>一开始会把 isFlushPending 重置为 false 把 isFlushing 设置为 true 表示正在执行异步队列任务</li><li>执行异步任务队列之前 queue 之前 先执行 flushPreFlushCbs 处理所有预处理任务队列</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">flushJobs</span><span class="token punctuation">(</span>seen<span class="token operator">?</span><span class="token operator">:</span> CountMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  isFlushPending <span class="token operator">=</span> <span class="token boolean">false</span>
  isFlushing <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    seen <span class="token operator">=</span> seen <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Sort queue before flush.</span>
  <span class="token comment">// This ensures that:</span>
  <span class="token comment">// 1. Components are updated from parent to child. (because parent is always</span>
  <span class="token comment">//    created before the child so its render effect will have smaller</span>
  <span class="token comment">//    priority number)</span>
  <span class="token comment">// 2. If a component is unmounted during a parent component&#39;s update,</span>
  <span class="token comment">//    its update can be skipped.</span>
  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>comparator<span class="token punctuation">)</span>

  <span class="token comment">// conditional usage of checkRecursiveUpdate must be determined out of</span>
  <span class="token comment">// try ... catch block since Rollup by default de-optimizes treeshaking</span>
  <span class="token comment">// inside try-catch. This can leave all warning code unshaked. Although</span>
  <span class="token comment">// they would get eventually shaken by a minifier like terser, some minifiers</span>
  <span class="token comment">// would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)</span>
  <span class="token keyword">const</span> check <span class="token operator">=</span> __DEV__
    <span class="token operator">?</span> <span class="token punctuation">(</span>job<span class="token operator">:</span> SchedulerJob<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">checkRecursiveUpdates</span><span class="token punctuation">(</span>seen<span class="token operator">!</span><span class="token punctuation">,</span> job<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token constant">NOOP</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>flushIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> flushIndex <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> flushIndex<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> job <span class="token operator">=</span> queue<span class="token punctuation">[</span>flushIndex<span class="token punctuation">]</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>job <span class="token operator">&amp;&amp;</span> job<span class="token punctuation">.</span>active <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>job<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">continue</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// console.log(\`running:\`, job.id)</span>
        <span class="token function">callWithErrorHandling</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> ErrorCodes<span class="token punctuation">.</span><span class="token constant">SCHEDULER</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    flushIndex <span class="token operator">=</span> <span class="token number">0</span>
    queue<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span>seen<span class="token punctuation">)</span>

    isFlushing <span class="token operator">=</span> <span class="token boolean">false</span>
    currentFlushPromise <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// some postFlushCb queued jobs!</span>
    <span class="token comment">// keep flushing until it drains.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">||</span> pendingPostFlushCbs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">flushJobs</span><span class="token punctuation">(</span>seen<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flushpreflushcbs" tabindex="-1"><a class="header-anchor" href="#flushpreflushcbs" aria-hidden="true">#</a> flushPreFlushCbs</h3><ul><li>首先对 pendingPreFlushCbs 做了去重 赋值给 activePreFlushCbs 然后清空自己</li><li>遍历 activePreFlushCbs 依次执行这些任务</li><li>遍历过程中 还会检测循环更新</li><li>当 activePreFlushCbs执行完毕后 清空 activePreFlushCbs 将 preFlushIndex重置为 0</li><li>由于 可能在 flushPreFlushCbs 执行过程中再次添加 pendingPreFlushCbs 所以需要递归执行 flushPreFlushCbs 直到 pendingPreFlushCbs 为空</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flushPreFlushCbs</span><span class="token punctuation">(</span>
  seen<span class="token operator">?</span><span class="token operator">:</span> CountMap<span class="token punctuation">,</span>
  <span class="token comment">// if currently flushing, skip the current job itself</span>
  i <span class="token operator">=</span> isFlushing <span class="token operator">?</span> flushIndex <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    seen <span class="token operator">=</span> seen <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cb <span class="token operator">=</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb <span class="token operator">&amp;&amp;</span> cb<span class="token punctuation">.</span>pre<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token function">checkRecursiveUpdates</span><span class="token punctuation">(</span>seen<span class="token operator">!</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      i<span class="token operator">--</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flushpostflushcbs" tabindex="-1"><a class="header-anchor" href="#flushpostflushcbs" aria-hidden="true">#</a> flushPostFlushCbs</h3><ul><li>flushPostFlushCbs 函数和 flushPreFlushCbs 的逻辑类似 主要就是执行一些后续处理的任务</li><li>还有三处不同的地方 <ul><li>支持 flushPostFlushCbs 的嵌套执行 这种情况会导致在执行 flushPostFlushCbs 的时候 activePostFlushCbs 可能不为空</li><li>activePostFlushCbs 中的任务在执行前会按照 id 大小排序 保证组件的数据更新优先于用户定义的 postwachers 回调函数的执行 用户就可以在 watcher 的回调函数中 访问更新后的 $refs 中的数据</li><li>queue 或者 activePostFlushCbs 中的 job 在执行过程中 还会再次向 pendingPreFlushCbs pendingPostFlushCbs 或者 queue 中再次添加一些新的 job ， 为了保证新添加的 pendingPostFlushCbs 后执行 不能再 flushPostFlushCbs 结束后执行 flushPostFlushCbs 函数</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flushPostFlushCbs</span><span class="token punctuation">(</span>seen<span class="token operator">?</span><span class="token operator">:</span> CountMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingPostFlushCbs<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> deduped <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>pendingPostFlushCbs<span class="token punctuation">)</span><span class="token punctuation">]</span>
    pendingPostFlushCbs<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// #1947 already has active queue, nested flushPostFlushCbs call</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>activePostFlushCbs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      activePostFlushCbs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>deduped<span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    activePostFlushCbs <span class="token operator">=</span> deduped
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      seen <span class="token operator">=</span> seen <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    activePostFlushCbs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getId</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">getId</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>
      postFlushIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      postFlushIndex <span class="token operator">&lt;</span> activePostFlushCbs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      postFlushIndex<span class="token operator">++</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        __DEV__ <span class="token operator">&amp;&amp;</span>
        <span class="token function">checkRecursiveUpdates</span><span class="token punctuation">(</span>seen<span class="token operator">!</span><span class="token punctuation">,</span> activePostFlushCbs<span class="token punctuation">[</span>postFlushIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">continue</span>
      <span class="token punctuation">}</span>
      activePostFlushCbs<span class="token punctuation">[</span>postFlushIndex<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    activePostFlushCbs <span class="token operator">=</span> <span class="token keyword">null</span>
    postFlushIndex <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查循环更新" tabindex="-1"><a class="header-anchor" href="#检查循环更新" aria-hidden="true">#</a> 检查循环更新</h2><h3 id="checkrecursiveupdates" tabindex="-1"><a class="header-anchor" href="#checkrecursiveupdates" aria-hidden="true">#</a> checkRecursiveUpdates</h3><ul><li>flushJobs 一开始创建了 seen 是一个 map 对象 然后在 checkRecursiveUpdates 的时候</li><li>会把任务添加到 seen 中并记录引用计数 count 初始值 为 1 如果再次添加相同的任务 会自增 如果 count 大于了 我们定义的 限制 100 就说明可能存在无限更新的情况</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">checkRecursiveUpdates</span><span class="token punctuation">(</span>seen<span class="token operator">:</span> CountMap<span class="token punctuation">,</span> fn<span class="token operator">:</span> SchedulerJob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>seen<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    seen<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> seen<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token constant">RECURSION_LIMIT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> instance <span class="token operator">=</span> fn<span class="token punctuation">.</span>ownerInstance
      <span class="token keyword">const</span> componentName <span class="token operator">=</span> instance <span class="token operator">&amp;&amp;</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Maximum recursive updates exceeded</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
          componentName <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> in component &lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>componentName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">This means you have a reactive effect that is mutating its own </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dependencies and thus recursively triggering itself. Possible sources </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">include component template, render function, updated hook or </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">watcher source function.</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      seen<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function l(c,i){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","index.html.vue"]]);export{r as default};
