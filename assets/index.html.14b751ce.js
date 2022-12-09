import{_ as n,z as s,A as a,a6 as p}from"./framework.fef63301.js";const e="/vue-press/assets/text.78503f6d.png",t="/vue-press/assets/nodeChildren.a501d4c3.png",o="/vue-press/assets/null.0056c38e.png",c="/vue-press/assets/update.9ae39dcd.png",i={},l=p(`<h1 id="组件的渲染流程" tabindex="-1"><a class="header-anchor" href="#组件的渲染流程" aria-hidden="true">#</a> 组件的渲染流程</h1><h2 id="渲染函数更新组件的过程" tabindex="-1"><a class="header-anchor" href="#渲染函数更新组件的过程" aria-hidden="true">#</a> 渲染函数更新组件的过程</h2><h3 id="更新组件主要做了三件事情" tabindex="-1"><a class="header-anchor" href="#更新组件主要做了三件事情" aria-hidden="true">#</a> 更新组件主要做了三件事情</h3><ol><li>更新组件 vnode 节点</li><li>渲染新的子树 vnode</li><li>根据新旧子树 vnode 执行 patch 逻辑</li></ol><h2 id="patch-流程" tabindex="-1"><a class="header-anchor" href="#patch-流程" aria-hidden="true">#</a> patch 流程</h2><p>首先判断 新旧节点是否相同 vnode 类型 如果不同 则删除旧的节点 再创建新的节点 如果类型相同 则需要进入 diff 更新流程了 然后根据不同的 vnode 类型 执行 不同的逻辑处理</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> patch<span class="token operator">:</span> <span class="token function-variable function">PatchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    n1<span class="token punctuation">,</span>
    n2<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentComponent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    slotScopeIds <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimized <span class="token operator">=</span> __DEV__ <span class="token operator">&amp;&amp;</span> isHmrUpdating <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>n2<span class="token punctuation">.</span>dynamicChildren
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">===</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// patching &amp; not same type, unmount old tree</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isSameVNodeType</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      anchor <span class="token operator">=</span> <span class="token function">getNextHostNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
      <span class="token function">unmount</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      n1 <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>patchFlag <span class="token operator">===</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">BAIL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      optimized <span class="token operator">=</span> <span class="token boolean">false</span>
      n2<span class="token punctuation">.</span>dynamicChildren <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> Text<span class="token operator">:</span>
        <span class="token function">processText</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> Comment<span class="token operator">:</span>
        <span class="token function">processCommentNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> Static<span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">mountStaticNode</span><span class="token punctuation">(</span>n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">patchStaticNode</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> container<span class="token punctuation">,</span> isSVG<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">break</span>
      <span class="token keyword">case</span> Fragment<span class="token operator">:</span>
        <span class="token function">processFragment</span><span class="token punctuation">(</span>
          n1<span class="token punctuation">,</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
        <span class="token keyword">break</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processElement</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">processComponent</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token keyword">typeof</span> TeleportImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>
            n1 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span>
            n2 <span class="token keyword">as</span> TeleportVNode<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized<span class="token punctuation">,</span>
            internals
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token keyword">typeof</span> SuspenseImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>
            n1<span class="token punctuation">,</span>
            n2<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized<span class="token punctuation">,</span>
            internals
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid VNode type:&#39;</span><span class="token punctuation">,</span> type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">typeof</span> <span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// set ref</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ref <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> parentComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setRef</span><span class="token punctuation">(</span>ref<span class="token punctuation">,</span> n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>ref<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> n2 <span class="token operator">||</span> n1<span class="token punctuation">,</span> <span class="token operator">!</span>n2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="首先处理组件" tabindex="-1"><a class="header-anchor" href="#首先处理组件" aria-hidden="true">#</a> 首先处理组件</h3><ol><li>执行 processComponent 中 再执行 updateComponent 函数来更新子组件</li><li>updateComponent 函数在更新子组件的时候 会先执行 shouldUpdateComponent 函数 根据新旧子组件 vnode 判断是否需要更新</li><li>shouldUpdateComponent 内部 主要通过检测并对比组件的 vnode 中的 props children dirs 和 transition 等属性 来决定是否更新</li><li>shouldUpdateComponent 返回 true 会先执行 invalidateJob（instance.update)</li><li>再执行 子组件的副作用函数 instance.update 主动触发子组件的更新</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">processComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    n1<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    n2<span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    container<span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    anchor<span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentComponent<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense<span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    slotScopeIds<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimized<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    n2<span class="token punctuation">.</span>slotScopeIds <span class="token operator">=</span> slotScopeIds
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT_KEPT_ALIVE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">;</span><span class="token punctuation">(</span>parentComponent<span class="token operator">!</span><span class="token punctuation">.</span>ctx <span class="token keyword">as</span> KeepAliveContext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">activate</span><span class="token punctuation">(</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">mountComponent</span><span class="token punctuation">(</span>
          n2<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">updateComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span>n1<span class="token operator">:</span> VNode<span class="token punctuation">,</span> n2<span class="token operator">:</span> VNode<span class="token punctuation">,</span> optimized<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span>component <span class="token operator">=</span> n1<span class="token punctuation">.</span>component<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldUpdateComponent</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>
        __FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span>
        instance<span class="token punctuation">.</span>asyncDep <span class="token operator">&amp;&amp;</span>
        <span class="token operator">!</span>instance<span class="token punctuation">.</span>asyncResolved
      <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// async &amp; still pending - just update props and slots</span>
        <span class="token comment">// since the component&#39;s reactive effect for render isn&#39;t set-up yet</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">pushWarningContext</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">updateComponentPreRender</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> n2<span class="token punctuation">,</span> optimized<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">popWarningContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// normal update</span>
        instance<span class="token punctuation">.</span>next <span class="token operator">=</span> n2
        <span class="token comment">// in case the child component is also queued, remove it to avoid</span>
        <span class="token comment">// double updating the same child component in the same flush.</span>
        <span class="token function">invalidateJob</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>update<span class="token punctuation">)</span>
        <span class="token comment">// instance.update is the reactive effect.</span>
        instance<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// no update needed. just copy over properties</span>
      n2<span class="token punctuation">.</span>el <span class="token operator">=</span> n1<span class="token punctuation">.</span>el
      instance<span class="token punctuation">.</span>vnode <span class="token operator">=</span> n2
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理普通元素" tabindex="-1"><a class="header-anchor" href="#处理普通元素" aria-hidden="true">#</a> 处理普通元素</h3><ol><li>执行 processElement 逻辑</li><li>更新元素的过程中主要做了两件事 更新 props 以及 更新子节点</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
  <span class="token keyword">const</span> <span class="token function-variable function">processElement</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    n1<span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    n2<span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    container<span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    anchor<span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentComponent<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense<span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
    slotScopeIds<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimized<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    isSVG <span class="token operator">=</span> isSVG <span class="token operator">||</span> <span class="token punctuation">(</span>n2<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;svg&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">mountElement</span><span class="token punctuation">(</span>
        n2<span class="token punctuation">,</span>
        container<span class="token punctuation">,</span>
        anchor<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        isSVG<span class="token punctuation">,</span>
        slotScopeIds<span class="token punctuation">,</span>
        optimized
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">patchElement</span><span class="token punctuation">(</span>
        n1<span class="token punctuation">,</span>
        n2<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense<span class="token punctuation">,</span>
        isSVG<span class="token punctuation">,</span>
        slotScopeIds<span class="token punctuation">,</span>
        optimized
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新-props" tabindex="-1"><a class="header-anchor" href="#更新-props" aria-hidden="true">#</a> 更新 props</h3><p>patchProps 函数 会更新 DOM 节点的 class style event 等等其他 dom 属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">patchProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    el<span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
    vnode<span class="token operator">:</span> VNode<span class="token punctuation">,</span>
    oldProps<span class="token operator">:</span> Data<span class="token punctuation">,</span>
    newProps<span class="token operator">:</span> Data<span class="token punctuation">,</span>
    parentComponent<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    parentSuspense<span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    isSVG<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps <span class="token operator">!==</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>oldProps <span class="token operator">!==</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> oldProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isReservedProp</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>
              el<span class="token punctuation">,</span>
              key<span class="token punctuation">,</span>
              oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token keyword">null</span><span class="token punctuation">,</span>
              isSVG<span class="token punctuation">,</span>
              vnode<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              parentComponent<span class="token punctuation">,</span>
              parentSuspense<span class="token punctuation">,</span>
              unmountChildren
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// empty string is not valid prop</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReservedProp</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
        <span class="token keyword">const</span> next <span class="token operator">=</span> newProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">const</span> prev <span class="token operator">=</span> oldProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token comment">// defer patching value</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!==</span> prev <span class="token operator">&amp;&amp;</span> key <span class="token operator">!==</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>
            el<span class="token punctuation">,</span>
            key<span class="token punctuation">,</span>
            prev<span class="token punctuation">,</span>
            next<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            vnode<span class="token punctuation">.</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            unmountChildren
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span> <span class="token keyword">in</span> newProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">hostPatchProp</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span> oldProps<span class="token punctuation">.</span>value<span class="token punctuation">,</span> newProps<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新子节点" tabindex="-1"><a class="header-anchor" href="#更新子节点" aria-hidden="true">#</a> 更新子节点</h3><p>patchChildren 函数</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> patchChildren<span class="token operator">:</span> <span class="token function-variable function">PatchChildrenFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    n1<span class="token punctuation">,</span>
    n2<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor<span class="token punctuation">,</span>
    parentComponent<span class="token punctuation">,</span>
    parentSuspense<span class="token punctuation">,</span>
    isSVG<span class="token punctuation">,</span>
    slotScopeIds<span class="token punctuation">,</span>
    optimized <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> c1 <span class="token operator">=</span> n1 <span class="token operator">&amp;&amp;</span> n1<span class="token punctuation">.</span>children
    <span class="token keyword">const</span> prevShapeFlag <span class="token operator">=</span> n1 <span class="token operator">?</span> n1<span class="token punctuation">.</span>shapeFlag <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token keyword">const</span> c2 <span class="token operator">=</span> n2<span class="token punctuation">.</span>children

    <span class="token keyword">const</span> <span class="token punctuation">{</span> patchFlag<span class="token punctuation">,</span> shapeFlag <span class="token punctuation">}</span> <span class="token operator">=</span> n2
    <span class="token comment">// fast path</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">KEYED_FRAGMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// this could be either fully-keyed or mixed (some keyed some not)</span>
        <span class="token comment">// presence of patchFlag means children are guaranteed to be arrays</span>
        <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span>
          c1 <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          c2 <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>patchFlag <span class="token operator">&amp;</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">UNKEYED_FRAGMENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// unkeyed</span>
        <span class="token function">patchUnkeyedChildren</span><span class="token punctuation">(</span>
          c1 <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          c2 <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
          container<span class="token punctuation">,</span>
          anchor<span class="token punctuation">,</span>
          parentComponent<span class="token punctuation">,</span>
          parentSuspense<span class="token punctuation">,</span>
          isSVG<span class="token punctuation">,</span>
          slotScopeIds<span class="token punctuation">,</span>
          optimized
        <span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// children has 3 possibilities: text, array or no children.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TEXT_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// text children fast path</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>prevShapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">unmountChildren</span><span class="token punctuation">(</span>c1 <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>c2 <span class="token operator">!==</span> c1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">hostSetElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> c2 <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>prevShapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// prev children was array</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// two arrays, cannot assume anything, do full diff</span>
          <span class="token function">patchKeyedChildren</span><span class="token punctuation">(</span>
            c1 <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            c2 <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// no new children, just unmount old</span>
          <span class="token function">unmountChildren</span><span class="token punctuation">(</span>c1 <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> parentComponent<span class="token punctuation">,</span> parentSuspense<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// prev children was text OR null</span>
        <span class="token comment">// new children is array OR null</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevShapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TEXT_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">hostSetElementText</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// mount new if array</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">mountChildren</span><span class="token punctuation">(</span>
            c2 <span class="token keyword">as</span> VNodeArrayChildren<span class="token punctuation">,</span>
            container<span class="token punctuation">,</span>
            anchor<span class="token punctuation">,</span>
            parentComponent<span class="token punctuation">,</span>
            parentSuspense<span class="token punctuation">,</span>
            isSVG<span class="token punctuation">,</span>
            slotScopeIds<span class="token punctuation">,</span>
            optimized
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>元素子节点 vnode 一般会有 三种情况 ： 纯文本 vnode 数组 和空 纯文本 <img src="`+e+'" alt="图片"></p><p>vnode数组 <img src="'+t+'" alt="图片"></p><p>空 <img src="'+o+'" alt="图片"></p><h2 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法" aria-hidden="true">#</a> diff 算法</h2><h3 id="同步头部节点" tabindex="-1"><a class="header-anchor" href="#同步头部节点" aria-hidden="true">#</a> 同步头部节点</h3><p>需要维护几个变量</p><ol><li>头部的索引 i</li><li>旧子节点的尾部索引 e1</li><li>新子节点的尾部索引 e2 从头部开始 依次对比新旧节点 如果相同 执行 patch 更新节点 不同或者 索引 i 大于 e1 或 e2 则同步过程结束</li></ol><h3 id="同步尾部节点" tabindex="-1"><a class="header-anchor" href="#同步尾部节点" aria-hidden="true">#</a> 同步尾部节点</h3><p>依次对比新旧节点 如果相同 执行 patch 更新节点 不同 或者 索引 i 大于 e1 或e2 则同步过程结束</p><h3 id="处理完-头部尾部节点-只会剩下三种情况" tabindex="-1"><a class="header-anchor" href="#处理完-头部尾部节点-只会剩下三种情况" aria-hidden="true">#</a> 处理完 头部尾部节点 只会剩下三种情况</h3><ol><li>新子节点有剩余 添加新节点 a. 如果索引 i 大于 尾部索引 e1 并且小于 e2 b. 直接挂载新子树丛索引 i 开始 到 索引 e2 部分</li><li>旧子节点有剩余 删除多余节点 a. 如果索引 i 大于 尾部索引 e2 b. 直接删除旧子树从索引 i 开始到索引 e1 部分到节点</li><li>未知子序列 a. diff</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ol><li>vue 视图更新粒度是组件级别的</li><li>patch 过程 递归便利子节点的时候 如果遇到组件的 vnode 会进行一些判断 在满足某些条件的时候会触发子组件的更新</li><li>对于普通元素的节点 主要是更新一些属性及其子节点</li><li>子节点的更新又分为多种情况 其中 最复杂的情况为数组到数组的更新 要在内部根据不同的情况分成几个 diff 流程 a. 在需要移动的时候还要求解子节点的最长递增子序列</li><li>整个更新过程 利用来 树的深度遍历 通过递归执行 patch 函数 完成整个组件树的更新 <img src="'+c+'" alt="图片"></li></ol>',33),u=[l];function d(r,k){return s(),a("div",null,u)}const m=n(i,[["render",d],["__file","index.html.vue"]]);export{m as default};
