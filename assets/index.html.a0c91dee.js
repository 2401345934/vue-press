import{_ as t,z as e,A as d,a6 as i}from"./framework.fef63301.js";const l={},a=i(`<h1 id="html简介" tabindex="-1"><a class="header-anchor" href="#html简介" aria-hidden="true">#</a> HTML简介</h1><p><strong>1. 什么是HTML？</strong></p><ul><li>超文本标记语言（Hyper Text Markup Language），是用来描述网页的一种语言。</li><li>是一种标记语言，不是编程语言。</li><li>标记语言是一套标记标签。</li></ul><p><strong>2.Web标准</strong></p><ul><li>Web标准不是某一个标准，而是由W3C（万维网联盟，国际最著名的标准化组织）和其他标准化组织制定的一系列的集合。主要包括结构（Structure）、表现（Presentation）、行为（Behave）三个方面。</li></ul><p><strong>3. 为什么需要Web标准?</strong></p><ul><li>浏览器不同，他们显示的页面或者排版就有差异，需要web标准来限制</li><li>开发人员按照 Web 标准制作网页，他们可以很容易了解彼此的编码。</li><li>遵守标准的Web页面可以使得搜索引擎更容易访问并收入网页，也可以更容易转换为其他格式，并更易于访问程序代码（如JavaScript和DOM）</li></ul><p><strong>4. Web标准的三大组成部分</strong></p><ul><li>结构用于对网页元素的整理和分类，主要包括xml和html两部分。（比如一只没毛的鸟）结构最重要。</li><li>表现用于设置网页元素的板式、颜色、大小等外观样式，主要指CSS。（比如一只有毛的鸟）</li><li>行为是指网页模型的定义及交互的编写 js。（比如一只会飞的鸟）</li></ul><h2 id="html语法规范" tabindex="-1"><a class="header-anchor" href="#html语法规范" aria-hidden="true">#</a> HTML语法规范</h2><p>HTML标签通常成对出现，称为双标签。有极少个是单标签。<br> 标签的关系可以分为<strong>包含关系</strong>和<strong>并列关系</strong></p><ul><li>包含：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
 &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>并列</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html基本结构标签" tabindex="-1"><a class="header-anchor" href="#html基本结构标签" aria-hidden="true">#</a> HTML基本结构标签</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;    
    &lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网页开发工具" tabindex="-1"><a class="header-anchor" href="#网页开发工具" aria-hidden="true">#</a> 网页开发工具</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>表示浏览器采取html5的版本显示网页，必须写到文档最前面的位置，是文档类型的声明标签，不是html标签。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html lang=&quot;en&quot;&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义当前文档显示的语言。<br> en 定义语言为英文，zh-CN定义语言为中文。（提倡使用）<br> 定义en就是英文网页，定义zh-CN就是中文网页。<br> 对于文档显示来说，定义en也可以显示中文文档，同理定义zh-CN也可以显示英文文档。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;meta charset=&quot;UTF-8&quot;/&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在标签内，使用标签的charset属性规定该html文档应该使用哪种字符编码。<br> UTF-8 是万国码，包含了全世界所有国家需要用到的字符。 一定要写，否则乱码。</p><h2 id="常用标签" tabindex="-1"><a class="header-anchor" href="#常用标签" aria-hidden="true">#</a> 常用标签</h2><h3 id="标题标签" tabindex="-1"><a class="header-anchor" href="#标题标签" aria-hidden="true">#</a> 标题标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    通过 &lt;h1&gt; - &lt;h6&gt; 标签进行定义的。
    &lt;h1&gt; 定义最大的标题。 &lt;h6&gt; 定义最小的标题。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="段落标签" tabindex="-1"><a class="header-anchor" href="#段落标签" aria-hidden="true">#</a> 段落标签</h3><p>把文字有条理的分段显示，该标签用于定义段落</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;p&gt;我是一个段落标签&lt;/p&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>特点：</p><ol><li>打空格没用，打多少都显示一个空格</li><li>文本在一个段落中会根据浏览器的大小自动换行</li><li>段落和段落之间有空隙</li></ol><h3 id="水平线标签" tabindex="-1"><a class="header-anchor" href="#水平线标签" aria-hidden="true">#</a> 水平线标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>       &lt;hr /&gt;是单标签

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="换行标签" tabindex="-1"><a class="header-anchor" href="#换行标签" aria-hidden="true">#</a> 换行标签</h3><p>强制文本换行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abc &lt;br/&gt; efg     

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>显示为：<br> abc<br> efg</p><p>特点：</p><ol><li>是个单标签</li><li>只是简单开始新的一行。行之间没有太大的空隙。</li></ol><h3 id="文本格式化标签" tabindex="-1"><a class="header-anchor" href="#文本格式化标签" aria-hidden="true">#</a> 文本格式化标签</h3><ul><li>突出重要性，比普通文字更重要</li></ul><p>在网页中，有时需要把文字设置为粗体、斜体或者下划线等效果，这时就需要用到HTML中的文本格式化标签，使文字以特殊方式显示</p><table><thead><tr><th>标签</th><th>语义</th><th>描述</th></tr></thead><tbody><tr><td>&lt; strong&gt;&lt; /strong&gt; 、 &lt; b&gt;&lt; /b&gt;</td><td>加粗</td><td>优先考虑strong，语义更加强烈</td></tr><tr><td>&lt; em&gt;&lt; /em&gt;、&lt; i&gt;&lt; /i&gt;</td><td>倾斜</td><td>优先em，语义更加强烈</td></tr><tr><td>&lt; del&gt;&lt; /del&gt;、&lt; s&gt;&lt; /s&gt;</td><td>删除线</td><td>优先del，语义更强烈</td></tr><tr><td>&lt; ins&gt;&lt; /ins&gt;、&lt; u&gt;&lt; /u&gt;</td><td>下划线</td><td>优先ins，语义更强烈</td></tr></tbody></table><ul><li>div和span标签<br> 没有语义，他们是一个盒子，用来装内容、布局网页。</li></ul><p>特点：</p><ol><li>div用来布局，但是一行只能放一个div，大盒子。后面不能放东西，否则转到下一行显示。</li><li>span标签用来布局，一行上可以多个span，小盒子。</li></ol><h3 id="图像标签" tabindex="-1"><a class="header-anchor" href="#图像标签" aria-hidden="true">#</a> 图像标签</h3><p>用于定义html页面中的图像，是个单标签</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;图像URL&quot; alt=&quot;图片说明&quot; title=&quot;提示文本&quot; width=&quot;图片宽度&quot; height=&quot;图片高度&quot; border=&quot;1&quot;/&gt;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>src是img标签的必须属性，用于指定图像文件的路径和文件名。<br> 图像的其他属性：</p><table><thead><tr><th>属性</th><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>src</td><td>图片路径</td><td>必须属性</td></tr><tr><td>alt</td><td>文本</td><td>替换文本，图像不能显示时才能看到的替换文字</td></tr><tr><td>title</td><td>文本</td><td>提示文本，鼠标放到图片上显示的文字</td></tr><tr><td>width</td><td>像素</td><td>设置图像宽度</td></tr><tr><td>height</td><td>像素</td><td>设置图片高度</td></tr><tr><td>border</td><td>数字</td><td>设置图像的边框粗细</td></tr></tbody></table><p>宽度和高度设置一个就行，另外的会等比例缩放，避免失真<br> 属性不分先后顺序，均以空格分开</p><h3 id="路径" tabindex="-1"><a class="header-anchor" href="#路径" aria-hidden="true">#</a> 路径</h3><ul><li>相对路径：以引用文件所在的位置为基础建立出的目录路径（文件相对于html页面的位置）</li><li>绝对路径：从盘符开始的路径（或者完整的网络地址），注意盘符路径的斜杠 如&quot; D:\\web\\img\\logo.gif &quot;</li></ul><table><thead><tr><th>相对路径分类</th><th>符号</th><th>说明</th></tr></thead><tbody><tr><td>同级路径</td><td></td><td>文件和所需文件同一级</td></tr><tr><td>同级路径</td><td>./</td><td>当前目录下的某目录或某文件</td></tr><tr><td>下一级路径</td><td>/</td><td>某文件目录的下一级</td></tr><tr><td>上一级路径</td><td>../</td><td>所需文件位于当前目录的上一级</td></tr></tbody></table><h3 id="超链接标签" tabindex="-1"><a class="header-anchor" href="#超链接标签" aria-hidden="true">#</a> 超链接标签</h3><p>用于定义链接，作用是从一个页面跳转到另一个页面<br> anchor：锚</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;a href=&quot;跳转目标&quot; target=&quot;目标窗口的弹出方式&quot;&gt; 文本或图像 &lt;/a&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>href:指定链接地址的url属性（必须属性），当标签 引用href属性时，它就具有了超链接的功能</p></li><li><p>target:用于指定链接页面的打开方式，其中**_self<strong>为默认值，在当前窗口打开页面；</strong>_blank**为在新窗口中打开页面</p></li></ul><h3 id="html中的注释和特殊字符" tabindex="-1"><a class="header-anchor" href="#html中的注释和特殊字符" aria-hidden="true">#</a> HTML中的注释和特殊字符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;!--注释--&gt;(键盘使用ctrl+/ 快捷加注释)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用特殊字符：</p><table><thead><tr><th>特殊字符</th><th>描述</th><th>字符代码</th></tr></thead><tbody><tr><td></td><td>空格符</td><td>&amp;nbsp；</td></tr><tr><td>&lt;</td><td>小于号</td><td>&amp;lt；</td></tr><tr><td>&gt;</td><td>大于号</td><td>&amp;gt；</td></tr></tbody></table><h3 id="表格标签" tabindex="-1"><a class="header-anchor" href="#表格标签" aria-hidden="true">#</a> 表格标签</h3><p>显示、展示数据，不是用来布置页面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    &lt;table&gt;
 &lt;tr&gt;
  &lt;td&gt;单元格内容&lt;/td&gt;
  ...
 &lt;/tr&gt;
 ...
    &lt;/table&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>table 适用于定义表格的标签</li><li>tr 用于定义表格中的行，必须嵌套早 table 标签中使用</li><li>td 用于定义表格中的单元格，必须嵌套在 tr 中</li></ul><h3 id="表头单元格标签" tabindex="-1"><a class="header-anchor" href="#表头单元格标签" aria-hidden="true">#</a> 表头单元格标签</h3><p>一般表头单元格位于表格的第一行或第一列，表头单元格中的文本内容<strong>加粗居中</strong>显示<br> th标签 表示html表格的表头部分（table head的缩写）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;table&gt;
 &lt;tr&gt;
  &lt;th&gt;姓名&lt;/th&gt;
  ...
 &lt;/tr&gt;
 ...
&lt;/table&gt;   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表格属性：</p><table><thead><tr><th>属性名</th><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>align</td><td>left、center、right</td><td>规定表格相对于周围元素的对齐方式</td></tr><tr><td>border</td><td>1或 &quot; &quot;</td><td>规定单元格是否拥有边框，默认为 &quot; &quot;或 0 ,表示没有边框</td></tr><tr><td>cellpadding</td><td>像素值</td><td>规定单元边沿与其单元格中内容之间的空白（距离），默认1像素</td></tr><tr><td>cellspacing</td><td>像素值</td><td>规定单元格与单元格之间的空白（距离），默认2像素</td></tr><tr><td>width</td><td>像素值或百分比</td><td>规定表格的宽度</td></tr><tr><td>height</td><td>像素值或百分比</td><td>规定表格的高度</td></tr></tbody></table><p>这些属性要写到table里去，但是实际开发并不常用，后面会通过css来设置</p><h3 id="表格结构标签" tabindex="-1"><a class="header-anchor" href="#表格结构标签" aria-hidden="true">#</a> 表格结构标签</h3><p>可能表格很长，为了更好的表示表格标签的语义，可以将表格分割成<strong>表格头部</strong>和<strong>表格主体</strong>两大部分。</p><p><em>thead标签</em> 表格的头部区域（所有组成的区域）,内部必须拥有标签。一般位于第一行。</p><p><em>tbody标签</em> 表格的主体区域。主要用于放数据本体</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;table&gt;
    &lt;thead&gt;
      &lt;tr&gt;
          &lt;th&gt;姓名&lt;/th&gt;
        ...
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    ...
    &lt;/tbody&gt; 
&lt;/table&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并单元格" tabindex="-1"><a class="header-anchor" href="#合并单元格" aria-hidden="true">#</a> 合并单元格</h4><p>合并单元格的方式：</p><ul><li>跨行合并：rowspan=&quot;合并单元格的个数&quot;</li><li>跨列合并：colspan=&quot;合并单元格的个数 &quot;</li></ul><p>目标单元格：（写合并代码）</p><ul><li>跨行：最上侧单元格为目标单元格，写合并代码</li><li>跨列：最左侧单元格为目标单元格，写合并代码 合并单元格三步曲：</li></ul><ol><li>先确定是跨行合并还是跨列合并</li><li>找到目标单元格。写上合并方式=合并的单元格数量。 如</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;td colspan=&quot;2&quot;&gt;&lt;/td&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>删除多余的单元格。</li></ol><h3 id="列表标签" tabindex="-1"><a class="header-anchor" href="#列表标签" aria-hidden="true">#</a> 列表标签</h3><p>用来布局<br> 特点: 整齐、整洁、有序</p><ul><li>列表可以分为三大类：无序列表、有序列表、自定义列表</li></ul><h4 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h4><p>ul标签 表示html页面中的无序列表，一般以项目符号呈现列表项，而列表项使用 li 定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;ul&gt;
            &lt;li&gt;列表项1&lt;/li&gt;
            &lt;li&gt;列表项2&lt;/li&gt;
            ...
        &lt;/ul&gt;

结果为:
·列表项1
·列表项2
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>无需列表的各个列表项之间没有顺序级别之分，是并列的。</li><li>ul 中只能嵌套 li ，在 ul 中输入其他标签或者文字是不被允许的</li><li>&lt; li&gt;&lt; /li&gt;之间相当于一个容器，可以容纳所有元素</li><li>无序列表会带有自己的样式属性，但在实际使用时，我们会使用css来设置</li></ol><h4 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h4><p>ol标签 用于定义有序列表，列表排序以数字来显示，并且使用 li标签 来定义列表项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;ol&gt;
            &lt;li&gt;列表项1&lt;/li&gt;
            &lt;li&gt;列表项2&lt;/li&gt;
            ...
        &lt;/ol&gt;

结果为:
1.列表项1
2.列表项2
...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>ol标签 中只能嵌套li，直接在 ol标签 中输入其他标签或文字的做法是不被允许的</li><li>&lt; li&gt;&lt; /li&gt;之间相当于一个容器，可以容纳所有元素</li><li>有序列表或带有自己的样式属性，但在实际使用时会使用css来设置。</li></ol><h4 id="自定义列表" tabindex="-1"><a class="header-anchor" href="#自定义列表" aria-hidden="true">#</a> 自定义列表</h4><ul><li>通常在网页底部使用。</li></ul><p>用于对术语或者名词进行解释和描述，自定义列表的列表项前没有任何项目符号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dl&gt;
            &lt;dt&gt;名词&lt;/dt&gt;
            &lt;dd&gt;名词解释1&lt;/dd&gt;
            &lt;dd&gt;名词解释2&lt;/dd&gt;
            ...
        &lt;/dl&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li>dl 标签 里面只能包含dt和dd，dt、dd里面可以放任何标签</li><li>dt 和 dd 个数没有限制，经常是一个 dt 对应多个 dd</li><li>dt 和 dd 是并列关系。</li></ol><h3 id="表单标签" tabindex="-1"><a class="header-anchor" href="#表单标签" aria-hidden="true">#</a> 表单标签</h3><p>使用表单是为了 收集用户信息</p><p>在网页中我们也要跟用户进行交互，收集用户资料，此时就需要表单</p><ul><li>表单的组成（常见于注册页面）<br> 一个完整的表单通常由 <strong>表单域、表单控件（也称为表单元素）和提示信息</strong> 3个部分构成</li></ul><h4 id="表单域" tabindex="-1"><a class="header-anchor" href="#表单域" aria-hidden="true">#</a> 表单域</h4><p>包含表单元素的区域<br> 在html标签中，form标签 用于定义表单域，以实现用户信息的收集和传递。<br> form标签 会把它范围内的表单元素提交给服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;url地址&quot; method=&quot;提交方式&quot; name=&quot;表单域名称&quot;&gt;
 各种表单元素控件
&lt;/form&gt;
        

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>action：属性值：url地址。 用于指定接收并处理表单数据的服务器程序的url地址。</li><li>method：属性值：get/post。用于设置表单数据的提交方式，其取值为get或者post。</li><li>name：属性值：名称。用于指定表单的名称，以区分同一个页面中的多个表单域。</li></ul><p>注意：</p><ol><li>写表单元素之前，应该有个表单把他们进行包含</li><li>表单域是 form标签</li></ol><h4 id="表单控件-表单元素" tabindex="-1"><a class="header-anchor" href="#表单控件-表单元素" aria-hidden="true">#</a> 表单控件（表单元素）</h4><p>在表单域中定义的表单元素就是 允许用户在表单中输入或选择的内容控件</p><ol><li>input 输入表单元素</li><li>select 下拉表单元素</li><li>textarea文本域元素</li></ol><h5 id="input表单元素" tabindex="-1"><a class="header-anchor" href="#input表单元素" aria-hidden="true">#</a> input表单元素</h5><p>包含一个type属性，根据不同的type属性值，输入的字段有很多种形式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;input type=&quot;属性值&quot;/&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>type属性的属性值如下：</p><table><thead><tr><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>text</td><td>定义单行的输入字段，用户可以在其中输入文本，默认宽度为20个字符。</td></tr><tr><td>password</td><td>定义密码字段。该字段中的字符被掩码。</td></tr><tr><td>checkbox</td><td>定义复选框</td></tr><tr><td>image</td><td>定义图像形式的提交按钮</td></tr><tr><td>radio</td><td>定义单选按钮。</td></tr><tr><td>submit</td><td>定义提交按钮，提交按钮会把表单数据发送到服务器。</td></tr><tr><td>reset</td><td>定义重置按钮，重置按钮会清除表单中所有数据。</td></tr><tr><td>button</td><td>定义可点击的按钮（通常用于通过JavaScript启动脚本）</td></tr><tr><td>file</td><td>（文件域）定义输入字段和&quot;浏览&quot;按钮，供文件上传。</td></tr><tr><td>hidden</td><td>定义隐藏的输入字段。</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; &gt;  text 文本框 用户可以在里面输入任何文字
&lt;input type=&quot;paassword&quot;&gt;  password 密码框 用户看不见输入的密码
&lt;input type=&quot;radio&quot;&gt;男   radio按钮，可以实现多选一
&lt;input type=&quot;checkbox&quot;&gt;睡觉  checkbox 复选框，可以实现多选。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除type属性外，input标签还有很多其他属性：</p><table><thead><tr><th>属性</th><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td>由用户自定义</td><td>定义input元素的名称</td></tr><tr><td>value</td><td>由用户自定义</td><td>规定input元素的值</td></tr><tr><td>checked</td><td>checked</td><td>规定此input元素首次加载时应当被选中</td></tr><tr><td>maxiength</td><td>正整数</td><td>规定输入字段中的字符的最大长度(较少使用，多使用正则表达式)</td></tr></tbody></table><ul><li>radio 实现多选一 ：有相同name即可。（因为name的属性相同，所以只有一个能被选中）</li><li>checkbox：必须有相同name。（一般将name设置为name[],如果被选中，则在数组name中添加一个元素）</li><li>单选和多选框可以设置<strong>checked</strong>。在打开的时候就默认选中这个按钮</li></ul><h5 id="label标签" tabindex="-1"><a class="header-anchor" href="#label标签" aria-hidden="true">#</a> label标签</h5><p>label标签为input元素定义标注（标签）<br> label标签用于绑定一个表单元素，当点击label标签内的文本时，浏览器会自动将焦点（光标）转到或选择对应的表单元素上，来增加用户体验。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;label for=&quot;sex&quot;&gt;男&lt;/label&gt;
&lt;input type=&quot;radio&quot; name=&quot;sex&quot; id=&quot;sex&quot;/&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>label标签的 for属性 应当与相关元素的 id属性相同。</p><h5 id="select下拉表单元素" tabindex="-1"><a class="header-anchor" href="#select下拉表单元素" aria-hidden="true">#</a> select下拉表单元素</h5><p>页面中如果有多个选项让用户选择，并且想要节约空间时使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;select&gt;
 &lt;option&gt;选项1&lt;/option&gt;
 &lt;option&gt;选项2&lt;/option&gt;
 &lt;option&gt;选项3&lt;/option&gt;
 ...
&lt;/select&gt;

&lt;select&gt;中至少包含一对&lt;option&gt;
&lt;select&gt;中定义select=&quot;selected&quot;时，当前项即为默认选中项

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="textarea文本域标签" tabindex="-1"><a class="header-anchor" href="#textarea文本域标签" aria-hidden="true">#</a> textarea文本域标签</h5><p>用户输入内容较多时使用，常见于留言板、评论。<br> textarea标签是用于定义多行文本输入的控件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;textarea rows=&quot;3&quot; cols=&quot;20&quot;&gt;
 文本内容
&lt;/textarea&gt;

通过&lt;textarea&gt;标签可以轻松创建多行文本输入框
cols=&quot;每行中的字符数&quot;，rows=&quot;显示的行数**&quot;，**在开发中不会使用，都是用CSS开改变大小。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,138),n=[a];function r(s,u){return e(),d("div",null,n)}const v=t(l,[["render",r],["__file","index.html.vue"]]);export{v as default};
