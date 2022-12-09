import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},p=e(`<h1 id="reactive-api" tabindex="-1"><a class="header-anchor" href="#reactive-api" aria-hidden="true">#</a> reactive API</h1><ul><li>reactive 函数拥有单个参数 target 必须是对象或者数据类型</li><li>内部通过了 createReactiveObject 函数执行 把 target 变成一个响应式对象</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> UnwrapNestedRefs<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token operator">:</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if trying to observe a readonly proxy, return the readonly version.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    <span class="token boolean">false</span><span class="token punctuation">,</span>
    mutableHandlers<span class="token punctuation">,</span>
    mutableCollectionHandlers<span class="token punctuation">,</span>
    reactiveMap
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="createreactiveobject" tabindex="-1"><a class="header-anchor" href="#createreactiveobject" aria-hidden="true">#</a> createReactiveObject</h2><ul><li>createReactiveObject 拥有 5个参数 <ul><li>target 表示待变成响应式对象的 对象或者数组</li><li>isReadonly 是否创建只读对象</li><li>baseHandles 表示普通对象和数组类型数据的响应式对象处理器</li><li>collectionHandles 表示集合类型数据的响应式处理器</li><li>proxyMap 表示原始对象和响应式对象的缓存映射图</li></ul></li><li>createReactiveObject 主要做 <ul><li>判断 target 是不是对象或者数组 不是直接返回</li><li>如果已经是响应式对象 再次执行 reactive 直接返回该响应式对象 ■ 内部通过 target.__v_raw 属性判断 target 是否已经是响应式对象</li><li>如果同一个原始数据多次执行 reactive 返回相同的响应式对象</li><li>对 原始对象的类型进一步进行限制 会通过 getTargetType 函数判断 比如 Date 类型 RegExp 类型 promise 类型 都是不可变成响应式对象 直接返回</li></ul></li><li>通过 proxy 劫持 target 对象 变成响应式 把 new Proxy 创建的 proxy 实例称做响应式对象 <ul><li>如果是集合类型数据 使用 collectionHandles</li><li>如果是非集合类型数据 使用 baseHandles</li></ul></li><li>把原始对象 target 作为 key 响应式对象 proxy 作为 value 存储到 map 类型的对象 proxyMap <ul><li>这就是为什么多次执行 reactive 函数返回同一个对象</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">function</span> <span class="token function">createReactiveObject</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> Target<span class="token punctuation">,</span>
  isReadonly<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
  baseHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  collectionHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  proxyMap<span class="token operator">:</span> WeakMap<span class="token operator">&lt;</span>Target<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">value cannot be made reactive: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target is already a Proxy, return it.</span>
  <span class="token comment">// exception: calling readonly() on a reactive object</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">RAW</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span>isReadonly <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>ReactiveFlags<span class="token punctuation">.</span><span class="token constant">IS_REACTIVE</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token comment">// target already has corresponding Proxy</span>
  <span class="token keyword">const</span> existingProxy <span class="token operator">=</span> proxyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>existingProxy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> existingProxy
  <span class="token punctuation">}</span>
  <span class="token comment">// only specific value types can be observed.</span>
  <span class="token keyword">const</span> targetType <span class="token operator">=</span> <span class="token function">getTargetType</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">INVALID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> target
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
    target<span class="token punctuation">,</span>
    targetType <span class="token operator">===</span> TargetType<span class="token punctuation">.</span><span class="token constant">COLLECTION</span> <span class="token operator">?</span> collectionHandlers <span class="token operator">:</span> baseHandlers
  <span class="token punctuation">)</span>
  proxyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span>
  <span class="token keyword">return</span> proxy
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutablehandlers" tabindex="-1"><a class="header-anchor" href="#mutablehandlers" aria-hidden="true">#</a> mutableHandlers</h2><ul><li>劫持了对 proxy 对象对一些操作</li><li>访问对象属性会触发 get 函数</li><li>设置对象属性会触发 set 函数</li><li>删除对象属性会触发 deleteProperty 函数</li><li>in 操作符会触发 has 函数</li><li>Object.getOwnPropertyNames 访问对象属性触发 ownKeys 函数</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> mutableHandlers<span class="token operator">:</span> ProxyHandler<span class="token operator">&lt;</span>object<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  get<span class="token punctuation">,</span>
  set<span class="token punctuation">,</span>
  deleteProperty<span class="token punctuation">,</span>
  has<span class="token punctuation">,</span>
  ownKeys
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
