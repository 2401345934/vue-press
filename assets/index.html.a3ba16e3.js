import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p="/vue-press/assets/component-init.61d6a118.png",e="/vue-press/assets/instance.5876ea9b.png",o={},c=t(`<h1 id="组件的实例" tabindex="-1"><a class="header-anchor" href="#组件的实例" aria-hidden="true">#</a> 组件的实例</h1><h2 id="mountcomponent" tabindex="-1"><a class="header-anchor" href="#mountcomponent" aria-hidden="true">#</a> mountComponent</h2><ul><li>渲染 vnode 和 生成 DOM 流程主要是通过 mountComponent 函数来完成的</li><li>mountComponent 主要就是</li><li>创建组件实例</li><li>设置组件实例</li><li>设置并运行带有副作用的渲染函数</li></ul><h2 id="创建组件实例" tabindex="-1"><a class="header-anchor" href="#创建组件实例" aria-hidden="true">#</a> 创建组件实例</h2><h3 id="为什么要创建组件实例" tabindex="-1"><a class="header-anchor" href="#为什么要创建组件实例" aria-hidden="true">#</a> 为什么要创建组件实例？</h3><ul><li>整个渲染过程中 要维护组件的上下文数据</li><li>组件渲染需要的 props 数据 data 数据 组件 vnode 节点 render 函数一系列声明周期函数 等等</li><li>我们要把这些数据和函数都挂载到一个对象上</li><li>后续就可以通过对象访问 对象就是组件的实例</li><li>vue 是通过 createComponentInstance 创建的组件实例</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createComponentInstance</span><span class="token punctuation">(</span>
  vnode<span class="token operator">:</span> VNode<span class="token punctuation">,</span>
  parent<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  suspense<span class="token operator">:</span> SuspenseBoundary <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> type <span class="token operator">=</span> vnode<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ConcreteComponent
  <span class="token comment">// inherit parent app context - or - if root, adopt from root vnode</span>
  <span class="token keyword">const</span> appContext <span class="token operator">=</span>
    <span class="token punctuation">(</span>parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>appContext <span class="token operator">:</span> vnode<span class="token punctuation">.</span>appContext<span class="token punctuation">)</span> <span class="token operator">||</span> emptyAppContext

  <span class="token keyword">const</span> instance<span class="token operator">:</span> ComponentInternalInstance <span class="token operator">=</span> <span class="token punctuation">{</span>
    uid<span class="token operator">:</span> uid<span class="token operator">++</span><span class="token punctuation">,</span>
    vnode<span class="token punctuation">,</span>
    type<span class="token punctuation">,</span>
    parent<span class="token punctuation">,</span>
    appContext<span class="token punctuation">,</span>
    root<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be immediately set</span>
    next<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    subTree<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// will be set synchronously right after creation</span>
    effect<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span>
    update<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// will be set synchronously right after creation</span>
    scope<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">EffectScope</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token comment">/* detached */</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    render<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    proxy<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    exposed<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    exposeProxy<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    withProxy<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    provides<span class="token operator">:</span> parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>provides <span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>appContext<span class="token punctuation">.</span>provides<span class="token punctuation">)</span><span class="token punctuation">,</span>
    accessCache<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span>
    renderCache<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// local resolved assets</span>
    components<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    directives<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// resolved props and emits options</span>
    propsOptions<span class="token operator">:</span> <span class="token function">normalizePropsOptions</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> appContext<span class="token punctuation">)</span><span class="token punctuation">,</span>
    emitsOptions<span class="token operator">:</span> <span class="token function">normalizeEmitsOptions</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> appContext<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// emit</span>
    emit<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be set immediately</span>
    emitted<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// props default value</span>
    propsDefaults<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>

    <span class="token comment">// inheritAttrs</span>
    inheritAttrs<span class="token operator">:</span> type<span class="token punctuation">.</span>inheritAttrs<span class="token punctuation">,</span>

    <span class="token comment">// state</span>
    ctx<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    attrs<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    slots<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    refs<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    setupState<span class="token operator">:</span> <span class="token constant">EMPTY_OBJ</span><span class="token punctuation">,</span>
    setupContext<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

    <span class="token comment">// suspense related</span>
    suspense<span class="token punctuation">,</span>
    suspenseId<span class="token operator">:</span> suspense <span class="token operator">?</span> suspense<span class="token punctuation">.</span>pendingId <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    asyncDep<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    asyncResolved<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// lifecycle hooks</span>
    <span class="token comment">// not using enums here because it results in computed properties</span>
    isMounted<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isUnmounted<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isDeactivated<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    bc<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    c<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    bm<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    m<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    bu<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    u<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    um<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    bum<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    da<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    a<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    rtg<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    rtc<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    ec<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    sp<span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token function">createDevRenderContext</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>ctx <span class="token operator">=</span> <span class="token punctuation">{</span> _<span class="token operator">:</span> instance <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  instance<span class="token punctuation">.</span>root <span class="token operator">=</span> parent <span class="token operator">?</span> parent<span class="token punctuation">.</span>root <span class="token operator">:</span> instance
  instance<span class="token punctuation">.</span>emit <span class="token operator">=</span> <span class="token function">emit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> instance<span class="token punctuation">)</span>

  <span class="token comment">// apply custom element special handling</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>ce<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vnode<span class="token punctuation">.</span><span class="token function">ce</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置组件实例" tabindex="-1"><a class="header-anchor" href="#设置组件实例" aria-hidden="true">#</a> 设置组件实例</h2><ul><li>通过 setupComponent 方法实现</li><li>从组件的 vnode 获取 props children shapeFlag 等属性</li><li>然后分别对 props 和插槽 进行了初始化</li><li>如果要设置的是一个有状态组件 会通过 setupStatefulComponent 函数 则要进一步设置有状态组件的实例</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setupComponent</span><span class="token punctuation">(</span>
  instance<span class="token operator">:</span> ComponentInternalInstance<span class="token punctuation">,</span>
  isSSR <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  isInSSRComponentSetup <span class="token operator">=</span> isSSR

  <span class="token keyword">const</span> <span class="token punctuation">{</span> props<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> instance<span class="token punctuation">.</span>vnode
  <span class="token keyword">const</span> isStateful <span class="token operator">=</span> <span class="token function">isStatefulComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token function">initProps</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> props<span class="token punctuation">,</span> isStateful<span class="token punctuation">,</span> isSSR<span class="token punctuation">)</span>
  <span class="token function">initSlots</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> children<span class="token punctuation">)</span>

  <span class="token keyword">const</span> setupResult <span class="token operator">=</span> isStateful
    <span class="token operator">?</span> <span class="token function">setupStatefulComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> isSSR<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token keyword">undefined</span>
  isInSSRComponentSetup <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">return</span> setupResult
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有状态组件是什么" tabindex="-1"><a class="header-anchor" href="#有状态组件是什么" aria-hidden="true">#</a> 有状态组件是什么</h3><p>组件会在渲染过程中把一些状态挂载到组件实例对应的属性上</p><h3 id="setupstatefulcomponent" tabindex="-1"><a class="header-anchor" href="#setupstatefulcomponent" aria-hidden="true">#</a> setupStatefulComponent</h3><p>主要做 创建渲染上下文代理 判断处理 setup 函数 完成组件实例的设置</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">setupStatefulComponent</span><span class="token punctuation">(</span>
  instance<span class="token operator">:</span> ComponentInternalInstance<span class="token punctuation">,</span>
  isSSR<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> Component <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ComponentOptions

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">validateComponentName</span><span class="token punctuation">(</span>Component<span class="token punctuation">.</span>name<span class="token punctuation">,</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>components<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>Component<span class="token punctuation">.</span>components<span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> names<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">validateComponentName</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>directives<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>Component<span class="token punctuation">.</span>directives<span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> names<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">validateDirectiveName</span><span class="token punctuation">(</span>names<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>compilerOptions <span class="token operator">&amp;&amp;</span> <span class="token function">isRuntimeOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;compilerOptions&quot; is only supported when using a build of Vue that </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">includes the runtime compiler. Since you are using a runtime-only </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">build, the options should be passed via your build tool config instead.</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 0. create render proxy property access cache</span>
  instance<span class="token punctuation">.</span>accessCache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token comment">// 1. create public instance / render proxy</span>
  <span class="token comment">// also mark it raw so it&#39;s never observed</span>
  instance<span class="token punctuation">.</span>proxy <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>ctx<span class="token punctuation">,</span> PublicInstanceProxyHandlers<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">exposePropsOnRenderContext</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 2. call setup()</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token operator">=</span> Component
  <span class="token keyword">if</span> <span class="token punctuation">(</span>setup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> setupContext <span class="token operator">=</span> <span class="token punctuation">(</span>instance<span class="token punctuation">.</span>setupContext <span class="token operator">=</span>
      setup<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token function">createSetupContext</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token function">pauseTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> setupResult <span class="token operator">=</span> <span class="token function">callWithErrorHandling</span><span class="token punctuation">(</span>
      setup<span class="token punctuation">,</span>
      instance<span class="token punctuation">,</span>
      ErrorCodes<span class="token punctuation">.</span><span class="token constant">SETUP_FUNCTION</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span>__DEV__ <span class="token operator">?</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>props<span class="token punctuation">)</span> <span class="token operator">:</span> instance<span class="token punctuation">.</span>props<span class="token punctuation">,</span> setupContext<span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
    <span class="token function">resetTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">unsetCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPromise</span><span class="token punctuation">(</span>setupResult<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      setupResult<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>unsetCurrentInstance<span class="token punctuation">,</span> unsetCurrentInstance<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isSSR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// return the promise so server-renderer can wait on it</span>
        <span class="token keyword">return</span> setupResult
          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolvedResult<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">handleSetupResult</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> resolvedResult<span class="token punctuation">,</span> isSSR<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> ErrorCodes<span class="token punctuation">.</span><span class="token constant">SETUP_FUNCTION</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_SUSPENSE__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// async setup returned Promise.</span>
        <span class="token comment">// bail here and wait for re-entry.</span>
        instance<span class="token punctuation">.</span>asyncDep <span class="token operator">=</span> setupResult
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>instance<span class="token punctuation">.</span>suspense<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> name <span class="token operator">=</span> Component<span class="token punctuation">.</span>name <span class="token operator">??</span> <span class="token string">&#39;Anonymous&#39;</span>
          <span class="token function">warn</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Component &lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&gt;: setup function returned a promise, but no </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;Suspense&gt; boundary was found in the parent component tree. </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">A component with async setup() must be nested in a &lt;Suspense&gt; </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
              <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">in order to be rendered.</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">setup() returned a Promise, but the version of Vue you are using </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">does not support it yet.</span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">handleSetupResult</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> setupResult<span class="token punctuation">,</span> isSSR<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">finishComponentSetup</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> isSSR<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建渲染函数上下文代理" tabindex="-1"><a class="header-anchor" href="#创建渲染函数上下文代理" aria-hidden="true">#</a> 创建渲染函数上下文代理</h3><ul><li>主要对 instance.ctx 做代理</li><li>做代理为了后续 render 函数内部之间访问上下文 instance.ctx 属性</li></ul><h3 id="上下文代理的优化" tabindex="-1"><a class="header-anchor" href="#上下文代理的优化" aria-hidden="true">#</a> 上下文代理的优化</h3><ul><li>在解析 SFC 的时候做了一些额外处理</li><li>来分析组件中返回的绑定数据</li><li>然后模版编译器就可以捕获这些信息</li><li>自动转换适当的绑定 之间访问</li></ul><h3 id="处理-setup-函数" tabindex="-1"><a class="header-anchor" href="#处理-setup-函数" aria-hidden="true">#</a> 处理 setup 函数</h3><ul><li>setupStatefulComponent 中对 setup 函数 主要做了</li><li>创建 setup 函数上下文</li><li>执行 setup 函数并获取结果</li><li>处理 setup 函数的执行结果</li></ul><h2 id="完成组件实例的设置" tabindex="-1"><a class="header-anchor" href="#完成组件实例的设置" aria-hidden="true">#</a> 完成组件实例的设置</h2><ul><li>finishComponentSetup 函数 主要</li><li>标准化模版或者渲染函数</li><li>兼容 options api 兼容 options api</li><li>主要是通过 applyOptions 方法实现</li><li>主要是通过 options api 定义的属性和数据 都添加到组件的实例 instance 相关的属性上</li><li>data 会添加到 instance.data computed watch provide/inject methods 添加到 instance.ctx</li><li>对 mixin 和extends 会递归执行 applyOpions 方法完成定义的对象和属性 数据进行合并</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">finishComponentSetup</span><span class="token punctuation">(</span>
  instance<span class="token operator">:</span> ComponentInternalInstance<span class="token punctuation">,</span>
  isSSR<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  skipOptions<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> Component <span class="token operator">=</span> instance<span class="token punctuation">.</span><span class="token keyword">type</span> <span class="token class-name"><span class="token keyword">as</span></span> ComponentOptions

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">convertLegacyRenderFn</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> Component<span class="token punctuation">.</span>compatConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">validateCompatConfig</span><span class="token punctuation">(</span>Component<span class="token punctuation">.</span>compatConfig<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// template / render function normalization</span>
  <span class="token comment">// could be already set when returned from setup()</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation</span>
    <span class="token comment">// is done by server-renderer</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSSR <span class="token operator">&amp;&amp;</span> compile <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>Component<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> template <span class="token operator">=</span>
        <span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span>
          instance<span class="token punctuation">.</span>vnode<span class="token punctuation">.</span>props <span class="token operator">&amp;&amp;</span>
          instance<span class="token punctuation">.</span>vnode<span class="token punctuation">.</span>props<span class="token punctuation">[</span><span class="token string">&#39;inline-template&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        Component<span class="token punctuation">.</span>template <span class="token operator">||</span>
        <span class="token function">resolveMergedOptions</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">.</span>template
      <span class="token keyword">if</span> <span class="token punctuation">(</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">startMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">compile</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> isCustomElement<span class="token punctuation">,</span> compilerOptions <span class="token punctuation">}</span> <span class="token operator">=</span> instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config
        <span class="token keyword">const</span> <span class="token punctuation">{</span> delimiters<span class="token punctuation">,</span> compilerOptions<span class="token operator">:</span> componentCompilerOptions <span class="token punctuation">}</span> <span class="token operator">=</span>
          Component
        <span class="token keyword">const</span> finalCompilerOptions<span class="token operator">:</span> CompilerOptions <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span>
          <span class="token function">extend</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
              isCustomElement<span class="token punctuation">,</span>
              delimiters
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            compilerOptions
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          componentCompilerOptions
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// pass runtime compat config into the compiler</span>
          finalCompilerOptions<span class="token punctuation">.</span>compatConfig <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>globalCompatConfig<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>compatConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// @ts-expect-error types are not compatible</span>
            <span class="token function">extend</span><span class="token punctuation">(</span>finalCompilerOptions<span class="token punctuation">.</span>compatConfig<span class="token punctuation">,</span> Component<span class="token punctuation">.</span>compatConfig<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        Component<span class="token punctuation">.</span>render <span class="token operator">=</span> <span class="token function">compile</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> finalCompilerOptions<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">endMeasure</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">compile</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    instance<span class="token punctuation">.</span>render <span class="token operator">=</span> <span class="token punctuation">(</span>Component<span class="token punctuation">.</span>render <span class="token operator">||</span> <span class="token constant">NOOP</span><span class="token punctuation">)</span> <span class="token keyword">as</span> InternalRenderFunction

    <span class="token comment">// for runtime-compiled render functions using \`with\` blocks, the render</span>
    <span class="token comment">// proxy used needs a different \`has\` handler which is more performant and</span>
    <span class="token comment">// also only allows a whitelist of globals to fallthrough.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>installWithProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">installWithProxy</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// support for 2.x options</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__FEATURE_OPTIONS_API__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> skipOptions<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCurrentInstance</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token function">pauseTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">applyOptions</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
    <span class="token function">resetTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">unsetCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// warn missing template/render</span>
  <span class="token comment">// the runtime compilation of template in SSR is done by server-render</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>Component<span class="token punctuation">.</span>render <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>render <span class="token operator">===</span> <span class="token constant">NOOP</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isSSR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*istanbul ignore if*/</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>compile <span class="token operator">&amp;&amp;</span> Component<span class="token punctuation">.</span>template<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Component provided template option but</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">runtime compilation is not supported in this build of Vue.</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
          <span class="token punctuation">(</span>__ESM_BUNDLER__
            <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Configure your bundler to alias &quot;vue&quot; to &quot;vue/dist/vue.esm-bundler.js&quot;.</span><span class="token template-punctuation string">\`</span></span>
            <span class="token operator">:</span> __ESM_BROWSER__
            <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Use &quot;vue.esm-browser.js&quot; instead.</span><span class="token template-punctuation string">\`</span></span>
            <span class="token operator">:</span> __GLOBAL__
            <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Use &quot;vue.global.js&quot; instead.</span><span class="token template-punctuation string">\`</span></span>
            <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token comment">/*should not happen*/</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Component is missing template or render function.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件的初始化流程" tabindex="-1"><a class="header-anchor" href="#组件的初始化流程" aria-hidden="true">#</a> 组件的初始化流程</h2><p><img src="`+p+'" alt="图片"></p><h2 id="runtime-only-vs-runtime-compiler" tabindex="-1"><a class="header-anchor" href="#runtime-only-vs-runtime-compiler" aria-hidden="true">#</a> runtime-only vs runtime + compiler</h2><h3 id="runtime-only" tabindex="-1"><a class="header-anchor" href="#runtime-only" aria-hidden="true">#</a> runtime-only</h3><ul><li>体积更小</li><li>运行时不用编译</li><li>耗时少 性能优秀</li></ul><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3><p>是否注册了 compile</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><img src="'+e+'" alt="图片"></p><ul><li>组件的初始化流程主要包含创建组件实例和设置组件实例</li><li>组件的实例用来维护组件的整个生命周期中的一些上下文数据</li><li>组件实例设置过程包括创建上下文代理 执行 setup 函数并处理返回结果 标准化渲染函数 以及兼容 Options Api</li><li>组件的初始化结果 丰富了组件的实例和渲染上下文 后续执行组件的渲染的时候 可以从实例和渲染上下文获取所需数据</li></ul>',34),i=[c];function l(u,r){return s(),a("div",null,i)}const d=n(o,[["render",l],["__file","index.html.vue"]]);export{d as default};
