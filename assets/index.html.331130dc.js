import{_ as p,z as o,A as i,X as n,C as s,T as t,a6 as a,Q as c}from"./framework.fef63301.js";const l={},u=a(`<h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h1><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddea1c732cfb425da5bedbb2dc1295fe~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="深入 Hooks.png"></p><h2 id="自定义hooks是什么" tabindex="-1"><a class="header-anchor" href="#自定义hooks是什么" aria-hidden="true">#</a> 自定义Hooks是什么？</h2><p><code>react-hooks</code>是<code>React16.8</code>以后新增的钩子API，目的是增加代码的可复用性、逻辑性，最主要的是解决了<strong>函数式组件无状态的问题</strong>，这样既保留了函数式的简单，又解决了没有数据管理状态的缺陷</p><p>那么什么是自定义hooks呢？</p><p><code>自定义hooks</code>是在<code>react-hooks</code>基础上的一个扩展，可以根据业务、需求去制定相应的<code>hooks</code>,将常用的逻辑进行封装，从而具备复用性</p><h2 id="如何设计一个自定义hooks" tabindex="-1"><a class="header-anchor" href="#如何设计一个自定义hooks" aria-hidden="true">#</a> 如何设计一个自定义Hooks</h2><p><code>hooks</code>本质上是一个<strong>函数</strong>，而这个函数主要就是<strong>逻辑复用</strong>，我们首先要知道一件事，<code>hooks</code>的驱动条件是什么？</p><p>其实就是<code>props</code>的修改，<code>useState</code>、<code>useReducer</code>的使用是无状态组件更新的条件，从而驱动自定义hooks</p><h2 id="通用模式" tabindex="-1"><a class="header-anchor" href="#通用模式" aria-hidden="true">#</a> 通用模式</h2><p>自定义hooks的名称是以<strong>use</strong>开头，我们设计为：</p><blockquote><p>const [ xxx, ...] = useXXX(参数一，参数二...)</p></blockquote><h2 id="简单的小例子-usepow" tabindex="-1"><a class="header-anchor" href="#简单的小例子-usepow" aria-hidden="true">#</a> 简单的小例子：usePow</h2><p>我们先写一个简单的小例子来了解下<code>自定义hooks</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// usePow.ts</span>
<span class="token keyword">const</span> <span class="token function-variable function">Index</span> <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

<span class="token comment">// index.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> usePow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Index<span class="token operator">:</span>React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>flag<span class="token punctuation">,</span> setFlag<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">usePow</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">数字：</span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setFlag</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token operator">!</span>v<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">切换</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
       </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">切换状态：</span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们简单的写了个 <code>usePow</code>，我们通过 <code>usePow</code> 给所传入的数字平方, 用切换状态的按钮表示函数内部的状态，我们来看看此时的效果：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d21cc3b15e24a8fba7a7cf3f2a89d14~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img2.gif"></p><p>我们发现了一个问题，为什么点击切换按钮也会触发<code>console.log(1)</code>呢？</p><p>这样明显增加了性能开销，我们的理想状态肯定不希望做无关的渲染，所以我们做自定义 <code>hooks</code>的时候一定要注意，需要<strong>减少性能开销</strong>,我们为组件加入 <code>useMemo</code>试试：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">Index</span> <span class="token operator">=</span> <span class="token punctuation">(</span>list<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
    <span class="token punctuation">}</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3e583fe589a4dacbb0a5a72b2e99cef~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img3.gif"></p><p>发现此时就已经解决了这个问题，所以要非常注意一点，一个好用的自定义<code>hooks</code>,一定要配合<code>useMemo</code>、<code>useCallback</code>等 Api 一起使用。</p><h2 id="玩转react-hooks" tabindex="-1"><a class="header-anchor" href="#玩转react-hooks" aria-hidden="true">#</a> 玩转React Hooks</h2><p>在上述中我们讲了用 <code>useMemo</code>来处理无关的渲染，接下来我们一起来看看<code>React Hooks</code>的这些钩子的妙用（这里建议先熟知、并使用对应的<code>React Hooks</code>,才能造出好的钩子）</p><h2 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h2><p>当一个父组件中调用了一个子组件的时候，父组件的 state 发生变化，会导致父组件更新，而子组件虽然没有发生改变，但也会进行更新。</p><p>简单的理解下，当一个页面内容非常复杂，模块非常多的时候，函数式组件会<strong>从头更新到尾</strong>，只要一处改变，所有的模块都会进行刷新，这种情况显然是没有必要的。</p><p>我们理想的状态是各个模块只进行自己的更新，不要相互去影响，那么此时用<code>useMemo</code>是最佳的解决方案。</p><p>这里要尤其注意一点，<strong>只要父组件的状态更新，无论有没有对自组件进行操作，子组件都会进行更新</strong>，<code>useMemo</code>就是为了防止这点而出现的</p><p>在讲 <code>useMemo</code> 之前，我们先说说<code>memo</code>,<code>memo</code>的作用是<strong>结合了pureComponent纯组件和 componentShouldUpdate功能</strong>，会对传入的props进行一次对比，然后根据第二个函数返回值来进一步判断哪些props需要更新。（具体使用会在下文讲到～）</p><p><code>useMemo</code>与<code>memo</code>的理念上差不多，都是判断是否满足当前的限定条件来决定是否执行<code>callback</code>函数，而<code>useMemo</code>的第二个参数是一个数组，通过这个数组来判定是否更新回掉函数</p><p>这种方式可以运用在<strong>元素、组件、上下文中</strong>，尤其是利用在数组上，先看一个例子：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>
                list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                        </span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                )}
            }
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    ),[list])

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面我们看出 <code>useMemo</code>只有在<code>list</code>发生变化的时候才会进行渲染，从而减少了不必要的开销</p><p>总结一下<code>useMemo</code>的好处：</p><ul><li>可以减少不必要的循环和不必要的渲染</li><li>可以减少子组件的渲染次数</li><li>通过特地的依赖进行更新，可以避免很多不必要的开销，但要注意，有时候在配合 <code>useState</code>拿不到最新的值，这种情况可以考虑使用 <code>useRef</code>解决</li></ul><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h2><p><code>useCallback</code>与<code>useMemo</code>极其类似,可以说是一模一样，唯一不同的是<code>useMemo</code>返回的是函数运行的<strong>结果</strong>，而<code>useCallback</code>返回的是<strong>函数</strong></p><p>注意：这个函数是父组件传递子组件的一个函数，防止做无关的刷新，其次，这个组件必须配合<code>memo</code>,否则<strong>不但不会提升性能，还有可能降低性能</strong></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>      <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> MockMemo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span>setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>show<span class="token punctuation">,</span>setShow<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>

        <span class="token keyword">const</span>  add <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>display<span class="token operator">:</span> <span class="token string">&#39;flex&#39;</span><span class="token punctuation">,</span> justifyContent<span class="token operator">:</span> <span class="token string">&#39;flex-start&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TestButton</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>普通点击<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TestButton</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>useCallback点击<span class="token punctuation">&quot;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginTop<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">count: </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setShow</span><span class="token punctuation">(</span><span class="token operator">!</span>show<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> 切换</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> TestButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title <span class="token operator">===</span> <span class="token string">&#39;useCallback点击&#39;</span> <span class="token operator">?</span> <span class="token punctuation">{</span>
        marginLeft<span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">export</span> <span class="token keyword">default</span> MockMemo<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c00efe7071b40c583a3d167d073a979~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img2.gif"></p><p>我们可以看到，当点击切换按钮的时候，没有经过 <code>useCallback</code>封装的函数会再次刷新，而经过 <code>useCallback</code>包裹的函数不会被再次刷新</p><h2 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h2><p><strong>useRef</strong> 可以获取当前元素的所有属性，并且返回一个可变的ref对象，并且这个对象<strong>只有current属性</strong>，可设置initialValue</p><h3 id="通过useref获取对应的属性值" tabindex="-1"><a class="header-anchor" href="#通过useref获取对应的属性值" aria-hidden="true">#</a> 通过useRef获取对应的属性值</h3><p>我们先看个案例：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Index<span class="token operator">:</span>React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> scrollRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>clientHeight<span class="token punctuation">,</span> setClientHeight <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>scrollTop<span class="token punctuation">,</span> setScrollTop <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>scrollHeight<span class="token punctuation">,</span> setScrollHeight <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>scrollRef<span class="token operator">?.</span>current<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> clientHeight <span class="token operator">=</span> scrollRef<span class="token operator">?.</span>current<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span> <span class="token comment">//可视区域高度</span>
      <span class="token keyword">let</span> scrollTop  <span class="token operator">=</span> scrollRef<span class="token operator">?.</span>current<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>  <span class="token comment">//滚动条滚动高度</span>
      <span class="token keyword">let</span> scrollHeight <span class="token operator">=</span> scrollRef<span class="token operator">?.</span>current<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span> <span class="token comment">//滚动内容高度</span>
      <span class="token function">setClientHeight</span><span class="token punctuation">(</span>clientHeight<span class="token punctuation">)</span>
      <span class="token function">setScrollTop</span><span class="token punctuation">(</span>scrollTop<span class="token punctuation">)</span>
      <span class="token function">setScrollHeight</span><span class="token punctuation">(</span>scrollHeight<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">可视区域高度：</span><span class="token punctuation">{</span>clientHeight<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">滚动条滚动高度：</span><span class="token punctuation">{</span>scrollTop<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">滚动内容高度：</span><span class="token punctuation">{</span>scrollHeight<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> overflowY<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>scrollRef<span class="token punctuation">}</span></span> <span class="token attr-name">onScroll</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onScroll<span class="token punctuation">}</span></span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>height<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述可知，我们可以通过<code>useRef</code>来获取对应元素的相关属性，以此来做一些操作</p><p>效果： <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce0221becc3940ec8610783afa66f5dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img1.gif"></p><h3 id="缓存数据" tabindex="-1"><a class="header-anchor" href="#缓存数据" aria-hidden="true">#</a> 缓存数据</h3><p>除了获取对应的属性值外，<code>useRef</code>还有一点比较重要的特性，那就是 <strong>缓存数据</strong></p><p>上述讲到我们封装一个合格的<code>自定义hooks</code>的时候需要结合<strong>useMemo</strong>、<strong>useCallback</strong>等Api，但我们控制变量的值用<strong>useState</strong> 有可能会导致拿到的是旧值，并且如果他们更新会带来整个组件重新执行，这种情况下，我们使用<strong>useRef</strong>将会是一个非常不错的选择</p><p>在<code>react-redux</code>的源码中，在hooks推出后，<code>react-redux</code>用大量的<strong>useMemo</strong>重做了<strong>Provide</strong>等核心模块，其中就是运用<strong>useRef</strong>来缓存数据，并且所运用的 <strong>useRef()</strong> 没有一个是绑定在dom元素上的，都是做数据缓存用的</p><p>可以简单的来看一下：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token comment">// 缓存数据</span>
    <span class="token comment">/* react-redux 用userRef 来缓存 merge之后的 props */</span> 
    <span class="token keyword">const</span> lastChildProps <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    
    <span class="token comment">// lastWrapperProps 用 useRef 来存放组件真正的 props信息 </span>
    <span class="token keyword">const</span> lastWrapperProps <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>wrapperProps<span class="token punctuation">)</span> 
    
    <span class="token comment">//是否储存props是否处于正在更新状态 </span>
    <span class="token keyword">const</span> renderIsScheduled <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

    <span class="token comment">//更新数据</span>
    <span class="token keyword">function</span> <span class="token function">captureWrapperProps</span><span class="token punctuation">(</span> 
        lastWrapperProps<span class="token punctuation">,</span> 
        lastChildProps<span class="token punctuation">,</span> 
        renderIsScheduled<span class="token punctuation">,</span> 
        wrapperProps<span class="token punctuation">,</span> 
        actualChildProps<span class="token punctuation">,</span> 
        childPropsFromStoreUpdate<span class="token punctuation">,</span> 
        notifyNestedSubs 
    <span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        lastWrapperProps<span class="token punctuation">.</span>current <span class="token operator">=</span> wrapperProps 
        lastChildProps<span class="token punctuation">.</span>current <span class="token operator">=</span> actualChildProps 
        renderIsScheduled<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token boolean">false</span> 
   <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到 <code>react-redux</code> 用重新赋值的方法，改变了缓存的数据源，减少了不必要的更新，如过采取<code>useState</code>势必会重新渲染</p><h3 id="uselatest" tabindex="-1"><a class="header-anchor" href="#uselatest" aria-hidden="true">#</a> useLatest</h3><p>经过上面的讲解我们知道<code>useRef</code> 可以拿到最新值，我们可以进行简单的封装，这样做的好处是：<strong>可以随时确保获取的是最新值，并且也可以解决闭包问题</strong></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>   <span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

   <span class="token keyword">const</span> useLatest <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(value: T) =&gt; </span><span class="token punctuation">{</span>
     <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
     ref<span class="token punctuation">.</span>current <span class="token operator">=</span> value

     <span class="token keyword">return</span> ref
   <span class="token punctuation">}</span><span class="token plain-text">;

   export default useLatest;

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合usememo和useref封装usecreation" tabindex="-1"><a class="header-anchor" href="#结合usememo和useref封装usecreation" aria-hidden="true">#</a> 结合useMemo和useRef封装useCreation</h3>`,60),r=n("strong",null,"useCreation",-1),d=n("code",null,"useMemo",-1),k=n("code",null,"useRef",-1),v=n("code",null,"useCreation",-1),m=n("code",null,"useMemo",-1),b=n("code",null,"useRef",-1),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fahooks.js.org%2Fzh-CN%2Fhooks%2Fuse-creation",title:"https://ahooks.js.org/zh-CN/hooks/use-creation",target:"_blank",rel:"noopener noreferrer"},f=a(`<ul><li><code>useMemo</code>的值不一定是最新的值，但<code>useCreation</code>可以保证拿到的值一定是最新的值</li><li>对于复杂常量的创建，<code>useRef</code>容易出现潜在的的性能隐患，但<code>useCreation</code>可以避免</li></ul><p>这里的性能隐患是指：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>   <span class="token comment">// 每次重渲染，都会执行实例化 Subject 的过程，即便这个实例立刻就被扔掉了</span>
   <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
   <span class="token comment">// 通过 factory 函数，可以避免性能隐患</span>
   <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们来看看如何封装一个<code>useCreation</code>,首先我们要明白以下三点：</p><ul><li>第一点：先确定参数，<code>useCreation</code> 的参数与<code>useMemo</code>的一致，第一个参数是函数，第二个参数参数是可变的数组</li><li>第二点：我们的值要保存在 <code>useRef</code>中，这样可以将值缓存，从而减少无关的刷新</li><li>第三点：更新值的判断，怎么通过第二个参数来判断是否更新 <code>useRef</code>里的值。</li></ul><p>明白了一上三点我们就可以自己实现一个<code>useCreation</code></p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DependencyList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> depsAreSame <span class="token operator">=</span> <span class="token punctuation">(</span>oldDeps<span class="token operator">:</span> DependencyList<span class="token punctuation">,</span> deps<span class="token operator">:</span> DependencyList<span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>oldDeps <span class="token operator">===</span> deps<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
  
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> oldDeps<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断两个值是否是同一个值</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Object<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span>oldDeps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> useCreation <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">T</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">(fn:() =&gt; T, deps: DependencyList)=&gt; </span><span class="token punctuation">{</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    deps<span class="token punctuation">,</span>
    obj<span class="token operator">:</span>  <span class="token keyword">undefined</span> <span class="token keyword">as</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token constant">T</span> <span class="token punctuation">,</span>
    initialized<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>initialized <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">depsAreSame</span><span class="token punctuation">(</span>current<span class="token punctuation">.</span>deps<span class="token punctuation">,</span> deps<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    current<span class="token punctuation">.</span>deps <span class="token operator">=</span> deps<span class="token punctuation">;</span>
    current<span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    current<span class="token punctuation">.</span>initialized <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> current<span class="token punctuation">.</span>obj <span class="token keyword">as</span> <span class="token constant">T</span>
<span class="token punctuation">}</span><span class="token plain-text"> 

export default useCreation;

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>useRef</code>判断是否更新值通过<code>initialized</code> 和 <code>depsAreSame</code>来判断，其中<code>depsAreSame</code>通过存储在 <code>useRef</code>下的<code>deps</code>(旧值) 和 新传入的 <code>deps</code>（新值）来做对比，判断两数组的数据是否一致，来确定是否更新</p><h3 id="验证-usecreation" tabindex="-1"><a class="header-anchor" href="#验证-usecreation" aria-hidden="true">#</a> 验证 useCreation</h3><p>接下来我们写个小例子，来验证下 <code>useCreation</code>是否能满足我们的要求：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useCreation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> Index<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> setFlag<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">getNowData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">const</span> nowData <span class="token operator">=</span> <span class="token function">useCreation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getNowData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>padding<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">正常的函数： </span><span class="token punctuation">{</span><span class="token function">getNowData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">useCreation包裹后的： </span><span class="token punctuation">{</span>nowData<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setFlag</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token operator">!</span>v<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> 渲染</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa5645ef84d141878142032ae2079bdc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="useCreation.gif"></p><p>我们可以看到，当我们做无关的<code>state</code>改变的时候，正常的函数也会刷新，但<code>useCreation</code>没有刷新，从而增强了渲染的性能～</p><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h2><p><code>useEffect</code>相信各位小伙伴已经用的熟的不能再熟了，我们可以使用<code>useEffect</code>来模拟下<code>class</code>的<code>componentDidMount</code>和<code>componentWillUnmount</code>的功能。</p><h3 id="usemount" tabindex="-1"><a class="header-anchor" href="#usemount" aria-hidden="true">#</a> useMount</h3><p>这个钩子不必多说，只是简化了使用<code>useEffect</code>的第二个参数：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">useMount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        fn<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> useMount<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useunmount" tabindex="-1"><a class="header-anchor" href="#useunmount" aria-hidden="true">#</a> useUnmount</h3><p>这个需要注意一个点，就是使用<code>useRef</code>来确保所传入的函数为最新的状态，所以可以结合上述讲的<strong>useLatest</strong>结合使用</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">useUnmount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useRef</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
      ref<span class="token punctuation">.</span>current <span class="token operator">=</span> fn<span class="token punctuation">;</span>

      <span class="token function">useEffect</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          fn<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> useUnmount<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结合usemount和useunmount做个小例子" tabindex="-1"><a class="header-anchor" href="#结合usemount和useunmount做个小例子" aria-hidden="true">#</a> 结合<code>useMount</code>和<code>useUnmount</code>做个小例子</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Toast <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useMount<span class="token punctuation">,</span> useUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">Child</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

      <span class="token function">useMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;首次渲染&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">useUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;组件已卸载&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">你好，我是小杜杜</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> Index<span class="token operator">:</span>React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span>flag<span class="token punctuation">,</span> setFlag<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>padding<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">setFlag</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token operator">!</span>v<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">切换 </span><span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token string">&#39;unmount&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;mount&#39;</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span>flag <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Child</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27b1cfa623a944eb9056b62eeafaba5f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img5.gif"></p><h3 id="useupdate" tabindex="-1"><a class="header-anchor" href="#useupdate" aria-hidden="true">#</a> useUpdate</h3><p><strong>useUpdate</strong>:强制更新</p><p>有的时候我们需要组件强制更新，这个时候就可以使用这个钩子：</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code>    <span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">useUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> useUpdate<span class="token punctuation">;</span>
    
    <span class="token comment">//示例：</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;antd-mobile&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> useUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span><span class="token punctuation">;</span>


    <span class="token keyword">const</span> Index<span class="token operator">:</span>React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token function">useUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>padding<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">时间：</span><span class="token punctuation">{</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>primary<span class="token punctuation">&#39;</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>update<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">更新时间</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbe4ebe0e17f439693b48eac899e3f67~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img6.gif"></p><h1 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h1><h2 id="案例1-usereactive" tabindex="-1"><a class="header-anchor" href="#案例1-usereactive" aria-hidden="true">#</a> 案例1: useReactive</h2><p><strong>useReactive</strong>: 一种具备<strong>响应式</strong>的<code>useState</code></p><p>缘由：我们知道用<code>useState</code>可以定义变量其格式为：</p><p><code>const [count, setCount] = useState&lt;number&gt;(0)</code></p><p>通过<code>setCount</code>来设置，<code>count</code>来获取，使用这种方式才能够渲染视图</p><p>来看看正常的操作，像这样 <code>let count = 0; count =7</code> 此时<code>count</code>的值就是7，也就是说数据是响应式的</p><p>那么我们可不可以将 <code>useState</code>也写成<strong>响应式</strong>的呢？我可以自由设置<strong>count的值,并且可以随时获取到count的最新值</strong>，而不是通过<code>setCount</code>来设置。</p><p>我们来想想怎么去实现一个具备 <strong>响应式</strong> 特点的 <code>useState</code> 也就是 <code>useRective</code>,提出以下疑问，感兴趣的，可以先自行思考一下：</p><ul><li>这个钩子的出入参该怎么设定？</li><li>如何将数据制作成响应式（毕竟普通的操作无法刷新视图）？</li><li>如何使用<code>TS</code>去写，完善其类型？</li><li>如何更好的去优化？</li></ul><h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h3><p>以上四个小问题，最关键的就是<code>第二个</code>，我们如何将数据弄成<strong>响应式</strong>，想要弄成响应式，就必须监听到值的变化，在做出更改，也就是说，我们对这个数进行操作的时候，要进行相应的<strong>拦截</strong>，这时就需要<code>ES6</code>的一个知识点：<strong>Proxy</strong></p>`,42),h=n("strong",null,"Proxy",-1),y=n("strong",null,"Reflect",-1),x={href:"https://juejin.cn/post/7068935394191998990#heading-36",title:"https://juejin.cn/post/7068935394191998990#heading-36",target:"_blank",rel:"noopener noreferrer"},w=a(`<p><strong>Proxy</strong>：接受的参数是<strong>对象</strong>，所以第一个问题也解决了，入参就为对象。那么如何去刷新视图呢？这里就使用上述的<strong>useUpdate</strong>来强制刷新，使数据更改。</p><p>至于优化这一块，使用上文说的<code>useCreation</code>就好，再配合<code>useRef</code>来放<code>initialState</code>即可</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { useRef } from &#39;react&#39;;
import { useUpdate, useCreation } from &#39;../index&#39;;

const observer = &lt;T extends Record&lt;string, any&gt;&gt;(initialVal: T, cb: () =&gt; void): T =&gt; {

 const proxy = new Proxy&lt;T&gt;(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === &#39;object&#39; ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
  });

  return proxy;
}

const useReactive = &lt;T extends Record&lt;string, any&gt;&gt;(initialState: T):T =&gt; {
  const ref = useRef&lt;T&gt;(initialState);
  const update = useUpdate();

  const state = useCreation(() =&gt; {
    return observer(ref.current, () =&gt; {
      update();
    });
  }, []);

  return state
};

export default useReactive;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里先说下<code>TS</code>，因为我们不知道会传递什么类型的<code>initialState</code>所以在这需要使用<strong>泛型</strong>，我们接受的参数是<strong>对象</strong>，可就是 key-value 的形式，其中 key 为 string，value 可以是 任意类型，所以我们使用 <code>Record&lt;string, any&gt;</code></p>`,5),R={href:"https://juejin.cn/post/7088304364078497800#heading-82",title:"https://juejin.cn/post/7088304364078497800#heading-82",target:"_blank",rel:"noopener noreferrer"},C=a(`<p>再来说下<code>拦截这块</code>,我们只需要拦截<strong>设置（set）</strong> 和 <strong>获取（get）</strong> 即可，其中：</p><ul><li>设置这块，需要改变是图，也就是说需要，使用<strong>useUpdate</strong>来强制刷新</li><li>获取这块，需要判断其是否为对象，是的话继续递归，不是的话返回就行</li></ul><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>接下来我们来验证一下我们写的 <code>useReactive</code>,我们将以 字符串、数字、布尔、数组、函数、计算属性几个方面去验证一下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { Button } from &#39;antd-mobile&#39;;
    import React from &#39;react&#39;;
    import { useReactive } from &#39;@/components&#39;

    const Index:React.FC&lt;any&gt; = (props)=&gt; {

      const state = useReactive&lt;any&gt;({
        count: 0,
        name: &#39;小杜杜&#39;,
        flag: true,
        arr: [],
        bugs: [&#39;小杜杜&#39;, &#39;react&#39;, &#39;hook&#39;],
        addBug(bug:string) {
          this.bugs.push(bug);
        },
        get bugsCount() {
          return this.bugs.length;
        },
      })

      return (
        &lt;div style={{padding: 20}}&gt;
          &lt;div style={{fontWeight: &#39;bold&#39;}}&gt;基本使用：&lt;/div&gt;
           &lt;div style={{marginTop: 8}}&gt; 对数字进行操作：{state.count}&lt;/div&gt;
           &lt;div style={{margin: &#39;8px 0&#39;, display: &#39;flex&#39;,justifyContent: &#39;flex-start&#39;}}&gt;
             &lt;Button color=&#39;primary&#39; onClick={() =&gt; state.count++ } &gt;加1&lt;/Button&gt;
             &lt;Button color=&#39;primary&#39; style={{marginLeft: 8}} onClick={() =&gt; state.count-- } &gt;减1&lt;/Button&gt;
             &lt;Button color=&#39;primary&#39; style={{marginLeft: 8}} onClick={() =&gt; state.count = 7 } &gt;设置为7&lt;/Button&gt;
           &lt;/div&gt;
           &lt;div style={{marginTop: 8}}&gt; 对字符串进行操作：{state.name}&lt;/div&gt;
           &lt;div style={{margin: &#39;8px 0&#39;, display: &#39;flex&#39;,justifyContent: &#39;flex-start&#39;}}&gt;
             &lt;Button color=&#39;primary&#39; onClick={() =&gt; state.name = &#39;小杜杜&#39; } &gt;设置为小杜杜&lt;/Button&gt;
             &lt;Button color=&#39;primary&#39; style={{marginLeft: 8}} onClick={() =&gt; state.name = &#39;Domesy&#39;} &gt;设置为Domesy&lt;/Button&gt;
           &lt;/div&gt;
           &lt;div style={{marginTop: 8}}&gt; 对布尔值进行操作：{JSON.stringify(state.flag)}&lt;/div&gt;
           &lt;div style={{margin: &#39;8px 0&#39;, display: &#39;flex&#39;,justifyContent: &#39;flex-start&#39;}}&gt;
             &lt;Button color=&#39;primary&#39; onClick={() =&gt; state.flag = !state.flag } &gt;切换状态&lt;/Button&gt;
           &lt;/div&gt;
           &lt;div style={{marginTop: 8}}&gt; 对数组进行操作：{JSON.stringify(state.arr)}&lt;/div&gt;
           &lt;div style={{margin: &#39;8px 0&#39;, display: &#39;flex&#39;,justifyContent: &#39;flex-start&#39;}}&gt;
             &lt;Button color=&quot;primary&quot; onClick={() =&gt; state.arr.push(Math.floor(Math.random() * 100))} &gt;push&lt;/Button&gt;
             &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.arr.pop()} &gt;pop&lt;/Button&gt;
             &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.arr.shift()} &gt;shift&lt;/Button&gt;
             &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.arr.unshift(Math.floor(Math.random() * 100))} &gt;unshift&lt;/Button&gt;
             &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.arr.reverse()} &gt;reverse&lt;/Button&gt;
             &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.arr.sort()} &gt;sort&lt;/Button&gt;
           &lt;/div&gt;
           &lt;div style={{fontWeight: &#39;bold&#39;, marginTop: 8}}&gt;计算属性：&lt;/div&gt;
           &lt;div style={{marginTop: 8}}&gt;数量：{ state.bugsCount } 个&lt;/div&gt;
           &lt;div style={{margin: &#39;8px 0&#39;}}&gt;
             &lt;form
               onSubmit={(e) =&gt; {
                 state.bug ? state.addBug(state.bug) : state.addBug(&#39;domesy&#39;)
                 state.bug = &#39;&#39;;
                 e.preventDefault();
               }}
             &gt;
               &lt;input type=&quot;text&quot; value={state.bug} onChange={(e) =&gt; (state.bug = e.target.value)} /&gt;
               &lt;button type=&quot;submit&quot;  style={{marginLeft: 8}} &gt;增加&lt;/button&gt;
               &lt;Button color=&quot;primary&quot; style={{marginLeft: 8}} onClick={() =&gt; state.bugs.pop()}&gt;删除&lt;/Button&gt;
             &lt;/form&gt;

           &lt;/div&gt;
           &lt;ul&gt;
             {
               state.bugs.map((bug:any, index:number) =&gt; (
                 &lt;li key={index}&gt;{bug}&lt;/li&gt;
               ))
             }
           &lt;/ul&gt;
        &lt;/div&gt;
      );
    }

    export default Index;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9571ffdbb94c478bbb34e8b37d9c454f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="useuse.gif"></p><h2 id="案例2-useeventlistener" tabindex="-1"><a class="header-anchor" href="#案例2-useeventlistener" aria-hidden="true">#</a> 案例2: useEventListener</h2><p>缘由：我们监听各种事件的时候需要做监听，如：监听点击事件、键盘事件、滚动事件等，我们将其统一封装起来，方便后续调用</p><p>说白了就是在<code>addEventListener</code>的基础上进行封装，我们先来想想在此基础上需要什么？</p><p>首先，<code>useEventListener</code>的入参可分为三个</p><ul><li>第一个<code>event</code>是事件（如：click、keydown）</li><li>第二个回调函数（所以不需要出参）</li><li>第三个就是目标（是某个节点还是全局）</li></ul><p>在这里需要注意一点就是在<strong>销毁的时候需要移除对应的监听事件</strong></p><h3 id="代码-1" tabindex="-1"><a class="header-anchor" href="#代码-1" aria-hidden="true">#</a> 代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useEffect } from &#39;react&#39;;

    const useEventListener = (event: string, handler: (...e:any) =&gt; void, target: any = window) =&gt; {

      useEffect(() =&gt; {
        const targetElement  = &#39;current&#39; in target ? target.current : window;
        const useEventListener = (event: Event) =&gt; {
          return handler(event)
        }
        targetElement.addEventListener(event, useEventListener)
        return () =&gt; {
          targetElement.removeEventListener(event, useEventListener)
        }
      }, [event])
    };

    export default useEventListener;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：这里把<code>target</code>默认设置成了<code>window</code>，至于为什么要这么写：<code>&#39;current&#39; in target</code>是因为我们用<code>useRef</code>拿到的值都是 <code>ref.current</code></p><h3 id="支持ssr-优化" tabindex="-1"><a class="header-anchor" href="#支持ssr-优化" aria-hidden="true">#</a> 支持SSR（优化）</h3><p>在原本的ahooks代码中，会用到<code>useEffectWithTarget</code>，一开搞错了，以为这个是类似于<code>useCreation</code>的优化作用，其实不是，这么做的目的是为了支持<code>SSR</code></p><p>因为<code>SSR</code>的类型是 <code>() =&gt; HTMLElement</code>， 如果将这个作为<code>useEffect</code>的参数，那么就相当于<code>deps</code>不存在，也就是有其他变量改变时，<code>useEffect</code>都会执行，所以为了全面支持<code>target</code>动态变化，才会有这个<code>useEffectWithTarget</code>的诞生～</p><h3 id="详细代码" tabindex="-1"><a class="header-anchor" href="#详细代码" aria-hidden="true">#</a> 详细代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useEffect } from &#39;react&#39;;
    import type { DependencyList } from &#39;react&#39;;
    import { useRef } from &#39;react&#39;;
    import useLatest from &#39;../useLatest&#39;;
    import useUnmount from &#39;../useUnmount&#39;;

    const depsAreSame = (oldDeps: DependencyList, deps: DependencyList):boolean =&gt; {
      for(let i = 0; i &lt; oldDeps.length; i++) {
        if(!Object.is(oldDeps[i], deps[i])) return false
      }
      return true
    }

    const useEffectTarget = (effect: () =&gt; void, deps:DependencyList, target: any) =&gt; {

      const hasInitRef = useRef(false); // 一开始设置初始化
      const elementRef = useRef&lt;(Element | null)[]&gt;([]);// 存储具体的值
      const depsRef = useRef&lt;DependencyList&gt;([]); // 存储传递的deps
      const unmountRef = useRef&lt;any&gt;(); // 存储对应的effect

      // 初始化 组件的初始化和更新都会执行
      useEffect(() =&gt; {
        const targetElement  = &#39;current&#39; in target ? target.current : window;

        // 第一遍赋值
        if(!hasInitRef.current){
          hasInitRef.current = true;

          elementRef.current = targetElement;
          depsRef.current = deps;
          unmountRef.current = effect();
          return
        }
        // 校验变值: 目标的值不同， 依赖值改变
        if(elementRef.current !== targetElement || !depsAreSame(deps, depsRef.current)){
          //先执行对应的函数
          unmountRef.current?.();
          //重新进行赋值
          elementRef.current = targetElement;
          depsRef.current = deps; 
          unmountRef.current = effect();
        }
      })

      useUnmount(() =&gt; {
        unmountRef.current?.();
        hasInitRef.current = false;
      })
    }

    const useEventListener = (event: string, handler: (...e:any) =&gt; void, target: any = window) =&gt; {
      const handlerRef = useLatest(handler);

      useEffectTarget(() =&gt; {
        const targetElement  = &#39;current&#39; in target ? target.current : window;

        //  防止没有 addEventListener 这个属性
        if(!targetElement?.addEventListener) return;

        const useEventListener = (event: Event) =&gt; {
          return handlerRef.current(event)
        }
        targetElement.addEventListener(event, useEventListener)
        return () =&gt; {
          targetElement.removeEventListener(event, useEventListener)
        }
      }, [event], target)
    };

    export default useEventListener;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在这里只用<code>useEffect</code>是因为，在更新和初始化的情况下都需要使用</li><li>必须要防止没有 <code>addEventListener</code>这个属性的情况，监听的目标有可能没有加载出来</li></ul><h3 id="验证-1" tabindex="-1"><a class="header-anchor" href="#验证-1" aria-hidden="true">#</a> 验证</h3><p>验证一下<code>useEventListener</code>是否能够正常的使用，顺变验证一下初始化、卸载的，代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import React, { useState, useRef } from &#39;react&#39;;
    import { useEventListener } from &#39;@/components&#39;
    import { Button } from &#39;antd-mobile&#39;;

    const Index:React.FC&lt;any&gt; = (props)=&gt; {

      const [count, setCount] = useState&lt;number&gt;(0)
      const [flag, setFlag] = useState&lt;boolean&gt;(true)
      const [key, setKey] = useState&lt;string&gt;(&#39;&#39;)
      const ref = useRef(null);

      useEventListener(&#39;click&#39;, () =&gt; setCount(v =&gt; v +1), ref)
      useEventListener(&#39;keydown&#39;, (ev) =&gt; setKey(ev.key));

      return (
        &lt;div style={{padding: 20}}&gt;
          &lt;Button color=&#39;primary&#39; onClick={() =&gt; {setFlag(v =&gt; !v)}}&gt;切换 {flag ? &#39;unmount&#39; : &#39;mount&#39;}&lt;/Button&gt;
          {
            flag &amp;&amp; &lt;div&gt;
              &lt;div&gt;数字：{count}&lt;/div&gt;
              &lt;button ref={ref} &gt;加1&lt;/button&gt;
              &lt;div&gt;监听键盘事件：{key}&lt;/div&gt;
            &lt;/div&gt;
          }

        &lt;/div&gt;
      );
    }

    export default Index;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9dbb36ddad2d41f9917b8db7355d283a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="useEvent.gif"></p><p>我们可以利用<code>useEventListener</code>这个钩子去封装其他钩子，如 鼠标悬停，长按事件，鼠标位置等，在这里在举一个鼠标悬停的小例子</p><h3 id="小例子-usehover" tabindex="-1"><a class="header-anchor" href="#小例子-usehover" aria-hidden="true">#</a> 小例子 useHover</h3><p><strong>useHover</strong>：监听 DOM 元素是否有鼠标悬停</p><p>这个就很简单了，只需要通过 <code>useEventListener</code>来监听<code>mouseenter</code>和<code>mouseleave</code>即可，在返回布尔值就行了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useState } from &#39;react&#39;;
    import useEventListener  from &#39;../useEventListener&#39;;

    interface Options {
      onEnter?: () =&gt; void;
      onLeave?: () =&gt; void;
    }

    const useHover = (target:any, options?:Options): boolean =&gt; {

      const [flag, setFlag] = useState&lt;boolean&gt;(false)
      const { onEnter, onLeave } = options || {};

      useEventListener(&#39;mouseenter&#39;, () =&gt; {
        onEnter?.()
        setFlag(true)
      }, target)

      useEventListener(&#39;mouseleave&#39;, () =&gt; {
        onLeave?.()
        setFlag(false)
      }, target)

      return flag
    };

    export default useHover;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d77611b1d33647e689398e380f1fdb16~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="useHover.gif"></p><h2 id="案例3-有关时间的hooks" tabindex="-1"><a class="header-anchor" href="#案例3-有关时间的hooks" aria-hidden="true">#</a> 案例3: 有关时间的Hooks</h2><p>在这里主要介绍有关时间的三个hooks,分别是：<code>useTimeout</code>、<code>useInterval</code>和<code>useCountDown</code></p><h3 id="usetimeout" tabindex="-1"><a class="header-anchor" href="#usetimeout" aria-hidden="true">#</a> useTimeout</h3><p><strong>useTimeout</strong>：一段时间内，执行一次</p><p>传递参数只要函数和延迟时间即可，需要注意的是卸载的时候将定时器清除下就OK了</p><p>详细代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useEffect } from &#39;react&#39;;
    import useLatest from &#39;../useLatest&#39;;


    const useTimeout = (fn:() =&gt; void, delay?: number): void =&gt; {

      const fnRef = useLatest(fn)

      useEffect(() =&gt; {
        if(!delay || delay &lt; 0) return;

        const timer = setTimeout(() =&gt; {
          fnRef.current();
        }, delay)

        return () =&gt; {
          clearTimeout(timer)
        }
      }, [delay])

    };

    export default useTimeout;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38ea46cb005e4b7e92979bc56ffb76f9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img3.gif"></p><h3 id="useinterval" tabindex="-1"><a class="header-anchor" href="#useinterval" aria-hidden="true">#</a> useInterval</h3><p><strong>useInterval</strong>: 每过一段时间内一直执行</p><p>大体上与<code>useTimeout</code>一样，多了一个是否要首次渲染的参数<code>immediate</code></p><p>详细代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useEffect } from &#39;react&#39;;
    import useLatest from &#39;../useLatest&#39;;


    const useInterval = (fn:() =&gt; void, delay?: number, immediate?:boolean): void =&gt; {

      const fnRef = useLatest(fn)

      useEffect(() =&gt; {
        if(!delay || delay &lt; 0) return;
        if(immediate) fnRef.current();

        const timer = setInterval(() =&gt; {
          fnRef.current();
        }, delay)

        return () =&gt; {
          clearInterval(timer)
        }
      }, [delay])

    };

    export default useInterval;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果展示： <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47b323c0e8b04546a5a30f51b9eb3488~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img4.gif"></p><h3 id="usecountdown" tabindex="-1"><a class="header-anchor" href="#usecountdown" aria-hidden="true">#</a> useCountDown</h3><p><strong>useCountDown</strong>：简单控制倒计时的钩子</p><p>跟之前一样我们先来想想这个钩子需要什么：</p><ul><li>我们要做倒计时的钩子首先需要一个目标时间（targetDate），控制时间变化的秒数（interval默认为1s），然后就是倒计时完成后所触发的函数（onEnd）</li><li>返参就更加一目了然了，返回的是两个时间差的数值（time），再详细点可以换算成对应的天、时、分等（formattedRes）</li></ul><h4 id="详细代码-1" tabindex="-1"><a class="header-anchor" href="#详细代码-1" aria-hidden="true">#</a> 详细代码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import { useState, useEffect, useMemo } from &#39;react&#39;;
    import useLatest from &#39;../useLatest&#39;;
    import dayjs from &#39;dayjs&#39;;

    type DTime = Date | number | string | undefined;

    interface Options {
      targetDate?: DTime;
      interval?: number;
      onEnd?: () =&gt; void;
    }

    interface FormattedRes {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
      milliseconds: number;
    }

    const calcTime = (time: DTime) =&gt; {
      if(!time) return 0

      const res = dayjs(time).valueOf() - new Date().getTime(); //计算差值

      if(res &lt; 0) return 0

      return res
    }

    const parseMs = (milliseconds: number): FormattedRes =&gt; {
      return {
        days: Math.floor(milliseconds / 86400000),
        hours: Math.floor(milliseconds / 3600000) % 24,
        minutes: Math.floor(milliseconds / 60000) % 60,
        seconds: Math.floor(milliseconds / 1000) % 60,
        milliseconds: Math.floor(milliseconds) % 1000,
      };
    };

    const useCountDown = (options?: Options) =&gt; {

      const { targetDate, interval = 1000, onEnd } = options || {};

      const [time, setTime] = useState(() =&gt;  calcTime(targetDate));
      const onEndRef = useLatest(onEnd);

      useEffect(() =&gt; {

        if(!targetDate) return setTime(0)

        setTime(calcTime(targetDate))

        const timer = setInterval(() =&gt; {
          const target = calcTime(targetDate);

          setTime(target);
          if (target === 0) {
            clearInterval(timer);
            onEndRef.current?.();
          }
        }, interval);
        return () =&gt; clearInterval(timer);
      },[targetDate, interval])

      const formattedRes = useMemo(() =&gt; {
        return parseMs(time);
      }, [time]);

      return [time, formattedRes] as const
    };

    export default useCountDown;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证-2" tabindex="-1"><a class="header-anchor" href="#验证-2" aria-hidden="true">#</a> 验证</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    import React, { useState } from &#39;react&#39;;
    import { useCountDown } from &#39;@/components&#39;
    import { Button, Toast } from &#39;antd-mobile&#39;;

    const Index:React.FC&lt;any&gt; = (props)=&gt; {

      const [_, formattedRes] = useCountDown({
        targetDate: &#39;2022-12-31 24:00:00&#39;,
      });

      const { days, hours, minutes, seconds, milliseconds } = formattedRes;

      const [count, setCount] = useState&lt;number&gt;();

      const [countdown] = useCountDown({
        targetDate: count,
        onEnd: () =&gt; {
          Toast.show(&#39;结束&#39;)
        },
      });

      return (
        &lt;div style={{padding: 20}}&gt;
          &lt;div&gt; 距离 2022-12-31 24:00:00 还有 {days} 天 {hours} 时 {minutes} 分 {seconds} 秒 {milliseconds} 毫秒&lt;/div&gt;
          &lt;div&gt;
            &lt;p style={{marginTop: 12}}&gt;动态变化：&lt;/p&gt;
            &lt;Button color=&#39;primary&#39; disabled={countdown !== 0} onClick={() =&gt; setCount(Date.now() + 3000)}&gt;
              {countdown === 0 ? &#39;开始&#39; : \`还有 \${Math.round(countdown / 1000)}s\`}
            &lt;/Button&gt;
            &lt;Button style={{marginLeft: 8}} onClick={() =&gt; setCount(undefined)}&gt;停止&lt;/Button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      );
    }

    export default Index;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示" aria-hidden="true">#</a> 效果展示</h4><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f41eaef407564c86b27aac51c4539da2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="img5.gif"></p><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> End</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,61),E={href:"https://link.juejin.cn/?target=https%3A%2F%2Fahooks.js.org%2Fzh-CN%2Fhooks%2Fuse-request%2Findex",title:"https://ahooks.js.org/zh-CN/hooks/use-request/index",target:"_blank",rel:"noopener noreferrer"},S=a('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>简单的做下总结：</p><ul><li>一个优秀的hooks一定会具备<code>useMemo</code>、<code>useCallback</code>等api优化</li><li>制作自定义hooks遇到传递过来的值，优先考虑使用<code>useRef</code>，再考虑用<code>useState</code>，可以直接使用<code>useLatest</code>，防止拿到的值不是最新值</li><li>在封装的时候，应该将存放的值放入 <code>useRef</code>中，通过一个状态去设置他的初始化，在判断什么情况下来更新所对应的值，明确入参与出参的具体意义，如<code>useCreation</code>和<code>useEventListener</code></li></ul>',3);function j(L,T){const e=c("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[r,s(" ：是 "),d,s(" 或 "),k,s("的替代品。换言之，"),v,s("这个钩子增强了 "),m,s(" 和 "),b,s("，让这个钩子可以替换这两个钩子。（来自"),n("a",g,[s("ahooks-useCreation"),t(e)]),s("）")]),f,n("p",null,[s("在这里会用到 "),h,s("和"),y,s("的点，感兴趣的可以看看我的这篇文章："),n("a",x,[s("🔥花一个小时，迅速了解ES6~ES12的全部特性"),t(e)])]),w,n("p",null,[s("有不熟悉的小伙伴可以看看我的这篇文章： "),n("a",R,[s("一篇让你完全够用TS的指南"),t(e)]),s("（又推销一遍，有点打广告，别在意～）")]),C,n("ul",null,[n("li",null,[n("a",E,[s("ahooks"),t(e)])])]),S])}const M=p(l,[["render",j],["__file","index.html.vue"]]);export{M as default};
