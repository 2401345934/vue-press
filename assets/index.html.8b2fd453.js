import{_ as n,z as s,A as a,a6 as p}from"./framework.fef63301.js";const e={},t=p(`<h1 id="常用hooks" tabindex="-1"><a class="header-anchor" href="#常用hooks" aria-hidden="true">#</a> 常用hooks</h1><h2 id="useafter" tabindex="-1"><a class="header-anchor" href="#useafter" aria-hidden="true">#</a> useAfter</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 后置装饰器，按照AOP原则为功能动态注入一个后置函数，默认同步
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useAfter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> afterFn<span class="token punctuation">,</span> isSync <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> isSync <span class="token operator">?</span> <span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>afterFn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">afterFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isSync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> v <span class="token keyword">of</span> afterFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line no-await-in-loop</span>
        <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">v</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      afterFn<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token function">v</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 使用方式：useAfter(fn, afterFn, [true | false])(params)
 * */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usebefore" tabindex="-1"><a class="header-anchor" href="#usebefore" aria-hidden="true">#</a> useBefore</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 前置装饰器，按照AOP原则为功能动态注入一个前置函数，默认同步
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useBefore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> beforeFn<span class="token punctuation">,</span> isAsync <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>beforeFn<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isAsync <span class="token operator">?</span> <span class="token function">beforeFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">beforeFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>isAsync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      beforeFn<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token function">v</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> v <span class="token keyword">of</span> beforeFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// eslint-disable-next-line no-await-in-loop</span>
        <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">v</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 使用方式：useBefore(fn, beforeFn, true)(params)
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="责任链-chain" tabindex="-1"><a class="header-anchor" href="#责任链-chain" aria-hidden="true">#</a> 责任链 Chain</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 责任链 类
 * */</span>
<span class="token keyword">class</span> <span class="token class-name">Chain</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fn <span class="token operator">=</span> fn
    <span class="token keyword">this</span><span class="token punctuation">.</span>successor <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置责任链</span>
  <span class="token function">setNextSuccessor</span><span class="token punctuation">(</span><span class="token parameter">successor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>successor <span class="token operator">=</span> successor
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>successor
  <span class="token punctuation">}</span>

  <span class="token comment">// 设置每个节点的调用方式</span>
  <span class="token keyword">async</span> <span class="token function">passRequest</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line prefer-spread</span>
    <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ret <span class="token operator">===</span> <span class="token string">&#39;nextSuccessor&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token comment">// eslint-disable-next-line prefer-spread</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>successor <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">.</span><span class="token function">passRequest</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ret
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖-usedebounce" tabindex="-1"><a class="header-anchor" href="#防抖-usedebounce" aria-hidden="true">#</a> 防抖 useDebounce</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">/*
 * 防抖
 * */</span>

<span class="token doc-comment comment">/**
 * 防抖
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">func</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">wait</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">immediate</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** 调用debounce声明一下变量 * */</span>
  <span class="token keyword">let</span> timeout
  <span class="token keyword">let</span> args
  <span class="token keyword">let</span> context
  <span class="token keyword">let</span> timestamp
  <span class="token keyword">let</span> resullt
  <span class="token doc-comment comment">/** 初次由return函数调用, 后面自己递归调用 * */</span>
  <span class="token keyword">const</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 记录在wait时间内上一次执行return函数的时间间隔</span>
    <span class="token keyword">const</span> last <span class="token operator">=</span> now <span class="token operator">-</span> timestamp
    <span class="token comment">// 时间间隔小于wait,继续递归调用</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>last <span class="token operator">&lt;</span> wait <span class="token operator">&amp;&amp;</span> last <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait <span class="token operator">-</span> last<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token comment">// 用于immediate==false在结束边界调用</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        resullt <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// eslint-disable-next-line prefer-rest-params</span>
    args <span class="token operator">=</span> arguments
    timestamp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> exec <span class="token operator">=</span> immediate <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>timeout
    <span class="token comment">// 初次timeout不存在,设置延时调用later</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> wait<span class="token punctuation">)</span>
    <span class="token comment">// 用于immediate==true在开始边界调用</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exec<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resullt <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> resullt
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useDebounce <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>
  <span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3e2</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
 * 使用方式：useDebounce(() =&gt; {})
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usedelay" tabindex="-1"><a class="header-anchor" href="#usedelay" aria-hidden="true">#</a> useDelay</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 延时
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useDelay</span> <span class="token operator">=</span> <span class="token parameter">wait</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> wait<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">/*
 * 使用方式：await useDelay(1e3)
 * */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uselock" tabindex="-1"><a class="header-anchor" href="#uselock" aria-hidden="true">#</a> useLock</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 锁机制-&gt; 解决多次连续触发接口问题，防双击
 * 默认情况下，需要原函数返回一个promise以达到promise决议后将locking重置为false，而如果没有返回值，locking将会被立即重置
 * 在一些不方便返回promise或者请求结束还要进行其它动作之后才能重置locking的地方，提供了第二个参数manual，允许你可以手动调用一个done函数来重置locking，这个done函数会放在原函数参数列表的末尾
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useLock</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> manual <span class="token operator">=</span> <span class="token boolean">false</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> locking <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>locking<span class="token punctuation">)</span> <span class="token keyword">return</span>
    locking <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">let</span> <span class="token function-variable function">done</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      locking <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>manual<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> done<span class="token punctuation">)</span>

    <span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>promise<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>done<span class="token punctuation">)</span>
    <span class="token keyword">return</span> promise
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const useLock = lock(cb =&gt; {</span>
<span class="token comment">//   return cb()</span>
<span class="token comment">// }, false)</span>

<span class="token comment">/*
 * 使用方式：useLock(fn)
 * fn 为return 的一个Promise
 * 特殊说明：组件上使用时请注意this指向，建议使用方式 useLock(fn.bind(this))
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="责任链-middleware" tabindex="-1"><a class="header-anchor" href="#责任链-middleware" aria-hidden="true">#</a> 责任链 Middleware</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 中间件 类
 * */</span>
<span class="token keyword">class</span> <span class="token class-name">Middleware</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$cache <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$middlewares <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 注册中间件</span>
  <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    args<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$cache<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 每个中间件只有两个形参 第一是传进来的参数 第二个是调用下一个中间件的函数
   * 中间件的执行顺序是根据你注册中间件的顺序来去调用的
   */</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$middlewares<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> ware <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$middlewares<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">ware</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 注册事件
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">name</span> 事件名称
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function <span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> 回调函数
   */</span>
  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$events<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> callback
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;事件回调必须为函数&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 触发事件
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">name</span> 事件名称
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Any<span class="token punctuation">}</span></span> <span class="token parameter">params</span> 回调参数
   */</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$events<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> callback <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$events<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;没有注册这个事件&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$middlewares <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$cache<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 复制一份</span>
      <span class="token keyword">return</span> fn
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">executeFc</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      params<span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token punctuation">{</span> resolve<span class="token punctuation">,</span> reject <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useonce" tabindex="-1"><a class="header-anchor" href="#useonce" aria-hidden="true">#</a> useOnce</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 让一个事件（一个函数）只允许调用一次
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useOnce</span> <span class="token operator">=</span> <span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>called<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      called <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 使用方式：useOnce(() =&gt; {})
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usesafecall" tabindex="-1"><a class="header-anchor" href="#usesafecall" aria-hidden="true">#</a> useSafeCall</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useSafeCall</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>callback <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> err
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useservices" tabindex="-1"><a class="header-anchor" href="#useservices" aria-hidden="true">#</a> useServices</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> <span class="token function-variable function">isObject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> fn <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>

<span class="token doc-comment comment">/**
 * 判断是否为Promise
 * 参考vue-next源码的shared模块（https://github.com/vuejs/core/blob/be1e42eb923a3fdf1ae90fb6cecb0be275e3694a/packages/shared/src/index.ts）
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPromise</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isObject</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>then<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>catch<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 处理异步任务中间件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> Promise <span class="token punctuation">}</span></span> <span class="token parameter">promise</span> 异步任务
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span> Array<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span> <span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">promiseMiddleware</span> <span class="token operator">=</span> <span class="token parameter">promise</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> promise
      <span class="token operator">?.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>res<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token operator">?.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> err<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token operator">?.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取当前请求接口
 * <span class="token keyword">@example</span>
 <span class="token example">* <span class="token code language-javascript">example1：<span class="token keyword">const</span> <span class="token punctuation">[</span>success<span class="token punctuation">,</span> error<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useServices</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span><span class="token function">fetchService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
 * <span class="token code language-javascript">example2：<span class="token keyword">const</span> <span class="token punctuation">[</span>success<span class="token punctuation">,</span> error<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useServices</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span></span>
 * <span class="token code language-javascript">example3：<span class="token keyword">const</span> <span class="token punctuation">[</span>success<span class="token punctuation">,</span> error<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useServices</span><span class="token punctuation">(</span>str<span class="token operator">/</span>obj<span class="token punctuation">)</span></span></span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span> Object <span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">useServices</span> <span class="token operator">=</span> <span class="token parameter">payload</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isPromise</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果是函数，直接执行函数(同步任务)，同时把函数返回值作为Promise的成功状态参数</span>
      <span class="token comment">// 如果是基本类型和对象，直接把参数作为Promise的成功状态参数</span>
      <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">payload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> payload
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">promiseMiddleware</span><span class="token punctuation">(</span>promise <span class="token operator">||</span> payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 使用方式：useServices(api.fetchData())
 * */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="状态机-state" tabindex="-1"><a class="header-anchor" href="#状态机-state" aria-hidden="true">#</a> 状态机 State</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * 状态模式 状态机
 *  */</span>
<span class="token keyword">class</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">actions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存储当前执行的状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>actions <span class="token operator">=</span> actions
  <span class="token punctuation">}</span>

  <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 清空当前的状态</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>

  <span class="token function">go</span><span class="token punctuation">(</span><span class="token parameter">params<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前集合中的状态依次执行</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentState<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>
      <span class="token parameter">k</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>actions<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>actions<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> State

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流-usethrottle" tabindex="-1"><a class="header-anchor" href="#节流-usethrottle" aria-hidden="true">#</a> 节流 useThrottle</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">/*
 * 节流
 * */</span>

<span class="token doc-comment comment">/**
 * 节流
 * <span class="token keyword">@param</span>   <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span>  <span class="token parameter">func</span>        传入函数
 * <span class="token keyword">@param</span>   <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>    <span class="token parameter">wait</span>        表示时间窗口的间隔
 * <span class="token keyword">@param</span>   <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span>    <span class="token parameter">options</span>     如果想忽略开始边界上的调用，传入<span class="token punctuation">{</span>leading: false<span class="token punctuation">}</span>。
 *                                  如果想忽略结尾边界上的调用，传入<span class="token punctuation">{</span>trailing: false<span class="token punctuation">}</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">}</span></span>              返回客户调用函数   返回客户调用函数
 */</span>
<span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> timeout
  <span class="token keyword">let</span> context
  <span class="token keyword">let</span> args
  <span class="token keyword">let</span> result
  <span class="token keyword">let</span> previous <span class="token operator">=</span> <span class="token number">0</span>
  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 延时执行函数</span>
  <span class="token keyword">let</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。</span>
    previous <span class="token operator">=</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> now
    timeout <span class="token operator">=</span> <span class="token keyword">null</span>
    result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// eslint-disable-next-line prefer-rest-params</span>
    args <span class="token operator">=</span> arguments
    <span class="token keyword">let</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>previous <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> previous <span class="token operator">=</span> now
    <span class="token keyword">let</span> remaining <span class="token operator">=</span> wait <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span>
    <span class="token comment">// 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口</span>
    <span class="token comment">// remaining大于时间窗口wait，表示客户端系统时间被调整过</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> remaining <span class="token operator">&gt;</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
      timeout <span class="token operator">=</span> <span class="token keyword">null</span>
      previous <span class="token operator">=</span> now
      result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span>
      <span class="token comment">// 如果延迟执行不存在，且没有设定结尾边界不执行选项</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>trailing <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> remaining<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useThrottle <span class="token operator">=</span> <span class="token function">throttle</span><span class="token punctuation">(</span>
  <span class="token parameter">cb</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token number">3e2</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token comment">/*
 * 使用方式：useThrottle(() =&gt; {})
 * */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> useThrottle

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};
