import{_ as p,z as o,A as i,X as s,C as n,T as e,a6 as t,Q as c}from"./framework.fef63301.js";const l={},u=t(`<h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h1><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>当我们使用第三方库的时候，常常会遇到当前接口和第三方接口不匹配的情况，比如使用一个 <code>Table</code> 的组件，它要求我们返回的表格数据格式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 业务 code</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 出错时候的提示</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token punctuation">,</span> <span class="token comment">// 总数量</span>
     <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 表格列表</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但后端返回的数据可能是这样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 业务 code</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 出错时候的提示</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token punctuation">,</span> <span class="token comment">// 总数量</span>
     <span class="token literal-property property">records</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 表格列表</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就可以通过适配器模式进行转换。</p><h2 id="适配器模式-1" tabindex="-1"><a class="header-anchor" href="#适配器模式-1" aria-hidden="true">#</a> 适配器模式</h2>`,8),r={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},d={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSoftware_engineering",title:"https://en.wikipedia.org/wiki/Software_engineering",target:"_blank",rel:"noopener noreferrer"},k=s("strong",null,"adapter pattern",-1),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSoftware_design_pattern",title:"https://en.wikipedia.org/wiki/Software_design_pattern",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInterface_(computer_science)",title:"https://en.wikipedia.org/wiki/Interface_(computer_science)",target:"_blank",rel:"noopener noreferrer"},b={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClass_(computer_science)",title:"https://en.wikipedia.org/wiki/Class_(computer_science)",target:"_blank",rel:"noopener noreferrer"},g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAdapter_pattern%23cite_note-HeadFirst-1",title:"https://en.wikipedia.org/wiki/Adapter_pattern#cite_note-HeadFirst-1",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSource_code",title:"https://en.wikipedia.org/wiki/Source_code",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>通过适配器模式可以让当前 <code>class</code> 不改变的情况下正常使用另一个 <code>class</code>。</p><p>在以 <code>class</code> 为基础的语言中有两种实现方式，一种是通过组合的方式，适配器类内部包含原对象的实例。一种是通过类继承，适配器类继承原 <code>class</code> 。可以看下 <code>UML</code> 类图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b401fbb4fcb143d0b816e5430b06366c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20220213124112500"></p><p>左边的 <code>Adapter</code> 内部拥有 <code>Adaptee</code> 的实例，右边的 <code>Adapter</code> 类直接继承 <code>Adaptee</code> 类。</p><p>适配器会将 <code>Adaptee</code> 的 <code>specificOperation</code> 方法进行相应的处理包装为 <code>operation</code> 方法供 <code>client</code> 使用。</p><p>看一个简单的例子，现实生活中 <code>iPhone</code> 有两种耳机插口，一种是 <code>Lightning</code>，一种是传统的 <code>3.5</code> 毫米接口。如果是 <code>lightning</code> 插口的耳机想要插到传统的 <code>3.5</code> 毫米接口的电脑上就需要适配器了。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Lightning</span>耳机 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">插入Lighting接口</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;插入到Lighting耳机接口成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> 传统耳机 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;插入到传统耳机孔成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Lightning</span>耳机到传统耳机适配器 <span class="token keyword">extends</span> 传统耳机 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> Lightning耳机 Lightning耳机<span class="token punctuation">;</span>
 <span class="token keyword">public</span> <span class="token function">Lightning耳机到传统耳机适配器</span><span class="token punctuation">(</span><span class="token parameter">Lightning耳机 耳机</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Lightning耳机 <span class="token operator">=</span> 耳机<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  Lightning耳机<span class="token punctuation">.</span><span class="token function">插入Lighting接口</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> 电脑传统耳机孔 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> 传统耳机 耳机<span class="token punctuation">;</span>
 <span class="token keyword">public</span> <span class="token function">电脑传统耳机孔</span><span class="token punctuation">(</span><span class="token parameter">传统耳机 传统耳机</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  耳机 <span class="token operator">=</span> 传统耳机<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">插入耳机</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  耳机<span class="token punctuation">.</span><span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  传统耳机 传统耳机 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">传统耳机</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  电脑传统耳机孔  电脑传统耳机孔 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">电脑传统耳机孔</span><span class="token punctuation">(</span>传统耳机<span class="token punctuation">)</span><span class="token punctuation">;</span>
  电脑传统耳机孔<span class="token punctuation">.</span><span class="token function">插入耳机</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入到传统耳机孔成功</span>

  Lightning耳机 Lightning耳机 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lightning</span><span class="token function">耳机</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  电脑传统耳机孔  电脑传统耳机孔<span class="token number">2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">电脑传统耳机孔</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Lightning</span><span class="token function">耳机到传统耳机适配器</span><span class="token punctuation">(</span>Lightning耳机<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  电脑传统耳机孔<span class="token number">2.</span><span class="token function">插入耳机</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 插入到Lighting耳机接口成功</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过适配器我们成功将 <code>Lightning</code> 耳机插入到了电脑传统耳机孔，让我们再用 <code>js</code> 改写一下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Lightning耳机 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">插入Lighting接口</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;插入到Lighting耳机接口成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> 传统耳机 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;插入到传统耳机孔成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> 电脑传统耳机孔 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">插入耳机</span><span class="token punctuation">(</span><span class="token parameter">耳机</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        耳机<span class="token punctuation">.</span><span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Lightning耳机到传统耳机适配器</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Lightning耳机</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">插入到传统耳机孔</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            Lightning耳机<span class="token punctuation">.</span><span class="token function">插入Lighting接口</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

电脑传统耳机孔<span class="token punctuation">.</span><span class="token function">插入耳机</span><span class="token punctuation">(</span>传统耳机<span class="token punctuation">)</span> <span class="token comment">// 插入到传统耳机孔成功</span>
电脑传统耳机孔<span class="token punctuation">.</span><span class="token function">插入耳机</span><span class="token punctuation">(</span><span class="token function">Lightning耳机到传统耳机适配器</span><span class="token punctuation">(</span>Lightning耳机<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 插入到Lighting耳机接口成功</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>回到开头接口不匹配的问题上，<code>Table</code> 组件提供了一个 <code>responseProcessor</code> 的钩子，我们只需要通过这个钩子将接口返回的数据进行包装即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  ...
  responseProcessor(res) {
    return {
      ...res,
      msg: res.message, // 出错时候的提示
      data: {
         ...res.data
         list: res?.data?.records || [], // 表格列表
      }
    };
  },
  ...
  
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多场景" tabindex="-1"><a class="header-anchor" href="#更多场景" aria-hidden="true">#</a> 更多场景</h2><p>除了应对数据格式不一致的问题，通过适配器模式我们还可以为上层提供统一接口，来解决兼容性问题。最典型的例子就是 <code>jQuery</code> ，可以看一下其中一段代码:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Create the request object</span>
<span class="token comment">// (This is still attached to ajaxSettings for backward compatibility)</span>
jQuery<span class="token punctuation">.</span>ajaxSettings<span class="token punctuation">.</span>xhr <span class="token operator">=</span> window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span>

 <span class="token comment">// Support: IE6-IE8</span>
 <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// XHR cannot access local files, always use ActiveX for that case</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isLocal <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">createActiveXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Support: IE 9-11</span>
  <span class="token comment">// IE seems to error on cross-domain PATCH requests when ActiveX XHR</span>
  <span class="token comment">// is used. In IE 9+ always use the native XHR.</span>
  <span class="token comment">// Note: this condition won&#39;t catch Edge as it doesn&#39;t define</span>
  <span class="token comment">// document.documentMode but it also doesn&#39;t support ActiveX so it won&#39;t</span>
  <span class="token comment">// reach this code.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span> document<span class="token punctuation">.</span>documentMode <span class="token operator">&gt;</span> <span class="token number">8</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">createStandardXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Support: IE&lt;9</span>
  <span class="token comment">// oldIE XHR does not support non-RFC2616 methods (#13240)</span>
  <span class="token comment">// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx</span>
  <span class="token comment">// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9</span>
  <span class="token comment">// Although this check for six methods instead of eight</span>
  <span class="token comment">// since IE also does not support &quot;trace&quot; and &quot;connect&quot;</span>
  <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(get|post|head|put|delete|options)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
   <span class="token function">createStandardXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">createActiveXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token operator">:</span>

 <span class="token comment">// For all other browsers, use the standard XMLHttpRequest object</span>
 createStandardXHR<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="易混设计模式" tabindex="-1"><a class="header-anchor" href="#易混设计模式" aria-hidden="true">#</a> 易混设计模式</h2><p>适配器模式和代理模式在代码结构上很像，代理模式也是对原对象进行包装处理。区别在于它们的意图不同：</p><ul><li><p>适配器模式是为了解决两个对象之间不匹配的问题，而原对象又不适合直接修改，此时可以使用适配器模式进行一层转换。</p></li><li><p>代理模式是为了增强原对象的功能，提供的接口不会改变。</p></li></ul>`,18);function w(y,_){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,s("p",null,[n("看一下 "),s("a",r,[n("维基百科"),e(a)]),n(" 给的定义：")]),s("blockquote",null,[s("p",null,[n("In "),s("a",d,[n("software engineering"),e(a)]),n(", the "),k,n(" is a "),s("a",v,[n("software design pattern"),e(a)]),n(" that allows the "),s("a",m,[n("interface"),e(a)]),n(" of an existing "),s("a",b,[n("class"),e(a)]),n(" to be used as another interface.["),s("a",g,[n("1]"),e(a)]),n(" It is often used to make existing classes work with others without modifying their "),s("a",h,[n("source code"),e(a)]),n(".")])]),f])}const x=p(l,[["render",w],["__file","index.html.vue"]]);export{x as default};
