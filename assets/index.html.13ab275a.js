import{_ as e,z as i,A as a,a6 as n}from"./framework.fef63301.js";const d={},t=n(`<h1 id="hard-line-breaks" tabindex="-1"><a class="header-anchor" href="#hard-line-breaks" aria-hidden="true">#</a> hard-line-breaks</h1><h2 id="软换行-soft-line-breaks" tabindex="-1"><a class="header-anchor" href="#软换行-soft-line-breaks" aria-hidden="true">#</a> 软换行（Soft line breaks）</h2><p>换行符不在行内代码或 HTML 标签内，前面没有两个或以上的空格，将解析为<strong>软换行（Soft line breaks）</strong>。渲染为 HTML 时是一个<strong>行结束符或空格</strong>。</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo
baz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;foo
baz&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a8c01c5a6d34009baf8a49e64045fb6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><h2 id="硬换行-hard-line-breaks" tabindex="-1"><a class="header-anchor" href="#硬换行-hard-line-breaks" aria-hidden="true">#</a> 硬换行（Hard line breaks）</h2><p>换行符不在内联代码或 HTML 标签内，前面有两个或多个的空格，并且不在块的末尾， 将解析为<strong>硬换行（Hard line breaks）</strong> ，渲染为 HTML 时是一个 <code>&lt;br /&gt;</code> 标签。</p><p>输入（注意 <code>foo</code> 后面有两个空格）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo  
baz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;foo

baz&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/588f391ec5344f6fa11ea30f21f4a81f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><h2 id="反斜杠-backslash" tabindex="-1"><a class="header-anchor" href="#反斜杠-backslash" aria-hidden="true">#</a> 反斜杠（backslash）</h2><p>除了用于转义，在行尾的反斜杠相当于硬换行：</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo\\
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;foo

bar&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行内代码-code-span" tabindex="-1"><a class="header-anchor" href="#行内代码-code-span" aria-hidden="true">#</a> <strong>行内代码（code span）</strong></h2><p>我们通常会用一对反引号包裹字符串，表示<strong>行内代码（code span）</strong>：</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`foo\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2719f85171734524993bc82bcbb3b34f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><p>但其实行内代码只要求内联代码以反引号串开始，以同样长度的反引号串结束。</p><p>所以用多个反引号也是可以的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>\`\`\`foo\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="围栏式代码块-fenced-code-blocks" tabindex="-1"><a class="header-anchor" href="#围栏式代码块-fenced-code-blocks" aria-hidden="true">#</a> 围栏式代码块（Fenced code blocks）</h2><p>如果你使用了至少三个连续的反引号，并且添加了换行，就会变成围栏式代码块：</p><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0560e78279c449859ec16e56460c6c5c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><p>如同行内代码，不要求必须三个反引号，只要至少三个并且前后相同就行，所以当我们想在代码块中使用三个反引号时，你可以使用四个反引号包裹：</p><p>表现为：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/685bb66fc9ed45e99a8a37817392ff46~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><p>不使用反引号，使用波浪号也是可以的，但不能混用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>~~~
foo
~~~

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pre&gt;&lt;code&gt;foo
&lt;/code&gt;&lt;/pre&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缩进式代码块-indented-code-blocks" tabindex="-1"><a class="header-anchor" href="#缩进式代码块-indented-code-blocks" aria-hidden="true">#</a> 缩进式代码块（Indented code blocks）</h2><p>缩进式代码块由空行隔开的数个<strong>缩进块</strong>组成。</p><p><strong>缩进块</strong>是数个非空行，<strong>每行缩进四个或多个空格</strong>。</p><p>举例一个缩进块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    a simple
      indented code block

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pre&gt;&lt;code&gt;a simple
  indented code block
&lt;/code&gt;&lt;/pre&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23e8e2a809c0448395063281f9279014~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><p>举例由空行隔开的数个缩进块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    chunk1
    chunk2

    chunk3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;pre&gt;&lt;code&gt;chunk1

chunk2



chunk3
&lt;/code&gt;&lt;/pre&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个缩进块共同组成了缩进式代码块。</p><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05343ca517a14464af2e08f7f3d6f86c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><h2 id="链接引用定义-link-reference-definitions" tabindex="-1"><a class="header-anchor" href="#链接引用定义-link-reference-definitions" aria-hidden="true">#</a> 链接引用定义（Link reference definitions）</h2><p>链接引用定义由链接标签、冒号(😃、可选的空白、链接目标、可选的空白及可选的链接标题组成。举个例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[foo]: /url &quot;title&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但这只是一个定义，并不会有任何展示，就像我们在 JavaScript 中声明了一个变量一样，如果我们要使用它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[foo]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;&lt;a href=&quot;/url&quot; title=&quot;title&quot;&gt;foo&lt;/a&gt;&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>链接引用定义不对应于某个结构元素。实际上它定义了一个标签，以用于在文档其它地方的引用链接及引用类型图像。它可以出现在引用链接的前面或后面。</p><p>当在图片中使用链接引用定义时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![foo][bar]

[bar]: /url

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;&lt;img src=&quot;/url&quot; alt=&quot;foo&quot; /&gt;&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动链接-autolinks" tabindex="-1"><a class="header-anchor" href="#自动链接-autolinks" aria-hidden="true">#</a> 自动链接（Autolinks）</h2><p>自动链接是由尖括号(&lt;...&gt;)包裹的绝对 URI 与 email 地址。 它将解析为链接，以 URL 或 email 地址作为链接标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;http://foo.bar.baz&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[http://foo.bar.baz](http://foo.bar.baz)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;&lt;a href=&quot;http://foo.bar.baz&quot;&gt;http://foo.bar.baz&lt;/a&gt;&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setext-式标题-setext-headings" tabindex="-1"><a class="header-anchor" href="#setext-式标题-setext-headings" aria-hidden="true">#</a> Setext 式标题（Setext headings）</h2><p>Setext 是一种轻量级标记语言，用于格式化纯文本文档，例如电子通讯，Usenet 帖子和电子邮件。与其他一些标记语言相比，该标记易于阅读，而无需任何解析或特殊软件。</p><p>Markdown 同样提供了类似的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Foo *bar*
=========

Foo *bar*
---------

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h1&gt;
&lt;h2&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h2&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>=</code>则是第一级标题，使用<code>-</code>字符则是第二级标题。底线长度任意。</p><h2 id="水平线-thematic-breaks" tabindex="-1"><a class="header-anchor" href="#水平线-thematic-breaks" aria-hidden="true">#</a> 水平线（Thematic breaks）</h2><p>由 0-3 个空格的缩进及三或多个 <code>-</code>,<code>_</code>, <code>*</code> 字符组成的行，形成水平线。</p><p>输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>***
---
___

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hr /&gt;
&lt;hr /&gt;
&lt;hr /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表现：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a94a7f039ab544c5baf36c4dd5a46f25~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p>`,99),s=[t];function l(r,c){return i(),a("div",null,s)}const u=e(d,[["render",l],["__file","index.html.vue"]]);export{u as default};
