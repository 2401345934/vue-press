import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const e={},p=t(`<h1 id="json-stringify-特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-特性" aria-hidden="true">#</a> JSON stringify 特性</h1><h2 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify" aria-hidden="true">#</a> JSON.stringify()</h2><h3 id="json-stringify-第一大特性总结" tabindex="-1"><a class="header-anchor" href="#json-stringify-第一大特性总结" aria-hidden="true">#</a> JSON.stringify() 第一大特性总结</h3><ul><li>undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化</li><li>undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null</li><li>undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined</li></ul><h3 id="json-stringify-第二大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第二大特性" aria-hidden="true">#</a> JSON.stringify() 第二大特性</h3><ul><li>非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token string">&quot;ddd&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：？</span>
<span class="token comment">// &quot;{&quot;a&quot;:&quot;aaa&quot;,&quot;d&quot;:&quot;ddd&quot;}&quot;</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;eee&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// 输出：？</span>

<span class="token comment">// &quot;[&quot;aaa&quot;,null,null,null,&quot;eee&quot;]&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第三大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第三大特性" aria-hidden="true">#</a> JSON.stringify() 第三大特性</h3><ul><li>转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值，并且忽略其他属性的值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">say</span><span class="token operator">:</span> <span class="token string">&quot;hello JSON.stringify&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">toJSON</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;today i learn&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;today i learn&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第四大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第四大特性" aria-hidden="true">#</a> JSON.stringify()第四大特性</h3><ul><li>JSON.stringify() 将会正常序列化 Date 的值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">now</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;{&quot;now&quot;:&quot;2019-12-08T07:42:11.973Z&quot;}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第五大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第五大特性" aria-hidden="true">#</a> JSON.stringify() 第五大特性</h3><p>NaN 和 Infinity 格式的数值及 null 都会被当做 null。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;null&quot;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;null&quot;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;null&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第六大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第六大特性" aria-hidden="true">#</a> JSON.stringify() 第六大特性</h3><p>关于基本类型的序列化：</p><ul><li>布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;false&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;[1,&quot;false&quot;,false]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第七大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第七大特性" aria-hidden="true">#</a> JSON.stringify() 第七大特性</h3><p>关于对象属性的是否可枚举：</p><ul><li>其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不可枚举的属性默认会被忽略：</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>
    Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
        <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;stringify&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;{&quot;y&quot;:&quot;stringify&quot;}&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify-第八大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第八大特性" aria-hidden="true">#</a> JSON.stringify() 第八大特性</h3><p>我们都知道实现深拷贝最简单粗暴的方式就是序列化：JSON.parse(JSON.stringify())，这个方式实现深拷贝会因为序列化的诸多特性从而导致诸多的坑点：比如现在我们要说的循环引用问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;loopObj&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> loopObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  obj
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 对象之间形成循环引用，形成闭环</span>
obj<span class="token punctuation">.</span>loopObj <span class="token operator">=</span> loopObj<span class="token punctuation">;</span>

<span class="token comment">// 封装一个深拷贝的函数</span>
<span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 执行深拷贝，抛出错误</span>
<span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 VM44:9 Uncaught TypeError: Converting circular structure to JSON
    --&gt; starting at object with constructor &#39;Object&#39;
    |     property &#39;loopObj&#39; -&gt; object with constructor &#39;Object&#39;
    --- property &#39;obj&#39; closes the circle
    at JSON.stringify (&lt;anonymous&gt;)
    at deepClone (&lt;anonymous&gt;:9:26)
    at &lt;anonymous&gt;:11:13
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。 这也就是为什么用序列化去实现深拷贝时，遇到循环引用的对象会抛出错误的原因。</li></ul><h3 id="json-stringify-第九大特性" tabindex="-1"><a class="header-anchor" href="#json-stringify-第九大特性" aria-hidden="true">#</a> JSON.stringify() 第九大特性</h3><ul><li>所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&quot;stringify&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> k <span class="token operator">===</span> <span class="token string">&quot;symbol&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>replacer 是 JSON.stringify() 的第二个参数，我们比较少用到，所以很多时候我们会忘记 JSON.stringify() 第二个、第三个参数，场景不多，但是用的好的话会非常方便，关于 JSON.stringify() 第九大特性的例子中对 replacer 参数不明白的同学先别急，其实很简单，我们马上就会在下面的学习中弄懂。</p><h2 id="json-stringify-第二个参数和第三个参数" tabindex="-1"><a class="header-anchor" href="#json-stringify-第二个参数和第三个参数" aria-hidden="true">#</a> JSON.stringify() 第二个参数和第三个参数</h2><h3 id="强大的第二个参数" tabindex="-1"><a class="header-anchor" href="#强大的第二个参数" aria-hidden="true">#</a> 强大的第二个参数</h3><ul><li>作为函数时，它有两个参数，键（key）和值（value），函数类似就是数组方法 map、filter 等方法的回调函数，对每一个属性值都会执行一次该函数（期间我们还简单实现过一个 map 函数）。</li><li>如果 replacer 是一个数组，数组的值代表将被序列化成 JSON 字符串的属性名。</li></ul><h3 id="华丽的第三个参数" tabindex="-1"><a class="header-anchor" href="#华丽的第三个参数" aria-hidden="true">#</a> 华丽的第三个参数</h3><ul><li>如果是一个数字, 则在字符串化时每一级别会比上一级别缩进多这个数字值的空格（最多10个空格）；</li><li>如果是一个字符串，则每一级别会比上一级别多缩进该字符串（或该字符串的前10个字符）。</li></ul>`,37),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","index.html.vue"]]);export{r as default};
