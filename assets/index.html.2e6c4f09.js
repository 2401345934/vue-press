import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const p="/vue-press/assets/mount.fd608c61.png",t={},o=e(`<h1 id="组件的初始化流程" tabindex="-1"><a class="header-anchor" href="#组件的初始化流程" aria-hidden="true">#</a> 组件的初始化流程</h1><h2 id="组件的创建" tabindex="-1"><a class="header-anchor" href="#组件的创建" aria-hidden="true">#</a> 组件的创建</h2><h3 id="什么是-vnode" tabindex="-1"><a class="header-anchor" href="#什么是-vnode" aria-hidden="true">#</a> 什么是 vnode</h3><ol><li>vnode 本质上是用来描述 DOM 的 Javascript 对象 在 vue 中 可以描述不同类型的节点</li><li>比如普通元素节点。组件节点等</li></ol><h2 id="如何创建-vnode" tabindex="-1"><a class="header-anchor" href="#如何创建-vnode" aria-hidden="true">#</a> 如何创建 vnode</h2><h3 id="createbasevnode" tabindex="-1"><a class="header-anchor" href="#createbasevnode" aria-hidden="true">#</a> createBaseVNode</h3><ol><li>用来创建基础的 vnode 对象</li><li>根据传入的参数 创建一个 vnode 对象 可以完整的描述该节点的信息</li><li>如果参数 needFullChildrenNormalization 为 true 还会执行 normalizeChildren 去标准化子节点</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createBaseVNode</span><span class="token punctuation">(</span>
  type<span class="token operator">:</span> VNodeTypes <span class="token operator">|</span> ClassComponent <span class="token operator">|</span> <span class="token keyword">typeof</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">(</span>Data <span class="token operator">&amp;</span> VNodeProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  patchFlag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  dynamicProps<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  shapeFlag <span class="token operator">=</span> type <span class="token operator">===</span> Fragment <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span><span class="token punctuation">,</span>
  isBlockNode <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  needFullChildrenNormalization <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
    __v_isVNode<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    __v_skip<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    key<span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeKey</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    ref<span class="token operator">:</span> props <span class="token operator">&amp;&amp;</span> <span class="token function">normalizeRef</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">,</span>
    scopeId<span class="token operator">:</span> currentScopeId<span class="token punctuation">,</span>
    slotScopeIds<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    component<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    suspense<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    ssContent<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    ssFallback<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    dirs<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    transition<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    el<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    anchor<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    target<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    targetAnchor<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    staticCount<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    shapeFlag<span class="token punctuation">,</span>
    patchFlag<span class="token punctuation">,</span>
    dynamicProps<span class="token punctuation">,</span>
    dynamicChildren<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    appContext<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> VNode

  <span class="token keyword">if</span> <span class="token punctuation">(</span>needFullChildrenNormalization<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>vnode<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token comment">// normalize suspense children</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> <span class="token keyword">typeof</span> SuspenseImpl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// compiled element vnode - if children is passed, only possible types are</span>
    <span class="token comment">// string or Array.</span>
    vnode<span class="token punctuation">.</span>shapeFlag <span class="token operator">|=</span> <span class="token function">isString</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>
      <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TEXT_CHILDREN</span>
      <span class="token operator">:</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// validate key</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> vnode<span class="token punctuation">.</span>key <span class="token operator">!==</span> vnode<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">VNode created with invalid key (NaN). VNode type:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> vnode<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// track vnode for block tree</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    isBlockTreeEnabled <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// avoid a block node from tracking itself</span>
    <span class="token operator">!</span>isBlockNode <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// has current parent block</span>
    currentBlock <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// presence of a patch flag indicates this node needs patching on updates.</span>
    <span class="token comment">// component nodes also should always be patched, because even if the</span>
    <span class="token comment">// component doesn&#39;t need to update, it needs to persist the instance on to</span>
    <span class="token comment">// the next vnode so that it can be properly unmounted later.</span>
    <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>patchFlag <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// the EVENTS flag is only for hydration and if it is the only flag, the</span>
    <span class="token comment">// vnode should not be considered dynamic due to handler caching.</span>
    vnode<span class="token punctuation">.</span>patchFlag <span class="token operator">!==</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">HYDRATE_EVENTS</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    currentBlock<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">convertLegacyVModelProps</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
    <span class="token function">defineLegacyVNodeProperties</span><span class="token punctuation">(</span>vnode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> vnode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createvnode" tabindex="-1"><a class="header-anchor" href="#createvnode" aria-hidden="true">#</a> createVNode</h3><ol><li>相比于 createBaseVNode createVNode 有很多额外的判断</li><li>判断 type 是否为空 是否 vnode 是否 class 类型</li><li>还会对 style class 执行标准化</li><li>最后执行 createBaseVNode 创建 vnode 对象 由于 needFullChildrenNormalization 是 true 创建完 vnode 对象还会执行 normalizeChildren标准化子节点</li><li>组件的 template 不能直接使用 必须编译生成 render 函数</li><li>render 函数内部会执行 createBaseVNode 创建普通元素的 vnode 执行 createVNode 创建组件的 vnode</li><li>vnode 之间是有父子关系的 createBaseVNode createVNode 第三个参数表示子节点的 vnode</li><li>通过父子关系的建立 组件内部的 vnode 实际就构成了一颗 vnode 树 和模版中的 DOM 一一映射</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">_createVNode</span><span class="token punctuation">(</span>
  type<span class="token operator">:</span> VNodeTypes <span class="token operator">|</span> ClassComponent <span class="token operator">|</span> <span class="token keyword">typeof</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">(</span>Data <span class="token operator">&amp;</span> VNodeProps<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  patchFlag<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  dynamicProps<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  isBlockNode <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>type <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token constant">NULL_DYNAMIC_COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Invalid vnode type when creating vnode: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    type <span class="token operator">=</span> Comment
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isVNode</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// createVNode receiving an existing vnode. This happens in cases like</span>
    <span class="token comment">// &lt;component :is=&quot;vnode&quot;/&gt;</span>
    <span class="token comment">// #2078 make sure to merge refs during the clone instead of overwriting it</span>
    <span class="token keyword">const</span> cloned <span class="token operator">=</span> <span class="token function">cloneVNode</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* mergeRef: true */</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">normalizeChildren</span><span class="token punctuation">(</span>cloned<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isBlockTreeEnabled <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isBlockNode <span class="token operator">&amp;&amp;</span> currentBlock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cloned<span class="token punctuation">.</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">COMPONENT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        currentBlock<span class="token punctuation">[</span>currentBlock<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> cloned
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        currentBlock<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cloned<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    cloned<span class="token punctuation">.</span>patchFlag <span class="token operator">|=</span> PatchFlags<span class="token punctuation">.</span><span class="token constant">BAIL</span>
    <span class="token keyword">return</span> cloned
  <span class="token punctuation">}</span>

  <span class="token comment">// class component normalization.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isClassComponent</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> type<span class="token punctuation">.</span>__vccOpts
  <span class="token punctuation">}</span>

  <span class="token comment">// 2.x async/functional component compat</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token function">convertLegacyComponent</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> currentRenderingInstance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// class &amp; style normalization.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// for reactive or proxy objects, we need to clone it to enable mutation.</span>
    props <span class="token operator">=</span> <span class="token function">guardReactiveProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token operator">!</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> klass<span class="token punctuation">,</span> style <span class="token punctuation">}</span> <span class="token operator">=</span> props
    <span class="token keyword">if</span> <span class="token punctuation">(</span>klass <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isString</span><span class="token punctuation">(</span>klass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      props<span class="token punctuation">.</span>class <span class="token operator">=</span> <span class="token function">normalizeClass</span><span class="token punctuation">(</span>klass<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// reactive state objects need to be cloned since they are likely to be</span>
      <span class="token comment">// mutated</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isArray</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        style <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> style<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      props<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token function">normalizeStyle</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// encode the vnode type information into a bitmap</span>
  <span class="token keyword">const</span> shapeFlag <span class="token operator">=</span> <span class="token function">isString</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ELEMENT</span>
    <span class="token operator">:</span> __FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> <span class="token function">isSuspense</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">SUSPENSE</span>
    <span class="token operator">:</span> <span class="token function">isTeleport</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">TELEPORT</span>
    <span class="token operator">:</span> <span class="token function">isObject</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span>
    <span class="token operator">:</span> <span class="token function">isFunction</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token operator">?</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">FUNCTIONAL_COMPONENT</span>
    <span class="token operator">:</span> <span class="token number">0</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">STATEFUL_COMPONENT</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isProxy</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    type <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span>
    <span class="token function">warn</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Vue received a Component which was made a reactive object. This can </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">lead to unnecessary performance overhead, and should be avoided by </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">marking the component with \\\`markRaw\\\` or using \\\`shallowRef\\\` </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">instead of \\\`ref\\\`.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\nComponent that was made reactive: </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      type
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">createBaseVNode</span><span class="token punctuation">(</span>
    type<span class="token punctuation">,</span>
    props<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    patchFlag<span class="token punctuation">,</span>
    dynamicProps<span class="token punctuation">,</span>
    shapeFlag<span class="token punctuation">,</span>
    isBlockNode<span class="token punctuation">,</span>
    <span class="token boolean">true</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件的挂载" tabindex="-1"><a class="header-anchor" href="#组件的挂载" aria-hidden="true">#</a> 组件的挂载</h2><h3 id="mountcomponent" tabindex="-1"><a class="header-anchor" href="#mountcomponent" aria-hidden="true">#</a> mountComponent</h3><p>主要用来创建组件的实例 设置组件的实例 设置并运行带有副作用的渲染函数</p><h4 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h4><ol><li>initialVNode 表示组件的 vnode</li><li>container 组件挂载的父节点</li><li>anchor 表示挂载的参考锚点</li><li>parentComponent 父组件的示例</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">const</span> mountComponent<span class="token operator">:</span> <span class="token function-variable function">MountComponentFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    initialVNode<span class="token punctuation">,</span>
    container<span class="token punctuation">,</span>
    anchor<span class="token punctuation">,</span>
    parentComponent<span class="token punctuation">,</span>
    parentSuspense<span class="token punctuation">,</span>
    isSVG<span class="token punctuation">,</span>
    optimized
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2.x compat may pre-create the component instance before actually</span>
    <span class="token comment">// mounting</span>
    <span class="token keyword">const</span> compatMountInstance <span class="token operator">=</span>
      __COMPAT__ <span class="token operator">&amp;&amp;</span> initialVNode<span class="token punctuation">.</span>isCompatRoot <span class="token operator">&amp;&amp;</span> initialVNode<span class="token punctuation">.</span>component
    <span class="token keyword">const</span> instance<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">=</span>
      compatMountInstance <span class="token operator">||</span>
      <span class="token punctuation">(</span>initialVNode<span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>
        initialVNode<span class="token punctuation">,</span>
        parentComponent<span class="token punctuation">,</span>
        parentSuspense
      <span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>type<span class="token punctuation">.</span>__hmrId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">registerHMR</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">pushWarningContext</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">)</span>
      <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mount</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// inject renderer internals for keepAlive</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isKeepAlive</span><span class="token punctuation">(</span>initialVNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">;</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>ctx <span class="token keyword">as</span> KeepAliveContext<span class="token punctuation">)</span><span class="token punctuation">.</span>renderer <span class="token operator">=</span> internals
    <span class="token punctuation">}</span>

    <span class="token comment">// resolve props and slots for setup context</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> compatMountInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">init</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">setupComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">init</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// setup() is async. This component relies on async logic to be resolved</span>
    <span class="token comment">// before proceeding</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__ <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>asyncDep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      parentSuspense <span class="token operator">&amp;&amp;</span> parentSuspense<span class="token punctuation">.</span><span class="token function">registerDep</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> setupRenderEffect<span class="token punctuation">)</span>

      <span class="token comment">// Give it a placeholder if this is not hydration</span>
      <span class="token comment">// TODO handle self-defined fallback</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>initialVNode<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> placeholder <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>subTree <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>Comment<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token function">processCommentNode</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> placeholder<span class="token punctuation">,</span> container<span class="token operator">!</span><span class="token punctuation">,</span> anchor<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token function">setupRenderEffect</span><span class="token punctuation">(</span>
      instance<span class="token punctuation">,</span>
      initialVNode<span class="token punctuation">,</span>
      container<span class="token punctuation">,</span>
      anchor<span class="token punctuation">,</span>
      parentSuspense<span class="token punctuation">,</span>
      isSVG<span class="token punctuation">,</span>
      optimized
    <span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">popWarningContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">mount</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用程序初始化" tabindex="-1"><a class="header-anchor" href="#应用程序初始化" aria-hidden="true">#</a> 应用程序初始化</h3><p>初始化一个应用程序 需要通过 createApp createApp 返回的 app 对象已经拥有的 mount 函数 但是会在入口函数中进行重写</p><h4 id="为什么要重写" tabindex="-1"><a class="header-anchor" href="#为什么要重写" aria-hidden="true">#</a> 为什么要重写？</h4><ol><li>因为 vue 不仅仅是为了 web 服务 是为了支持 跨平台渲染 createApp的mount 函数是一个标准的可跨平台的组件渲染流程</li><li>先创建 vnode 再渲染 vnode</li><li>重写的 createApp mount 函数都是与 web 平台相关的</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><img src="`+p+'" alt="图片"></p><ul><li>组件化是 vue 的核心思想之一 允许用模版加对象描述的方式创建组件 再给组件注入不同的数据 就可以渲染组件了</li><li>vnode 本质上是用来描述 DOM 的 Javascript 对象 在 vue 中 可以描述不同类型的节点 <ul><li>引入 vnode 可以把渲染过程抽象化 从而使得 组件的抽象能力得到提升</li><li>也让跨平台能力实现变得更加容易</li></ul></li><li>编写的组件会经过编译生成 render 函数 在组件的渲染过程中 会执行 render 函数生成 vnode 节点 在 patch 阶段 把vnode 变成真实的 DOM 挂载在页面</li><li>在 patch 过程中 如果遇到组件的 vnode 节点 会递归执行组件的渲染 无论组件嵌套的多深 都可以完成整个组件树的渲染</li><li>应用程序的入口 是 createApp 函数 可以通过他渲染 根组件 进而完成整个应用的渲染 并最终将其挂载到某个 DOM 容器中 渲染流程</li></ul>',24),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
