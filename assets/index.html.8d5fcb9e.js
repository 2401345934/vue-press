import{_ as t,z as i,A as o,X as n,C as s,T as l,a6 as e,Q as c}from"./framework.fef63301.js";const p={},r=e(`<h1 id="协调与调度" tabindex="-1"><a class="header-anchor" href="#协调与调度" aria-hidden="true">#</a> 协调与调度</h1><p>其实在<code>React</code>执行过程中，会有数不清的任务要去执行，但是他们会有一个<code>优先级的判定</code>，假如两个事件的<code>优先级一样</code>，那么<code>React</code>是怎么去判定他们两谁先执行呢？</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// packages/react-reconciler/src/ReactFiberWorkLoop.old.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestEventTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> <span class="token punctuation">(</span>RenderContext <span class="token operator">|</span> CommitContext<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// We&#39;re inside React, so it&#39;s fine to read the actual time.</span>
    <span class="token comment">// react事件正在执行</span>
    <span class="token comment">// executionContext</span>
    <span class="token comment">// RenderContext 正在计算</span>
    <span class="token comment">// CommitContext 正在提交</span>
    <span class="token comment">// export const NoContext = /*             */ 0b0000000;</span>
    <span class="token comment">// const BatchedContext = /*               */ 0b0000001;</span>
    <span class="token comment">// const EventContext = /*                 */ 0b0000010;</span>
    <span class="token comment">// const DiscreteEventContext = /*         */ 0b0000100;</span>
    <span class="token comment">// const LegacyUnbatchedContext = /*       */ 0b0001000;</span>
    <span class="token comment">// const RenderContext = /*                */ 0b0010000;</span>
    <span class="token comment">// const CommitContext = /*                */ 0b0100000;</span>
    <span class="token comment">// export const RetryAfterError = /*       */ 0b1000000;</span>
    <span class="token keyword">return</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 没有在react事件执行 NoTimestamp === -1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentEventTime <span class="token operator">!==</span> NoTimestamp<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token comment">// 浏览器事件正在执行，返回上次的 currentEventTime</span>
    <span class="token keyword">return</span> currentEventTime<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 重新计算currentEventTime，当执行被中断后</span>
  currentEventTime <span class="token operator">=</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> currentEventTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>RenderContext</code>与<code>CommitContext</code>表示正在计算更新和正在提交更新，返回<code>now()</code>。</li><li>如果是浏览器事件正在执行中，返回上一次的<code>currentEventTime</code>。</li><li>如果终止或者<code>中断react</code>任务执行的时候，则重新获取执行时间<code>now(</code>)。</li><li>获取的时间<code>越小</code>，则执行的优先级<code>越高</code>。</li></ul><p><code>now()</code>并不是单纯的<code>new Date()</code>，而是判定两次更新任务的时间是否<code>小于10ms</code>，来决定是否<code>复用</code>上一次的更新时间<code>Scheduler_now</code>的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> now <span class="token operator">=</span> initialTimeMs <span class="token operator">&lt;</span> <span class="token number">10000</span> <span class="token operator">?</span> <span class="token function-variable function">Scheduler_now</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Scheduler_now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> initialTimeMs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实各位猜想一下，对于<code>10ms</code>级别的任务间隙时间，几乎是可以忽略不计的，那么这里就可以视为同样的任务，不需要有很大的性能开销，有利于<code>批量更新</code>。</p><h3 id="requestupdatelane" tabindex="-1"><a class="header-anchor" href="#requestupdatelane" aria-hidden="true">#</a> requestUpdateLane</h3><p>requestEventTime位每一个需要执行的任务打上了触发更新时间标签，那么任务的优先级还需要进一步的确立，requestUpdateLane就是用来获取每一个任务执行的优先级的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// packages/react-reconciler/src/ReactFiberWorkLoop.old.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">requestUpdateLane</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber</span><span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>
  <span class="token comment">// Special cases</span>
  <span class="token keyword">const</span> mode <span class="token operator">=</span> fiber<span class="token punctuation">.</span>mode<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> BlockingMode<span class="token punctuation">)</span> <span class="token operator">===</span> NoMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>SyncLane<span class="token operator">:</span> Lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>mode <span class="token operator">&amp;</span> ConcurrentMode<span class="token punctuation">)</span> <span class="token operator">===</span> NoMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> ImmediateSchedulerPriority
      <span class="token operator">?</span> <span class="token punctuation">(</span>SyncLane<span class="token operator">:</span> Lane<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span>SyncBatchedLane<span class="token operator">:</span> Lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token operator">!</span>deferRenderPhaseUpdateToNextBatch <span class="token operator">&amp;&amp;</span>
    <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> RenderContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>
    workInProgressRootRenderLanes <span class="token operator">!==</span> NoLanes
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is a render phase update. These are not officially supported. The</span>
    <span class="token comment">// old behavior is to give this the same &quot;thread&quot; (expiration time) as</span>
    <span class="token comment">// whatever is currently rendering. So if you call \`setState\` on a component</span>
    <span class="token comment">// that happens later in the same render, it will flush. Ideally, we want to</span>
    <span class="token comment">// remove the special case and treat them as if they came from an</span>
    <span class="token comment">// interleaved event. Regardless, this pattern is not officially supported.</span>
    <span class="token comment">// This behavior is only a fallback. The flag only exists until we can roll</span>
    <span class="token comment">// out the setState warning, since existing code might accidentally rely on</span>
    <span class="token comment">// the current behavior.</span>
    <span class="token keyword">return</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>workInProgressRootRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// The algorithm for assigning an update to a lane should be stable for all</span>
  <span class="token comment">// updates at the same priority within the same event. To do this, the inputs</span>
  <span class="token comment">// to the algorithm must be the same. For example, we use the \`renderLanes\`</span>
  <span class="token comment">// to avoid choosing a lane that is already in the middle of rendering.</span>
  <span class="token comment">//</span>
  <span class="token comment">// However, the &quot;included&quot; lanes could be mutated in between updates in the</span>
  <span class="token comment">// same event, like if you perform an update inside \`flushSync\`. Or any other</span>
  <span class="token comment">// code path that might call \`prepareFreshStack\`.</span>
  <span class="token comment">//</span>
  <span class="token comment">// The trick we use is to cache the first of each of these inputs within an</span>
  <span class="token comment">// event. Then reset the cached values once we can be sure the event is over.</span>
  <span class="token comment">// Our heuristic for that is whenever we enter a concurrent work loop.</span>
  <span class="token comment">//</span>
  <span class="token comment">// We&#39;ll do the same for \`currentEventPendingLanes\` below.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentEventWipLanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentEventWipLanes <span class="token operator">=</span> workInProgressRootIncludedLanes<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> isTransition <span class="token operator">=</span> <span class="token function">requestCurrentTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> NoTransition<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isTransition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentEventPendingLanes <span class="token operator">!==</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentEventPendingLanes <span class="token operator">=</span>
        mostRecentlyUpdatedRoot <span class="token operator">!==</span> <span class="token keyword">null</span>
          <span class="token operator">?</span> mostRecentlyUpdatedRoot<span class="token punctuation">.</span>pendingLanes
          <span class="token operator">:</span> NoLanes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">findTransitionLane</span><span class="token punctuation">(</span>currentEventWipLanes<span class="token punctuation">,</span> currentEventPendingLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// TODO: Remove this dependency on the Scheduler priority.</span>
  <span class="token comment">// To do that, we&#39;re replacing it with an update lane priority.</span>

  <span class="token comment">// 获取执行任务的优先级，便于调度</span>
  <span class="token keyword">const</span> schedulerPriority <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// The old behavior was using the priority level of the Scheduler.</span>
  <span class="token comment">// This couples React to the Scheduler internals, so we&#39;re replacing it</span>
  <span class="token comment">// with the currentUpdateLanePriority above. As an example of how this</span>
  <span class="token comment">// could be problematic, if we&#39;re not inside \`Scheduler.runWithPriority\`,</span>
  <span class="token comment">// then we&#39;ll get the priority of the current running Scheduler task,</span>
  <span class="token comment">// which is probably not what we want.</span>
  <span class="token keyword">let</span> lane<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token comment">// TODO: Temporary. We&#39;re removing the concept of discrete updates.</span>
    <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> DiscreteEventContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>

    <span class="token comment">// 用户block的类型事件</span>
    schedulerPriority <span class="token operator">===</span> UserBlockingSchedulerPriority
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 通过findUpdateLane函数重新计算lane</span>
    lane <span class="token operator">=</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>InputDiscreteLanePriority<span class="token punctuation">,</span> currentEventWipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据优先级计算法则计算lane</span>
    <span class="token keyword">const</span> schedulerLanePriority <span class="token operator">=</span> <span class="token function">schedulerPriorityToLanePriority</span><span class="token punctuation">(</span>
      schedulerPriority<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>decoupleUpdatePriorityFromScheduler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// In the new strategy, we will track the current update lane priority</span>
      <span class="token comment">// inside React and use that priority to select a lane for this update.</span>
      <span class="token comment">// For now, we&#39;re just logging when they&#39;re different so we can assess.</span>
      <span class="token keyword">const</span> currentUpdateLanePriority <span class="token operator">=</span> <span class="token function">getCurrentUpdateLanePriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        schedulerLanePriority <span class="token operator">!==</span> currentUpdateLanePriority <span class="token operator">&amp;&amp;</span>
        currentUpdateLanePriority <span class="token operator">!==</span> NoLanePriority
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
            <span class="token string">&#39;Expected current scheduler lane priority %s to match current update lane priority %s&#39;</span><span class="token punctuation">,</span>
            schedulerLanePriority<span class="token punctuation">,</span>
            currentUpdateLanePriority<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 根据计算得到的 schedulerLanePriority，计算更新的优先级 lane</span>
    lane <span class="token operator">=</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>schedulerLanePriority<span class="token punctuation">,</span> currentEventWipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d={href:"https://link.juejin.cn/?target=https%3A%2F%2Fxiaochen1024.com%2Fseries%2F60b1b600712e370039088e24%2F60b1b636712e370039088e25",title:"https://xiaochen1024.com/series/60b1b600712e370039088e24/60b1b636712e370039088e25",target:"_blank",rel:"noopener noreferrer"},u=e(`<ul><li>通过<code>getCurrentPriorityLevel</code>获得所有执行任务的调度优先级<code>schedulerPriority</code>。</li><li>通过<code>findUpdateLane</code>计算<code>lane</code>，作为更新中的优先级。</li></ul><h3 id="findupdatelane" tabindex="-1"><a class="header-anchor" href="#findupdatelane" aria-hidden="true">#</a> findUpdateLane</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">lanePriority</span><span class="token operator">:</span> LanePriority<span class="token punctuation">,</span>  <span class="token literal-property property">wipLanes</span><span class="token operator">:</span> Lanes<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> Lane <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>lanePriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token literal-property property">NoLanePriority</span><span class="token operator">:</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SyncLanePriority</span><span class="token operator">:</span>
      <span class="token keyword">return</span> SyncLane<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">SyncBatchedLanePriority</span><span class="token operator">:</span>
      <span class="token keyword">return</span> SyncBatchedLane<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">InputDiscreteLanePriority</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>InputDiscreteLanes <span class="token operator">&amp;</span> <span class="token operator">~</span>wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> NoLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Shift to the next priority level</span>
        <span class="token keyword">return</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>InputContinuousLanePriority<span class="token punctuation">,</span> wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">InputContinuousLanePriority</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>InputContinuousLanes <span class="token operator">&amp;</span> <span class="token operator">~</span>wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> NoLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Shift to the next priority level</span>
        <span class="token keyword">return</span> <span class="token function">findUpdateLane</span><span class="token punctuation">(</span>DefaultLanePriority<span class="token punctuation">,</span> wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">DefaultLanePriority</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>DefaultLanes <span class="token operator">&amp;</span> <span class="token operator">~</span>wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> NoLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// If all the default lanes are already being worked on, look for a</span>
        <span class="token comment">// lane in the transition range.</span>
        lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>TransitionLanes <span class="token operator">&amp;</span> <span class="token operator">~</span>wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> NoLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// All the transition lanes are taken, too. This should be very</span>
          <span class="token comment">// rare, but as a last resort, pick a default lane. This will have</span>
          <span class="token comment">// the effect of interrupting the current work-in-progress render.</span>
          lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>DefaultLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">case</span> <span class="token literal-property property">TransitionPriority</span><span class="token operator">:</span> <span class="token comment">// Should be handled by findTransitionLane instead</span>
    <span class="token keyword">case</span> <span class="token literal-property property">RetryLanePriority</span><span class="token operator">:</span> <span class="token comment">// Should be handled by findRetryLane instead</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token literal-property property">IdleLanePriority</span><span class="token operator">:</span>
      <span class="token keyword">let</span> lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>IdleLanes <span class="token operator">&amp;</span> <span class="token operator">~</span>wipLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> NoLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        lane <span class="token operator">=</span> <span class="token function">pickArbitraryLane</span><span class="token punctuation">(</span>IdleLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> lane<span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token comment">// The remaining priorities are not valid for updates</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">invariant</span><span class="token punctuation">(</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Invalid update priority: %s. This is a bug in React.&#39;</span><span class="token punctuation">,</span>
    lanePriority<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lanepriority-lanepriority" tabindex="-1"><a class="header-anchor" href="#lanepriority-lanepriority" aria-hidden="true">#</a> lanePriority: LanePriority</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> opaque type LanePriority <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token number">0</span>
  <span class="token operator">|</span> <span class="token number">1</span>
  <span class="token operator">|</span> <span class="token number">2</span>
  <span class="token operator">|</span> <span class="token number">3</span>
  <span class="token operator">|</span> <span class="token number">4</span>
  <span class="token operator">|</span> <span class="token number">5</span>
  <span class="token operator">|</span> <span class="token number">6</span>
  <span class="token operator">|</span> <span class="token number">7</span>
  <span class="token operator">|</span> <span class="token number">8</span>
  <span class="token operator">|</span> <span class="token number">9</span>
  <span class="token operator">|</span> <span class="token number">10</span>
  <span class="token operator">|</span> <span class="token number">11</span>
  <span class="token operator">|</span> <span class="token number">12</span>
  <span class="token operator">|</span> <span class="token number">13</span>
  <span class="token operator">|</span> <span class="token number">14</span>
  <span class="token operator">|</span> <span class="token number">15</span>
  <span class="token operator">|</span> <span class="token number">16</span>
  <span class="token operator">|</span> <span class="token number">17</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> opaque type Lanes <span class="token operator">=</span> number<span class="token punctuation">;</span>
<span class="token keyword">export</span> opaque type Lane <span class="token operator">=</span> number<span class="token punctuation">;</span>
<span class="token keyword">export</span> opaque type LaneMap<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> Array<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ImmediatePriority <span class="token keyword">as</span> ImmediateSchedulerPriority<span class="token punctuation">,</span>
  UserBlockingPriority <span class="token keyword">as</span> UserBlockingSchedulerPriority<span class="token punctuation">,</span>
  NormalPriority <span class="token keyword">as</span> NormalSchedulerPriority<span class="token punctuation">,</span>
  LowPriority <span class="token keyword">as</span> LowSchedulerPriority<span class="token punctuation">,</span>
  IdlePriority <span class="token keyword">as</span> IdleSchedulerPriority<span class="token punctuation">,</span>
  NoPriority <span class="token keyword">as</span> NoSchedulerPriority<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./SchedulerWithReactIntegration.new&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 同步任务</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">SyncBatchedLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>

<span class="token comment">// 用户事件</span>
<span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteHydrationLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">InputDiscreteLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">InputContinuousHydrationLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">11</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">InputContinuousLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">DefaultHydrationLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">DefaultLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">TransitionHydrationPriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">TransitionPriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">RetryLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">SelectiveHydrationLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">IdleHydrationLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">IdleLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">OffscreenLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">NoLanePriority</span><span class="token operator">:</span> LanePriority <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createupdate" tabindex="-1"><a class="header-anchor" href="#createupdate" aria-hidden="true">#</a> createUpdate</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createUpdate</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">eventTime</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">lane</span><span class="token operator">:</span> Lane</span><span class="token punctuation">)</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span><span class="token operator">*</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    eventTime<span class="token punctuation">,</span> <span class="token comment">// 更新时间</span>
    lane<span class="token punctuation">,</span> <span class="token comment">// 优先级</span>

    <span class="token literal-property property">tag</span><span class="token operator">:</span> UpdateState<span class="token punctuation">,</span><span class="token comment">//更新</span>
    <span class="token literal-property property">payload</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span><span class="token comment">// 需要更新的内容</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 更新完后的回调</span>

    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// 指向下一个更新</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> update<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>createUpdate</code>函数入参为<code>eventTime</code>和<code>lane</code>，输出一个<code>update</code>对象，而对象中的<code>tag</code>表示此对象要进行什么样的操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> UpdateState <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 更新</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ReplaceState <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//替换</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ForceUpdate <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//强制更新</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> CaptureUpdate <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">//xx更新</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>createUpdate</code>就是单纯的给每一个任务进行包装，作为一个个体推入到更新队列中。</li></ul><h3 id="enqueueupdate" tabindex="-1"><a class="header-anchor" href="#enqueueupdate" aria-hidden="true">#</a> enqueueUpdate</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> enqueueUpdate<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">(</span>fiber<span class="token operator">:</span> Fiber<span class="token punctuation">,</span> <span class="token literal-property property">update</span><span class="token operator">:</span> Update<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取当前更新队列？为啥呢？因为无法保证react是不是还有正在更新或者没有更新完毕的任务</span>
  <span class="token keyword">const</span> updateQueue <span class="token operator">=</span> fiber<span class="token punctuation">.</span>updateQueue<span class="token punctuation">;</span>
  <span class="token comment">//  如果更新队列为空，则表示fiber还未渲染，直接退出</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>updateQueue <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Only occurs if the fiber has been unmounted.</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token literal-property property">sharedQueue</span><span class="token operator">:</span> SharedQueue<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>updateQueue<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>shared<span class="token punctuation">;</span>
  <span class="token keyword">const</span> pending <span class="token operator">=</span> sharedQueue<span class="token punctuation">.</span>pending<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pending <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This is the first update. Create a circular list.</span>
     <span class="token comment">// 还记得那个更新对象吗？update.next =&gt;</span>
     <span class="token comment">// 如果pedding位null，表示第一次渲染，那么他的指针为update本身</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将update插入到更新队列循环当中</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> pending<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    pending<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  sharedQueue<span class="token punctuation">.</span>pending <span class="token operator">=</span> update<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      currentlyProcessingQueue <span class="token operator">===</span> sharedQueue <span class="token operator">&amp;&amp;</span>
      <span class="token operator">!</span>didWarnUpdateInsideUpdate
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
        <span class="token string">&#39;An update (setState, replaceState, or forceUpdate) was scheduled &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;from inside an update function. Update functions should be pure, &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;with zero side-effects. Consider using componentDidUpdate or a &#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;callback.&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      didWarnUpdateInsideUpdate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这一步就是把需要更新的对象，与<code>fiber</code>更新队列关联起来。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p><code>React</code>通过获取事件的优先级，处理具有同样优先级的事件，创建更新对象并与<code>fiber</code>的更新队列关联起来。到这一步<code>updateContainer</code>这个流程就走完了，也下面就是开始他的<code>协调阶段</code>了。</p><h3 id="协调与调度-1" tabindex="-1"><a class="header-anchor" href="#协调与调度-1" aria-hidden="true">#</a> 协调与调度</h3><p><code>协调</code>与<code>调度</code>的流程大致如图所示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae0a0b584f144d2ea2665998d520088b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"></p><h3 id="reconciler流程" tabindex="-1"><a class="header-anchor" href="#reconciler流程" aria-hidden="true">#</a> reconciler流程</h3><p><code>React</code>的<code>reconciler</code>流程以<code>scheduleUpdateOnFiber</code>为入口，并在<code>checkForNestedUpdates</code>里面处理任务更新的嵌套层数，如果嵌套层数过大（ <code>&gt;50</code> ），就会认为是无效更新，则会抛出异常。之后便根据<code>markUpdateLaneFromFiberToRoot</code>对当前的<code>fiber</code>树，自底向上的递归<code>fiber</code>的<code>lane</code>，根据<code>lane</code>做二进制比较或者位运算处理。详情如下：</p><ul><li>如果当前执行任务的优先级为同步，则去判断有无正在执行的<code>React</code>任务。如果没有则执行<code>ensureRootIsScheduled</code>，进行调度处理。</li><li>如果当前任务优先级是异步执行，则执行<code>ensureRootIsScheduled</code>进行调度处理。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">scheduleUpdateOnFiber</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">fiber</span><span class="token operator">:</span> Fiber<span class="token punctuation">,</span>  <span class="token literal-property property">lane</span><span class="token operator">:</span> Lane<span class="token punctuation">,</span>  <span class="token literal-property property">eventTime</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 检查嵌套层数，避免是循环做无效操作</span>
  <span class="token function">checkForNestedUpdates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">warnAboutRenderPhaseUpdatesInDEV</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 更新当前更新队列里面的任务优先级,自底而上更新child.fiberLanes</span>
  <span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">markUpdateLaneFromFiberToRoot</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warnAboutUpdateOnUnmountedFiberInDEV</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Mark that the root has a pending update.</span>
  <span class="token comment">// 标记root有更新的，执行它</span>
  <span class="token function">markRootUpdated</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> workInProgressRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Received an update to a tree that&#39;s in the middle of rendering. Mark</span>
    <span class="token comment">// that there was an interleaved update work on this root. Unless the</span>
    <span class="token comment">// \`deferRenderPhaseUpdateToNextBatch\` flag is off and this is a render</span>
    <span class="token comment">// phase update. In that case, we don&#39;t treat render phase updates as if</span>
    <span class="token comment">// they were interleaved, for backwards compat reasons.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      deferRenderPhaseUpdateToNextBatch <span class="token operator">||</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> RenderContext<span class="token punctuation">)</span> <span class="token operator">===</span> NoContext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      workInProgressRootUpdatedLanes <span class="token operator">=</span> <span class="token function">mergeLanes</span><span class="token punctuation">(</span>
        workInProgressRootUpdatedLanes<span class="token punctuation">,</span>
        lane<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>workInProgressRootExitStatus <span class="token operator">===</span> RootSuspendedWithDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The root already suspended with a delay, which means this render</span>
      <span class="token comment">// definitely won&#39;t finish. Since we have a new update, let&#39;s mark it as</span>
      <span class="token comment">// suspended now, right before marking the incoming update. This has the</span>
      <span class="token comment">// effect of interrupting the current render and switching to the update.</span>
      <span class="token comment">// TODO: Make sure this doesn&#39;t override pings that happen while we&#39;ve</span>
      <span class="token comment">// already started rendering.</span>
      <span class="token function">markRootSuspended</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> workInProgressRootRenderLanes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// TODO: requestUpdateLanePriority also reads the priority. Pass the</span>
  <span class="token comment">// priority as an argument to that function and this one.</span>
  <span class="token comment">// 获取当前优先级层次</span>
  <span class="token keyword">const</span> priorityLevel <span class="token operator">=</span> <span class="token function">getCurrentPriorityLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 同步任务，采用同步更新的方式</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lane <span class="token operator">===</span> SyncLane<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token comment">// Check if we&#39;re inside unbatchedUpdates</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> LegacyUnbatchedContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// Check if we&#39;re not already rendering</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> <span class="token punctuation">(</span>RenderContext <span class="token operator">|</span> CommitContext<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> NoContext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Register pending interactions on the root to avoid losing traced interaction data.</span>
      <span class="token comment">// 同步而且没有react任务在执行，调用performSyncWorkOnRoot</span>
      <span class="token function">schedulePendingInteractions</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// This is a legacy edge case. The initial mount of a ReactDOM.render-ed</span>
      <span class="token comment">// root inside of batchedUpdates should be synchronous, but layout updates</span>
      <span class="token comment">// should be deferred until the end of the batch.</span>

      <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>



    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果有正在执行的react任务，那么执行它ensureRootIsScheduled去复用当前正在执行的任务</span>
      <span class="token comment">// 跟本次更新一起进行</span>
      <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>





      <span class="token function">schedulePendingInteractions</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>executionContext <span class="token operator">===</span> NoContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Flush the synchronous work now, unless we&#39;re already working or inside</span>
        <span class="token comment">// a batch. This is intentionally inside scheduleUpdateOnFiber instead of</span>
        <span class="token comment">// scheduleCallbackForFiber to preserve the ability to schedule a callback</span>
        <span class="token comment">// without immediately flushing it. We only do this for user-initiated</span>
        <span class="token comment">// updates, to preserve historical behavior of legacy mode.</span>
        <span class="token function">resetRenderTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">flushSyncCallbackQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// Schedule a discrete update but only if it&#39;s not Sync.</span>
    <span class="token comment">// 如果此次是异步任务</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>executionContext <span class="token operator">&amp;</span> DiscreteEventContext<span class="token punctuation">)</span> <span class="token operator">!==</span> NoContext <span class="token operator">&amp;&amp;</span>
      <span class="token comment">// Only updates at user-blocking priority or greater are considered</span>
      <span class="token comment">// discrete, even inside a discrete event.</span>
      <span class="token punctuation">(</span>priorityLevel <span class="token operator">===</span> UserBlockingSchedulerPriority <span class="token operator">||</span>
        priorityLevel <span class="token operator">===</span> ImmediateSchedulerPriority<span class="token punctuation">)</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// This is the result of a discrete event. Track the lowest priority</span>
      <span class="token comment">// discrete update per root so we can flush them early, if needed.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rootsWithPendingDiscreteUpdates <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        rootsWithPendingDiscreteUpdates <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        rootsWithPendingDiscreteUpdates<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Schedule other updates after in case the callback is sync.</span>
    <span class="token comment">// 可以中断更新，只要调用ensureRootIsScheduled =&gt; performConcurrentWorkOnRoot</span>
    <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> eventTime<span class="token punctuation">)</span><span class="token punctuation">;</span>





    <span class="token function">schedulePendingInteractions</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> lane<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// We use this when assigning a lane for a transition inside</span>
  <span class="token comment">// \`requestUpdateLane\`. We assume it&#39;s the same as the root being updated,</span>
  <span class="token comment">// since in the common case of a single root app it probably is. If it&#39;s not</span>
  <span class="token comment">// the same root, then it&#39;s not a huge deal, we just might batch more stuff</span>
  <span class="token comment">// together more than necessary.</span>
  mostRecentlyUpdatedRoot <span class="token operator">=</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同步任务类型执行机制" tabindex="-1"><a class="header-anchor" href="#同步任务类型执行机制" aria-hidden="true">#</a> 同步任务类型执行机制</h4><p>当任务的类型为同步任务，并且当前的<code>js</code>主线程空闲，会通过 <code>performSyncWorkOnRoot(root)</code> 方法开始执行同步任务。</p><p><code>performSyncWorkOnRoot</code> 里面主要做了两件事：</p><ul><li><code>renderRootSync</code> 从根节点开始进行同步渲染任务</li><li><code>commitRoot</code> 执行 <code>commit</code> 流程</li></ul><p>当前<code>js</code>线程中有正在执行的任务时候，就会触发<code>ensureRootIsScheduled</code>函数。 <code>ensureRootIsScheduled</code>里面主要是处理当前加入的更新任务的<code>lane</code>是否有变化：</p><ul><li>如果没有变化则表示跟当前的<code>schedule</code>一起执行。</li><li>如果有则创建新的<code>schedule</code>。</li><li>调用<code>performSyncWorkOnRoot</code>执行同步任务。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ensureRootIsScheduled</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">root</span><span class="token operator">:</span> FiberRoot<span class="token punctuation">,</span> <span class="token literal-property property">currentTime</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> existingCallbackNode <span class="token operator">=</span> root<span class="token punctuation">.</span>callbackNode<span class="token punctuation">;</span>

  <span class="token comment">// Check if any lanes are being starved by other work. If so, mark them as</span>
  <span class="token comment">// expired so we know to work on those next.</span>
  <span class="token function">markStarvedLanesAsExpired</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Determine the next lanes to work on, and their priority.</span>
  <span class="token keyword">const</span> nextLanes <span class="token operator">=</span> <span class="token function">getNextLanes</span><span class="token punctuation">(</span>
    root<span class="token punctuation">,</span>
    root <span class="token operator">===</span> workInProgressRoot <span class="token operator">?</span> workInProgressRootRenderLanes <span class="token operator">:</span> NoLanes<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// This returns the priority level computed during the \`getNextLanes\` call.</span>
  <span class="token keyword">const</span> newCallbackPriority <span class="token operator">=</span> <span class="token function">returnNextLanesPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextLanes <span class="token operator">===</span> NoLanes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Special case: There&#39;s nothing to work on.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">cancelCallback</span><span class="token punctuation">(</span>existingCallbackNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> NoLanePriority<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Check if there&#39;s an existing task. We may be able to reuse it.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackNode <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> existingCallbackPriority <span class="token operator">=</span> root<span class="token punctuation">.</span>callbackPriority<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>existingCallbackPriority <span class="token operator">===</span> newCallbackPriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// The priority hasn&#39;t changed. We can reuse the existing task. Exit.</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// The priority changed. Cancel the existing callback. We&#39;ll schedule a new</span>
    <span class="token comment">// one below.</span>
    <span class="token function">cancelCallback</span><span class="token punctuation">(</span>existingCallbackNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Schedule a new callback.</span>
  <span class="token keyword">let</span> newCallbackNode<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newCallbackPriority <span class="token operator">===</span> SyncLanePriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Special case: Sync React callbacks are scheduled on a special</span>
    <span class="token comment">// internal queue</span>
    <span class="token comment">// 同步任务调用performSyncWorkOnRoot</span>
    newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleSyncCallback</span><span class="token punctuation">(</span>
      <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>newCallbackPriority <span class="token operator">===</span> SyncBatchedLanePriority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>
      ImmediateSchedulerPriority<span class="token punctuation">,</span>
      <span class="token function">performSyncWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异步任务调用 performConcurrentWorkOnRoot</span>
    <span class="token keyword">const</span> schedulerPriorityLevel <span class="token operator">=</span> <span class="token function">lanePriorityToSchedulerPriority</span><span class="token punctuation">(</span>
      newCallbackPriority<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    newCallbackNode <span class="token operator">=</span> <span class="token function">scheduleCallback</span><span class="token punctuation">(</span>
      schedulerPriorityLevel<span class="token punctuation">,</span>
      <span class="token function">performConcurrentWorkOnRoot</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  root<span class="token punctuation">.</span>callbackPriority <span class="token operator">=</span> newCallbackPriority<span class="token punctuation">;</span>
  root<span class="token punctuation">.</span>callbackNode <span class="token operator">=</span> newCallbackNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以任务类型为同步的时候，不管<code>js</code>线程空闲与否，都会走到<code>performSyncWorkOnRoot</code>，进而走<code>renderRootSync</code>、<code>workLoopSync</code>流程，而在<code>workLoopSync</code>中，只要<code>workInProgress fiber</code>不为<code>null</code>，则会一直循环执行<code>performUnitOfWork</code>，而<code>performUnitOfWork</code>中会去执行<code>beginWork</code>和<code>completeWork</code>，也就是上一章里面说的<code>beginWork</code>流程去创建每一个<code>fiber</code>节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// packages/react-reconciler/src/ReactFiberWorkLoop.old.js

function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异步任务类型执行机制" tabindex="-1"><a class="header-anchor" href="#异步任务类型执行机制" aria-hidden="true">#</a> 异步任务类型执行机制</h4><p>异步任务则会去执行<code>performConcurrentWorkOnRoot</code>，进而去执行<code>renderRootConcurrent</code>、<code>workLoopConcurrent</code>，但是与同步任务不同的是异步任务是可以中断的，这个可中断的关键字就在于<code>shouldYield</code>，它本身返回值是一个<code>false</code>，为<code>true</code>则可以中断。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// packages/react-reconciler/src/ReactFiberWorkLoop.old.js

function workLoopConcurrent() {
  while (workInProgress !== null &amp;&amp; !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一次在执行<code>performUnitOfWork</code>之前都会关注一下<code>shouldYield()</code>返回值，也就是说的<code>reconciler</code>过程可中断的意思。</p><h3 id="shouldyield" tabindex="-1"><a class="header-anchor" href="#shouldyield" aria-hidden="true">#</a> shouldYield</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// packages\\scheduler\\src\\SchedulerPostTask.js
export function unstable_shouldYield() {
  return getCurrentTime() &gt;= deadline;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>getCurrentTime</code>为<code>new Date()</code>，<code>deadline</code>为浏览器处理每一帧结束<code>时间戳</code>，所以这里表示的是，在浏览器每一帧空闲的时候，才会去处理此任务，如果当前任务在浏览器执行的<code>某一帧</code>里面，则会<code>中断当前任务</code>，等待浏览器当前帧执行完毕，等到<code>下一帧空闲</code>的时候，才会去执行当前任务。</p><p>所以不管在<code>workLoopConcurrent</code>还是<code>workLoopSync</code>中，都会根据当前的<code>workInProgress fiber</code>是否为<code>null</code>来进行循环调用<code>performUnitOfWork</code>。根据流程图以及上面说的这一些，可以看得出来从<code>beginWork</code>到<code>completeUnitOfWork</code>这个过程究竟干了什么。</p><p>这三章将会讲解<code>fiber</code>树的<code>reconcileChildren</code>过程、<code>completeWork</code>过程、<code>commitMutationEffects</code>..<code>insertOrAppendPlacementNodeIntoContainer(DOM)</code>过程。这里将详细解读<code>v17</code>版本的<code>React</code>的<code>diff算法</code>、<code>虚拟dom到真实dom的创建</code>，<code>函数生命钩子</code>的执行流程等。</p><h3 id="performunitofwork" tabindex="-1"><a class="header-anchor" href="#performunitofwork" aria-hidden="true">#</a> performUnitOfWork</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function performUnitOfWork(unitOfWork: Fiber): void {
  // The current, flushed, state of this fiber is the alternate. Ideally
  // nothing should rely on this, but relying on it here means that we don&#39;t
  // need an additional field on the work in progress.
  const current = unitOfWork.alternate;
  setCurrentDebugFiberInDEV(unitOfWork);

  let next;
  if (enableProfilerTimer &amp;&amp; (unitOfWork.mode &amp; ProfileMode) !== NoMode) {
    startProfilerTimer(unitOfWork);
    next = beginWork(current, unitOfWork, subtreeRenderLanes);
    stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
  } else {
    // beginWork
    next = beginWork(current, unitOfWork, subtreeRenderLanes);
  }

  resetCurrentDebugFiberInDEV();
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  if (next === null) {
    // If this doesn&#39;t spawn new work, complete the current work.
    // completeUnitOfWork
    completeUnitOfWork(unitOfWork);
  } else {
    workInProgress = next;
  }

  ReactCurrentOwner.current = null;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以在<code>performUnitOfWork</code>里面，每一次执行<code>beginWork</code>，进行workIngProgress更新，当遍历完毕整棵fiber树之后便会执行<code>completeUnitOfWork</code>。</p><h3 id="beginwork" tabindex="-1"><a class="header-anchor" href="#beginwork" aria-hidden="true">#</a> beginWork</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/501de29daaa34dcb90bd37edfb931b1b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"> <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da61041701c8412d909507a7b2b1a9b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"></p><p>我们可以看到<code>beginWork</code>就是<code>originBeginWork</code>得实际执行。我们翻开<code>beginWork</code>的源码可以看到，它便是根据不同的<code>workInProgress.tag</code>执行不同组件类型的处理函数，这里就不去拆分的太细，只有有想法便会单独出一篇文章讲述这个的细节，但是最后都会去调用<code>reconcileChildren</code>。</p><h3 id="completeunitofwork" tabindex="-1"><a class="header-anchor" href="#completeunitofwork" aria-hidden="true">#</a> completeUnitOfWork</h3><p>当遍历完毕执行<code>beginWork</code>，遍历完毕之后就会走<code>completeUnitOfWork</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function completeUnitOfWork(unitOfWork: Fiber): void {
  // Attempt to complete the current unit of work, then move to the next
  // sibling. If there are no more siblings, return to the parent fiber.
  let completedWork = unitOfWork;
  do {
    // The current, flushed, state of this fiber is the alternate. Ideally
    // nothing should rely on this, but relying on it here means that we don&#39;t
    // need an additional field on the work in progress.
    const current = completedWork.alternate;
    const returnFiber = completedWork.return;

    // Check if the work completed or if something threw.
    if ((completedWork.flags &amp; Incomplete) === NoFlags) {
      setCurrentDebugFiberInDEV(completedWork);
      let next;
      if (
        !enableProfilerTimer ||
        (completedWork.mode &amp; ProfileMode) === NoMode
      ) {
        // 绑定事件，更新props，更新dom
        next = completeWork(current, completedWork, subtreeRenderLanes);
      } else {
        startProfilerTimer(completedWork);
        next = completeWork(current, completedWork, subtreeRenderLanes);
        // Update render duration assuming we didn&#39;t error.
        stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
      }
      resetCurrentDebugFiberInDEV();

      if (next !== null) {
        // Completing this fiber spawned new work. Work on that next.
        workInProgress = next;
        return;
      }

      resetChildLanes(completedWork);

      if (
        returnFiber !== null &amp;&amp;
        // Do not append effects to parents if a sibling failed to complete
        (returnFiber.flags &amp; Incomplete) === NoFlags
      ) {
        // Append all the effects of the subtree and this fiber onto the effect
        // list of the parent. The completion order of the children affects the
        // side-effect order.

        // 把已收集到的副作用，合并到父级effect lists中
        if (returnFiber.firstEffect === null) {
          returnFiber.firstEffect = completedWork.firstEffect;
        }
        if (completedWork.lastEffect !== null) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = completedWork.firstEffect;
          }
          returnFiber.lastEffect = completedWork.lastEffect;
        }

        // If this fiber had side-effects, we append it AFTER the children&#39;s
        // side-effects. We can perform certain side-effects earlier if needed,
        // by doing multiple passes over the effect list. We don&#39;t want to
        // schedule our own side-effect on our own list because if end up
        // reusing children we&#39;ll schedule this effect onto itself since we&#39;re
        // at the end.
        const flags = completedWork.flags;

        // Skip both NoWork and PerformedWork tags when creating the effect
        // list. PerformedWork effect is read by React DevTools but shouldn&#39;t be
        // committed.
        // 跳过NoWork，PerformedWork在commit阶段用不到

        if (flags &gt; PerformedWork) {
          if (returnFiber.lastEffect !== null) {
            returnFiber.lastEffect.nextEffect = completedWork;
          } else {
            returnFiber.firstEffect = completedWork;
          }
          returnFiber.lastEffect = completedWork;
        }
      }
    } else {
      // This fiber did not complete because something threw. Pop values off
      // the stack without entering the complete phase. If this is a boundary,
      // capture values if possible.
      const next = unwindWork(completedWork, subtreeRenderLanes);

      // Because this fiber did not complete, don&#39;t reset its expiration time.

      if (next !== null) {
        // If completing this work spawned new work, do that next. We&#39;ll come
        // back here again.
        // Since we&#39;re restarting, remove anything that is not a host effect
        // from the effect tag.
        next.flags &amp;= HostEffectMask;
        workInProgress = next;
        return;
      }

      if (
        enableProfilerTimer &amp;&amp;
        (completedWork.mode &amp; ProfileMode) !== NoMode
      ) {
        // Record the render duration for the fiber that errored.
        stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);

        // Include the time spent working on failed children before continuing.
        let actualDuration = completedWork.actualDuration;
        let child = completedWork.child;
        while (child !== null) {
          actualDuration += child.actualDuration;
          child = child.sibling;
        }
        completedWork.actualDuration = actualDuration;
      }

      if (returnFiber !== null) {
        // Mark the parent fiber as incomplete and clear its effect list.
        returnFiber.firstEffect = returnFiber.lastEffect = null;
        returnFiber.flags |= Incomplete;
      }
    }

    // 兄弟层指针
    const siblingFiber = completedWork.sibling;
    if (siblingFiber !== null) {
      // If there is more work to do in this returnFiber, do that next.
      workInProgress = siblingFiber;
      return;
    }
    // Otherwise, return to the parent
    completedWork = returnFiber;
    // Update the next thing we&#39;re working on in case something throws.
    workInProgress = completedWork;
  } while (completedWork !== null);

  // We&#39;ve reached the root.
  if (workInProgressRootExitStatus === RootIncomplete) {
    workInProgressRootExitStatus = RootCompleted;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>他的作用便是逐层收集<code>fiber</code>树上已经被打上的副作用标签<code>flags</code>，一直收集到<code>root</code>上面以便于在<code>commit</code>阶段进行<code>dom</code>的<code>增删改</code>。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e45d224cfbbe43a7ad878fd4c933079b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"></p><h3 id="scheduler流程" tabindex="-1"><a class="header-anchor" href="#scheduler流程" aria-hidden="true">#</a> scheduler流程</h3><p>在这里应该有很多人不明白，<code>协调</code>和<code>调度</code>是什么意思，通俗来讲：</p><ul><li>协调就是协同合作</li><li>调度就是执行命令</li></ul><p>所以在<code>React</code>中协调就是一个<code>js</code>线程中，需要安排很多模块去完成整个流程，例如：同步异步<code>lane</code>的处理，<code>reconcileChildren</code>处理<code>fiber</code>节点等，保证整个流程有条不紊的执行。调度表现为让<code>空闲的js线程</code>（帧层面）去执行其他任务，这个过程称之为调度，那么它到底是怎么去做的呢？ 我们回到处理异步任务那里，我们会发现<code>performConcurrentWorkOnRoot</code>这个函数外面包裹了一层<code>scheduleCallback</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>newCallbackNode = scheduleCallback(
   schedulerPriorityLevel,
   performConcurrentWorkOnRoot.bind(null, root),
)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function scheduleCallback(
  reactPriorityLevel: ReactPriorityLevel,  callback: SchedulerCallback,  options: SchedulerCallbackOptions | void | null,
) {
  const priorityLevel = reactPriorityToSchedulerPriority(reactPriorityLevel);
  return Scheduler_scheduleCallback(priorityLevel, callback, options);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd7d19da333146f8a8db382165ecc5fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"></p><p>我们几经周折找到了声明函数的地方</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// packages/scheduler/src/Scheduler.js
function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = getCurrentTime();

  var startTime;
  if (typeof options === &#39;object&#39; &amp;&amp; options !== null) {
    var delay = options.delay;
    if (typeof delay === &#39;number&#39; &amp;&amp; delay &gt; 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;
  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;
    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;
    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;
    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;
    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;

  var newTask = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };
  if (enableProfiling) {
    newTask.isQueued = false;
  }

  if (startTime &gt; currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);
    if (peek(taskQueue) === null &amp;&amp; newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      }
      // Schedule a timeout.
      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    if (enableProfiling) {
      markTaskStart(newTask, currentTime);
      newTask.isQueued = true;
    }
    // Schedule a host callback, if needed. If we&#39;re already performing work,
    // wait until the next time we yield.
    if (!isHostCallbackScheduled &amp;&amp; !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当<code>starttime &gt; currentTime</code>的时候，表示任务超时，插入超时队列。</li><li>任务没有超时，插入调度队列</li><li>执行<code>requestHostCallback</code>调度任务。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // 创建消息通道
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  // 告知scheduler开始调度
  requestHostCallback = function(callback) {
    scheduledHostCallback = callback;
    if (!isMessageLoopRunning) {
      isMessageLoopRunning = true;
      port.postMessage(null);
    }
  };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>react</code>通过 <code>new MessageChannel()</code> 创建了消息通道，当发现<code>js</code>线程空闲时，通过<code>postMessage</code>通知 <code>scheduler</code>开始调度。<code>performWorkUntilDeadline</code>函数功能为处理<code>react</code>调度开始时间更新到结束时间。 这里我们要关注一下设备帧速率。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  forceFrameRate = function(fps) {
    if (fps &lt; 0 || fps &gt; 125) {
      // Using console[&#39;error&#39;] to evade Babel and ESLint
      console[&#39;error&#39;](
        &#39;forceFrameRate takes a positive int between 0 and 125, &#39; +
          &#39;forcing frame rates higher than 125 fps is not supported&#39;,
      );
      return;
    }
    if (fps &gt; 0) {
      yieldInterval = Math.floor(1000 / fps);
    } else {
      // reset the framerate
      yieldInterval = 5;
    }
  };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="performworkuntildeadline" tabindex="-1"><a class="header-anchor" href="#performworkuntildeadline" aria-hidden="true">#</a> performWorkUntilDeadline</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  const performWorkUntilDeadline = () =&gt; {
    if (scheduledHostCallback !== null) {
      const currentTime = getCurrentTime();
      // Yield after \`yieldInterval\` ms, regardless of where we are in the vsync
      // cycle. This means there&#39;s always time remaining at the beginning of
      // the message event.
      // 更新当前帧结束时间
      deadline = currentTime + yieldInterval;
      const hasTimeRemaining = true;
      try {
        const hasMoreWork = scheduledHostCallback(
          hasTimeRemaining,
          currentTime,
        );
        // 还有任务就继续执行
        if (!hasMoreWork) {
          isMessageLoopRunning = false;
          scheduledHostCallback = null;
        } else {
          // If there&#39;s more work, schedule the next message event at the end
          // of the preceding one.
          // 没有就postMessage
          port.postMessage(null);
        }
      } catch (error) {
        // If a scheduler task throws, exit the current browser task so the
        // error can be observed.
        port.postMessage(null);
        throw error;
      }
    } else {
      isMessageLoopRunning = false;
    }
    // Yielding to the browser will give it a chance to paint, so we can
    // reset this.
    needsPaint = false;
  };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/001ccf21e9194d77aebfa0f4b35ceb72~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="在这里插入图片描述"></p><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3><p>本文讲了<code>React</code>在状态改变的时候，会根据当前任务优先级，等一些列操作去创建<code>workInProgress fiber</code>链表树，在协调阶段，会根据浏览器每一帧去做比较，假如浏览器<code>每一帧</code>执行时间戳高于当前时间，则表示当前帧没有空闲时间，当前任务则必须要等到<code>下一个空闲帧</code>才能去执行的<code>可中断</code>的策略。还有关于<code>beginWork</code>的遍历执行更新<code>fiber</code>的节点。那么到这里这一章就讲述完毕了，下一章讲一讲React的diff算法</p>`,69);function v(k,m){const a=c("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[s("相关参考视频讲解："),n("a",d,[s("进入学习"),l(a)])]),u])}const h=t(p,[["render",v],["__file","index.html.vue"]]);export{h as default};
