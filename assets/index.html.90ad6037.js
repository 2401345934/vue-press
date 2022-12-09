import{_ as e,z as o,A as c,X as s,C as n,T as p,a6 as t,Q as i}from"./framework.fef63301.js";const l={},u=t(`<h1 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h1><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>微信小程序定义一个页面是通过微信提供的 <code>Page</code> 方法，然后传入一个配置对象进去。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 参与页面渲染的数据</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面渲染后 执行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们有个需求是在每个页面加载的时候上报一些自定义数据。</p><p>最直接的当然是去每个页面加就好了，但上报数据的逻辑是一致的，一个一个加有些傻了，这里就可以用到装饰器模式了。</p><h2 id="装饰器模式-1" tabindex="-1"><a class="header-anchor" href="#装饰器模式-1" aria-hidden="true">#</a> 装饰器模式</h2><p>看下维基百科的定义。</p>`,8),k=s("strong",null,"装饰器（修饰）模式",-1),r={href:"https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fw%2Findex.php%3Ftitle%3D%25E9%259D%25A2%25E5%2590%2591%25E5%25AF%25B9%25E8%25B1%25A1%25E7%25A8%258B%25E5%25BC%258F%26action%3Dedit%26redlink%3D1",title:"https://zh.wikipedia.org/w/index.php?title=%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BC%8F&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"},d={href:"https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E8%25BD%25AF%25E4%25BB%25B6%25E8%25AE%25BE%25E8%25AE%25A1%25E6%25A8%25A1%25E5%25BC%258F",title:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%25E5%25AD%2590%25E9%25A1%259E%25E5%2588%25A5",title:"https://zh.wikipedia.org/wiki/%E5%AD%90%E9%A1%9E%E5%88%A5",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>看一下 <code>UML</code> 类图和次序图。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/930ce7826edd48859bd6fb4fa19145d8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20220117093402007"></p><p>当访问 <code>Component1</code> 中的 <code>operation</code> 方法时，会先调用预先定义的两个装饰器 <code>Decorator1</code> 和 <code>Decorator2</code> 中的 <code>operation</code> 方法，执行一些额外操作，最后再执行原始的 <code>operation</code> 方法。</p><p>举一个简单的例子：</p><p>买奶茶的话可以额外加珍珠、椰果等，不同小料有不同的价格、也可以自由组合，此时就可以用到装饰器模式，对原始奶茶进行加料、算价。</p><p>原始的奶茶有一个接口和类。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">MilkTea</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回奶茶的价格</span>
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回奶茶的原料</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleMilkTea</span> <span class="token keyword">implements</span> <span class="token class-name">MilkTea</span> <span class="token punctuation">{</span>
    @Override
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;MilkTea&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下边引入装饰器，进行加料。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加一个装饰器的抽象类</span>
abstract <span class="token keyword">class</span> <span class="token class-name">MilkTeaDecorator</span> <span class="token keyword">implements</span> <span class="token class-name">MilkTea</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> final MilkTea decoratedMilkTea<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">MilkTeaDecorator</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>decoratedMilkTea <span class="token operator">=</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> decoratedMilkTea<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> decoratedMilkTea<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加珍珠</span>
<span class="token keyword">class</span> <span class="token class-name">WithPearl</span> <span class="token keyword">extends</span> <span class="token class-name">MilkTeaDecorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">WithPearl</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类构造函数</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token comment">// 调用父类方法</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 调用父类方法</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加珍珠&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 添加椰果</span>
<span class="token keyword">class</span> <span class="token class-name">WithCoconut</span> <span class="token keyword">extends</span> <span class="token class-name">MilkTeaDecorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">WithCoconut</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加椰果&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们测试一下，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;价格: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;; 加料: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        MilkTea c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 10.0; 加料: MilkTea</span>
        
        c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WithPearl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 12.0; 加料: MilkTea, 加珍珠</span>
        
        c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WithCoconut</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WithPearl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 13.0; 加料: MilkTea, 加珍珠, 加椰果</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未来如果需要新增一种小料，只需要新写一个装饰器类，并且可以和之前的小料随意搭配。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加冰淇淋</span>
<span class="token keyword">class</span> <span class="token class-name">WithCream</span> <span class="token keyword">extends</span> <span class="token class-name">MilkTeaDecorator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">WithCream</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> double <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    @Override
    <span class="token keyword">public</span> String <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加冰淇淋&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printInfo</span><span class="token punctuation">(</span><span class="token parameter">MilkTea c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;价格: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;; 加料: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WithCoconut</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WithCream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WithPearl</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 18.0; 加料: MilkTea, 加珍珠, 加冰淇淋, 加椰果</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们用 <code>js</code> 改写一下，达到同样的效果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">SimpleMilkTea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;MilkTea&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 加珍珠</span>
<span class="token keyword">const</span> <span class="token function-variable function">WithPearl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">milkTea</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加珍珠&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 加椰果</span>
<span class="token keyword">const</span> <span class="token function-variable function">WithCoconut</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">milkTea</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加椰果&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 加冰淇淋</span>
<span class="token keyword">const</span> <span class="token function-variable function">WithCream</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">milkTea</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> milkTea<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;, 加冰淇淋&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// test</span>
<span class="token keyword">const</span> <span class="token function-variable function">printInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
        <span class="token string">&quot;价格: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;; 加料: &quot;</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getIngredients</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token function">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 10; 加料: MilkTea</span>

c <span class="token operator">=</span> <span class="token function">WithPearl</span><span class="token punctuation">(</span><span class="token function">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 12; 加料: MilkTea, 加珍珠</span>

c <span class="token operator">=</span> <span class="token function">WithCoconut</span><span class="token punctuation">(</span><span class="token function">WithPearl</span><span class="token punctuation">(</span><span class="token function">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 13; 加料: MilkTea, 加珍珠, 加椰果</span>

c <span class="token operator">=</span> <span class="token function">WithCoconut</span><span class="token punctuation">(</span><span class="token function">WithCream</span><span class="token punctuation">(</span><span class="token function">WithPearl</span><span class="token punctuation">(</span><span class="token function">SimpleMilkTea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printInfo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 价格: 18; 加料: MilkTea, 加珍珠, 加冰淇淋, 加椰果</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有再定义类和接口，<code>js</code> 中用函数直接表示。</p><p>原始的 <code>SimpleMilkTea</code> 方法返回一个奶茶对象，然后又定义了三个装饰函数，传入一个奶茶对象，返回一个装饰后的对象。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>回到文章最开头的场景，我们需要为每个页面加载的时候上报一些自定义数据。其实我们只需要引入一个装饰函数，将传入的 <code>option</code> 进行装饰返回即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Base</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> onLoad <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> option<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>rest<span class="token punctuation">,</span>
    <span class="token comment">// 重写 onLoad 方法</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
      <span class="token comment">// 增加路由字段</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上报数据</span>

      <span class="token comment">// onLoad</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> onLoad <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">onLoad</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">reportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 做一些事情</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后回到原始页面增加 <code>Base</code> 的调用即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 参与页面渲染的数据</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面渲染后 执行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，利用装饰器模式我们也可以对其它生命周期统一插入我们需要做的事情，而不需要业务方自己再写一遍。</p><p>在大团队的话，每个业务方可能都需要在小程序生命周期做一些事情，此时只需要利用装饰器模式，编写一个装饰函数，然后在业务代码中调用即可。</p><p>最终的业务代码可能会装饰很多层，最终才传给小程序 <code>Page</code> 函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token function">Base</span><span class="token punctuation">(</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token function">Ce</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 参与页面渲染的数据</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 页面渲染后 执行</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="易混设计模式" tabindex="-1"><a class="header-anchor" href="#易混设计模式" aria-hidden="true">#</a> 易混设计模式</h2><p>如果之前看过 代理模式 但还是有很大的不同点：</p><p>代理模式中，我们是直接将原对象封装到代理对象之中，对于业务方并不关系原始对象，直接使用代理对象即可。</p><p>装饰器模式中，我们只提供了装饰函数，输入原始对象，输出增强对象。输出的增强对象，还可以接着传入到新的装饰器函数中继续增强。对于业务方，可以随意组合装饰函数，但得有一个最最开始的原始对象。</p><p>再具体点：</p><p>代理模式的话，对象之间的依赖关系已经写死了，原始对象 <code>A</code>，新增代理对象 <code>A1</code>， <code>A1</code> 的基础上再新增代理对象 <code>A2</code>。如果我们不想要 <code>A1</code> 新增的功能了，我们并不能直接使用 <code>A2</code> ，因为 <code>A2</code> 已经包含了 <code>A1</code> 的功能，我们只能在 <code>A</code> 的基础上再新写一个代理对象 <code>A3</code>。</p><p>而装饰器模式，我们只提供装饰函数 <code>A1</code>，装饰函数 <code>A2</code>，然后对原始对象进行装饰 <code>A2(A1(A))</code>。如果不想要 <code>A1</code> 新增的功能，只需要把 <code>A1</code> 这个装饰器去掉，调用 <code>A2(A)</code> 即可。</p><p>所以使用代理模式还是使用装饰器模式，取决于我们是要把所有功能包装后最终产出一个对象给业务方使用，还是提供许多功能，让业务方自由组合。</p>`,34);function b(g,f){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("blockquote",null,[s("p",null,[k,n("，是"),s("a",r,[n("面向对象程式"),p(a)]),n("领域中，一种动态地往一个类别中添加新的行为的"),s("a",d,[n("设计模式"),p(a)]),n("。就功能而言，修饰模式相比生成"),s("a",v,[n("子类别"),p(a)]),n("更为灵活，这样可以给某个对象而不是整个类别添加一些功能。")])]),m])}const y=e(l,[["render",b],["__file","index.html.vue"]]);export{y as default};
