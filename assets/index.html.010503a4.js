import{_ as e,z as i,A as l,a6 as n}from"./framework.fef63301.js";const d={},s=n(`<h1 id="中级前端面试-上" tabindex="-1"><a class="header-anchor" href="#中级前端面试-上" aria-hidden="true">#</a> 中级前端面试(上)</h1><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h2><h3 id="_1-盒模型" tabindex="-1"><a class="header-anchor" href="#_1-盒模型" aria-hidden="true">#</a> 1. 盒模型</h3><p>页面渲染时，dom 元素所采用的 <strong>布局模型</strong>。可通过<code>box-sizing</code>进行设置。根据计算宽高的区域可分为：</p><ul><li><code>content-box</code> (W3C 标准盒模型)</li><li><code>border-box</code> (IE 盒模型)</li><li><code>padding-box</code> (FireFox 曾经支持)</li><li><code>margin-box</code> (浏览器未实现)</li></ul><blockquote><p>Tips: 理论上是有上面 4 种盒子，但现在 w3c 与 mdn 规范中均只支持 <code>content-box</code> 与 <code>border-box</code>；</p></blockquote><h3 id="_2-bfc" tabindex="-1"><a class="header-anchor" href="#_2-bfc" aria-hidden="true">#</a> 2. BFC</h3><p><strong>块级格式化上下文</strong>，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。</p><blockquote><p>IE下为 Layout，可通过 zoom:1 触发</p></blockquote><ul><li><p>触发条件:</p><ul><li>根元素</li><li><code>position: absolute/fixed</code></li><li><code>display: inline-block / table</code></li><li><code>float</code> 元素</li><li><code>ovevflow</code> !== <code>visible</code></li></ul></li><li><p>规则:</p><ul><li>属于同一个 BFC 的两个相邻 Box 垂直排列</li><li>属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠</li><li>BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)</li><li>BFC 的区域不会与 float 的元素区域重叠</li><li>计算 BFC 的高度时，浮动子元素也参与计算</li><li>文字层不会被浮动层覆盖，环绕于周围</li></ul></li><li><p>应用:</p><ul><li>阻止<code>margin</code>重叠</li><li>可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个<code>div</code>都位于同一个 BFC 区域之中)</li><li>自适应两栏布局</li><li>可以阻止元素被浮动元素覆盖</li></ul></li></ul><h3 id="_3-层叠上下文" tabindex="-1"><a class="header-anchor" href="#_3-层叠上下文" aria-hidden="true">#</a> 3.层叠上下文</h3><p>元素提升为一个比较特殊的图层，在三维空间中 <strong>(z轴)</strong> 高出普通元素一等。</p><ul><li><p>触发条件</p><ul><li>根层叠上下文(<code>html</code>)</li><li><code>position</code></li><li>css3属性 <ul><li><code>flex</code></li><li><code>transform</code></li><li><code>opacity</code></li><li><code>filter</code></li><li><code>will-change</code></li><li><code>-webkit-overflow-scrolling</code></li></ul></li></ul></li><li><p>层叠等级：层叠上下文在z轴上的排序</p><ul><li>在同一层叠上下文中，层叠等级才有意义</li><li><code>z-index</code>的优先级最高</li></ul></li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d9f3a1d368b~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h3 id="_4-居中布局" tabindex="-1"><a class="header-anchor" href="#_4-居中布局" aria-hidden="true">#</a> 4. 居中布局</h3><ul><li><p>水平居中</p><ul><li>行内元素: <code>text-align: center</code></li><li>块级元素: <code>margin: 0 auto</code></li><li><code>absolute + transform</code></li><li><code>flex + justify-content: center</code></li></ul></li><li><p>垂直居中</p><ul><li><code>line-height: height</code></li><li><code>absolute + transform</code></li><li><code>flex + align-items: center</code></li><li><code>table</code></li></ul></li><li><p>水平垂直居中</p><ul><li><code>absolute + transform</code></li><li><code>flex + justify-content + align-items</code></li></ul></li></ul><h3 id="_5-选择器优先级" tabindex="-1"><a class="header-anchor" href="#_5-选择器优先级" aria-hidden="true">#</a> 5. 选择器优先级</h3><ul><li><code>!important</code> &gt; 行内样式 &gt; <code>#id</code> &gt; <code>.class</code> &gt; <code>tag</code> &gt; * &gt; 继承 &gt; 默认</li><li>选择器 <strong>从右往左</strong> 解析</li></ul><h3 id="_6-去除浮动影响-防止父级高度塌陷" tabindex="-1"><a class="header-anchor" href="#_6-去除浮动影响-防止父级高度塌陷" aria-hidden="true">#</a> 6.去除浮动影响，防止父级高度塌陷</h3><ul><li>通过增加尾元素清除浮动 <ul><li><code>:after / &lt;br&gt; : clear: both</code></li></ul></li><li>创建父级 BFC</li><li>父级设置高度</li></ul><h3 id="_7-link-与-import-的区别" tabindex="-1"><a class="header-anchor" href="#_7-link-与-import-的区别" aria-hidden="true">#</a> 7.link 与 @import 的区别</h3><ul><li><code>link</code>功能较多，可以定义 RSS，定义 Rel 等作用，而<code>@import</code>只能用于加载 css</li><li>当解析到<code>link</code>时，页面会同步加载所引的 css，而<code>@import</code>所引用的 css 会等到页面加载完才被加载</li><li><code>@import</code>需要 IE5 以上才能使用</li><li><code>link</code>可以使用 js 动态引入，<code>@import</code>不行</li></ul><h3 id="_8-css预处理器-sass-less-postcss" tabindex="-1"><a class="header-anchor" href="#_8-css预处理器-sass-less-postcss" aria-hidden="true">#</a> 8. CSS预处理器(Sass/Less/Postcss)</h3><p>CSS预处理器的原理: 是将类 CSS 语言通过 <strong>Webpack 编译</strong> 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:</p><ul><li>嵌套</li><li>变量</li><li>循环语句</li><li>条件语句</li><li>自动前缀</li><li>单位转换</li><li>mixin复用</li></ul><p>面试中一般不会重点考察该点，一般介绍下自己在实战项目中的经验即可~</p><h3 id="_9-css动画" tabindex="-1"><a class="header-anchor" href="#_9-css动画" aria-hidden="true">#</a> 9.CSS动画</h3><ul><li><p><code>transition</code>: 过渡动画</p><ul><li><code>transition-property</code>: 属性</li><li><code>transition-duration</code>: 间隔</li><li><code>transition-timing-function</code>: 曲线</li><li><code>transition-delay</code>: 延迟</li><li>常用钩子: <code>transitionend</code></li></ul></li><li><p><code>animation / keyframes</code></p><ul><li><code>animation-name</code>: 动画名称，对应<code>@keyframes</code></li><li><code>animation-duration</code>: 间隔</li><li><code>animation-timing-function</code>: 曲线</li><li><code>animation-delay</code>: 延迟</li><li><code>animation-iteration-count</code>: 次数 <ul><li><code>infinite</code>: 循环动画</li></ul></li><li><code>animation-direction</code>: 方向 <ul><li><code>alternate</code>: 反向播放</li></ul></li><li><code>animation-fill-mode</code>: 静止模式 <ul><li><code>forwards</code>: 停止时，保留最后一帧</li><li><code>backwards</code>: 停止时，回到第一帧</li><li><code>both</code>: 同时运用 <code>forwards / backwards</code></li></ul></li><li>常用钩子: <code>animationend</code></li></ul></li><li><p>动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现</p><ul><li><code>translate</code></li><li><code>scale</code></li><li><code>rotate</code></li><li><code>skew</code></li><li><code>opacity</code></li><li><code>color</code></li></ul></li></ul><h3 id="经验" tabindex="-1"><a class="header-anchor" href="#经验" aria-hidden="true">#</a> 经验</h3><p>通常，CSS 并不是重点的考察领域，但这其实是由于现在国内业界对 CSS 的专注不够导致的，真正精通并专注于 CSS 的团队和人才并不多。因此如果能在 CSS 领域有自己的见解和经验，反而会为相当的加分和脱颖而出。</p><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h2><h3 id="_1-原型-构造函数-实例" tabindex="-1"><a class="header-anchor" href="#_1-原型-构造函数-实例" aria-hidden="true">#</a> 1. 原型 / 构造函数 / 实例</h3><ul><li><p>原型<code>(prototype)</code>: 一个简单的对象，用于实现对象的 <strong>属性继承</strong>。可以简单的理解成对象的爹。在 Firefox 和 Chrome 中，每个<code>JavaScript</code>对象中都包含一个<code>__proto__</code> (非标准)的属性指向它爹(该对象的原型)，可<code>obj.__proto__</code>进行访问。</p></li><li><p>构造函数: 可以通过<code>new</code>来 <strong>新建一个对象</strong> 的函数。</p></li><li><p>实例: 通过构造函数和<code>new</code>创建出来的对象，便是实例。 <strong>实例通过<code>__proto__</code>指向原型，通过<code>constructor</code>指向构造函数</strong>。</p></li></ul><p>说了一大堆，大家可能有点懵逼，这里来举个栗子，以<code>Object</code>为例，我们常用的<code>Object</code>便是一个构造函数，因此我们可以通过它构建实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 实例
const instance = new Object()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则此时， <strong>实例为<code>instance</code></strong>, <strong>构造函数为<code>Object</code></strong>，我们知道，构造函数拥有一个<code>prototype</code>的属性指向原型，因此原型为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 原型
const prototype = Object.prototype

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以来看出三者的关系:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>实例.__proto__ === 原型

原型.constructor === 构造函数

构造函数.prototype === 原型

// 这条线其实是是基于原型进行获取的，可以理解成一条基于原型的映射线
// 例如: 
// const o = new Object()
// o.constructor === Object   --&gt; true
// o.__proto__ = null;
// o.constructor === Object   --&gt; false
// 注意: 其实实例上并不是真正有 constructor 这个指针，它其实是从原型链上获取的
//      instance.hasOwnProperty(&#39;constructor&#39;) === false   (感谢 刘博海 Brian 童鞋🥳)
实例.constructor === 构造函数

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此处感谢 caihaihong 童鞋的指出。</p></blockquote><p>放大来看，我画了张图供大家彻底理解:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d9b940c4c6f~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h3 id="_2-原型链" tabindex="-1"><a class="header-anchor" href="#_2-原型链" aria-hidden="true">#</a> 2.原型链</h3><p><strong>原型链是由原型对象组成</strong>，每个对象都有 <code>__proto__</code> 属性，指向了创建该对象的构造函数的原型，<code>__proto__</code> 将对象连接起来组成了原型链。是一个用来<strong>实现继承和共享属性</strong>的有限的对象链。</p><ul><li><p><strong>属性查找机制</strong>: 当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象<code>Object.prototype</code>，如还是没找到，则输出 <code>undefined</code>；</p></li><li><p><strong>属性修改机制</strong>: 只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: <code>b.prototype.x = 2</code>；但是这样会造成所有继承于该对象的实例的属性发生改变。</p></li></ul><h3 id="_3-执行上下文-ec" tabindex="-1"><a class="header-anchor" href="#_3-执行上下文-ec" aria-hidden="true">#</a> 3. 执行上下文(EC)</h3><p>执行上下文可以简单理解为一个对象:</p><ul><li><p>它包含三个部分:</p><ul><li>变量对象(VO)</li><li>作用域链(词法作用域)</li><li><code>this</code>指向</li></ul></li><li><p>它的类型:</p><ul><li>全局执行上下文</li><li>函数执行上下文</li><li><code>eval</code>执行上下文</li></ul></li><li><p>代码执行过程:</p><ul><li>创建 <strong>全局上下文</strong> (global EC)</li><li>全局执行上下文 (caller) 逐行 <strong>自上而下</strong> 执行。遇到函数时，<strong>函数执行上下文</strong> (callee) 被<code>push</code>到执行栈顶层</li><li>函数执行上下文被激活，成为 active EC, 开始执行函数中的代码，caller 被挂起</li><li>函数执行完后，callee 被<code>pop</code>移除出执行栈，控制权交还全局上下文 (caller)，继续执行</li></ul></li></ul><h3 id="_2-变量对象" tabindex="-1"><a class="header-anchor" href="#_2-变量对象" aria-hidden="true">#</a> 2.变量对象</h3><p>变量对象，是执行上下文中的一部分，可以抽象为一种 <strong>数据作用域</strong>，其实也可以理解为就是一个简单的对象，它存储着该执行上下文中的所有 <strong>变量和函数声明(不包含函数表达式)</strong>。</p><blockquote><p>活动对象 (AO): 当变量对象所处的上下文为 active EC 时，称为活动对象。</p></blockquote><h3 id="_3-作用域" tabindex="-1"><a class="header-anchor" href="#_3-作用域" aria-hidden="true">#</a> 3. 作用域</h3><p>执行上下文中还包含作用域链。理解作用域之前，先介绍下作用域。作用域其实可理解为该上下文中声明的 <strong>变量和声明的作用范围</strong>。可分为 <strong>块级作用域</strong> 和 <strong>函数作用域</strong></p><p>特性:</p><ul><li><strong>声明提前</strong>: 一个声明在函数体内都是可见的, 函数优先于变量</li><li>非匿名自执行函数，函数变量为 <strong>只读</strong> 状态，无法修改</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let foo = function() { console.log(1) };
(function foo() {
    foo = 10  // 由于foo在函数中只为可读，因此赋值无效
    console.log(foo)
}()) 

// 结果打印：  ƒ foo() { foo = 10 ; console.log(foo) }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-作用域链" tabindex="-1"><a class="header-anchor" href="#_4-作用域链" aria-hidden="true">#</a> 4.作用域链</h3><p>我们知道，我们可以在执行上下文中访问到父级甚至全局的变量，这便是作用域链的功劳。作用域链可以理解为一组对象列表，包含 <strong>父级和自身的变量对象</strong>，因此我们便能通过作用域链访问到父级里声明的变量或者函数。</p><ul><li>由两部分组成: <ul><li><code>[[scope]]</code>属性: 指向父级变量对象和作用域链，也就是包含了父级的<code>[[scope]]</code>和<code>AO</code></li><li>AO: 自身活动对象</li></ul></li></ul><p>如此 <code>[[scopr]]</code>包含<code>[[scope]]</code>，便自上而下形成一条 <strong>链式作用域</strong>。</p><h3 id="_5-闭包" tabindex="-1"><a class="header-anchor" href="#_5-闭包" aria-hidden="true">#</a> 5. 闭包</h3><p>闭包属于一种特殊的作用域，称为 <strong>静态作用域</strong>。它的定义可以理解为: <strong>父函数被销毁</strong> 的情况下，返回出的子函数的<code>[[scope]]</code>中仍然保留着父级的单变量对象和作用域链，因此可以继续访问到父级的变量对象，这样的函数称为闭包。</p><ul><li><p>闭包会产生一个很经典的问题:</p><ul><li>多个子函数的<code>[[scope]]</code>都是同时指向父级，是完全共享的。因此当父级的变量对象被修改时，所有子函数都受到影响。</li></ul></li><li><p>解决:</p><ul><li>变量可以通过 <strong>函数参数的形式</strong> 传入，避免使用默认的<code>[[scope]]</code>向上查找</li><li>使用<code>setTimeout</code>包裹，通过第三个参数传入</li><li>使用 <strong>块级作用域</strong>，让变量成为自己上下文的属性，避免共享</li></ul></li></ul><h3 id="_6-script-引入方式" tabindex="-1"><a class="header-anchor" href="#_6-script-引入方式" aria-hidden="true">#</a> 6. script 引入方式</h3><ul><li>html 静态<code>&lt;script&gt;</code>引入</li><li>js 动态插入<code>&lt;script&gt;</code></li><li><code>&lt;script defer&gt;</code>: 延迟加载，元素解析完成后执行</li><li><code>&lt;script async&gt;</code>: 异步加载，但执行时会阻塞元素渲染</li></ul><h3 id="_7-对象的拷贝" tabindex="-1"><a class="header-anchor" href="#_7-对象的拷贝" aria-hidden="true">#</a> 7. 对象的拷贝</h3><ul><li><p>浅拷贝: 以赋值的形式拷贝引用对象，仍指向同一个地址，<strong>修改时原对象也会受到影响</strong></p><ul><li><code>Object.assign</code></li><li>展开运算符(...)</li></ul></li><li><p>深拷贝: 完全拷贝一个新对象，<strong>修改时原对象不再受到任何影响</strong></p><ul><li><code>JSON.parse(JSON.stringify(obj))</code>: 性能最快 <ul><li>具有循环引用的对象时，报错</li><li>当值为函数、<code>undefined</code>、或<code>symbol</code>时，无法拷贝</li></ul></li><li>递归进行逐一赋值</li></ul></li></ul><h3 id="_8-new运算符的执行过程" tabindex="-1"><a class="header-anchor" href="#_8-new运算符的执行过程" aria-hidden="true">#</a> 8. new运算符的执行过程</h3><ul><li>新生成一个对象</li><li>链接到原型: <code>obj.__proto__ = Con.prototype</code></li><li>绑定this: <code>apply</code></li><li>返回新对象(如果构造函数有自己 retrun 时，则返回该值)</li></ul><h3 id="_9-instanceof原理" tabindex="-1"><a class="header-anchor" href="#_9-instanceof原理" aria-hidden="true">#</a> 9. instanceof原理</h3><p>能在实例的 <strong>原型对象链</strong> 中找到该构造函数的<code>prototype</code>属性所指向的 <strong>原型对象</strong>，就返回<code>true</code>。即:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// __proto__: 代表原型对象链
instance.[__proto__...] === instance.constructor.prototype

// return true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-代码的复用" tabindex="-1"><a class="header-anchor" href="#_10-代码的复用" aria-hidden="true">#</a> 10. 代码的复用</h3><p>当你发现任何代码开始写第二遍时，就要开始考虑如何复用。一般有以下的方式:</p><ul><li>函数封装</li><li>继承</li><li>复制<code>extend</code></li><li>混入<code>mixin</code></li><li>借用<code>apply/call</code></li></ul><h3 id="_11-继承" tabindex="-1"><a class="header-anchor" href="#_11-继承" aria-hidden="true">#</a> 11. 继承</h3><p>在 JS 中，继承通常指的便是 <strong>原型链继承</strong>，也就是通过指定原型，并可以通过原型链继承原型上的属性或者方法。</p><ul><li>最优化: <strong>圣杯模式</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var inherit = (function(c,p){
 var F = function(){};
 return function(c,p){
  F.prototype = p.prototype;
  c.prototype = new F();
  c.uber = p.prototype;
  c.prototype.constructor = c;
 }
})();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 ES6 的语法糖 <code>class / extends</code></li></ul><h3 id="_12-类型转换" tabindex="-1"><a class="header-anchor" href="#_12-类型转换" aria-hidden="true">#</a> 12. 类型转换</h3><p>大家都知道 JS 中在使用运算符号或者对比符时，会自带隐式转换，规则如下:</p><ul><li>-、*、/、% ：一律转换成数值后计算</li><li>+： <ul><li>数字 + 字符串 = 字符串， 运算顺序是从左到右</li><li>数字 + 对象， 优先调用对象的<code>valueOf</code> -&gt; <code>toString</code></li><li>数字 + <code>boolean/null</code> -&gt; 数字</li><li>数字 + <code>undefined</code> -&gt; <code>NaN</code></li></ul></li><li><code>[1].toString() === &#39;1&#39;</code></li><li><code>{}.toString() === &#39;[object object]&#39;</code></li><li><code>NaN</code> !== <code>NaN</code> 、<code>+undefined 为 NaN</code></li></ul><h3 id="_13-类型判断" tabindex="-1"><a class="header-anchor" href="#_13-类型判断" aria-hidden="true">#</a> 13. 类型判断</h3><p>判断 Target 的类型，单单用 typeof 并无法完全满足，这其实并不是 bug，本质原因是 JS 的万物皆对象的理论。因此要真正完美判断时，我们需要区分对待:</p><ul><li>基本类型(<code>null</code>): 使用 <code>String(null)</code></li><li>基本类型(<code>string / number / boolean / undefined</code>) + <code>function</code>: 直接使用 <code>typeof</code>即可</li><li>其余引用类型(<code>Array / Date / RegExp Error</code>): 调用<code>toString</code>后根据<code>[object XXX]</code>进行判断</li></ul><p>很稳的判断封装:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let class2type = {}
&#39;Array Date RegExp Object Error&#39;.split(&#39; &#39;).forEach(e =&gt; class2type[ &#39;[object &#39; + e + &#39;]&#39; ] = e.toLowerCase()) 

function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === &#39;object&#39; ? class2type[ Object.prototype.toString.call(obj) ] || &#39;object&#39; : typeof obj
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-模块化" tabindex="-1"><a class="header-anchor" href="#_14-模块化" aria-hidden="true">#</a> 14. 模块化</h3><p>模块化开发在现代开发中已是必不可少的一部分，它大大提高了项目的可维护、可拓展和可协作性。通常，我们 <strong>在浏览器中使用 ES6 的模块化支持，在 Node 中使用 commonjs 的模块化支持。</strong></p><ul><li><p>分类:</p><ul><li>es6: <code>import / export</code></li><li>commonjs: <code>require / module.exports / exports</code></li><li>amd: <code>require / defined</code></li></ul></li><li><p><code>require</code>与<code>import</code>的区别</p><ul><li><code>require</code>支持 <strong>动态导入</strong>，<code>import</code>不支持，正在提案 (babel 下可支持)</li><li><code>require</code>是 <strong>同步</strong> 导入，<code>import</code>属于 <strong>异步</strong> 导入</li><li><code>require</code>是 <strong>值拷贝</strong>，导出值变化不会影响导入值；<code>import</code>指向 <strong>内存地址</strong>，导入值会随导出值而变化</li></ul></li></ul><h3 id="_15-防抖与节流" tabindex="-1"><a class="header-anchor" href="#_15-防抖与节流" aria-hidden="true">#</a> 15. 防抖与节流</h3><p>防抖与节流函数是一种最常用的 <strong>高频触发优化方式</strong>，能对性能有较大的帮助。</p><ul><li><strong>防抖 (debounce)</strong>: 将多次高频操作优化为只在最后一次执行，通常使用的场景是：用户输入，只需再输入完成后做一次输入校验即可。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function debounce(fn, wait, immediate) {
    let timer = null

    return function() {
        let args = arguments
        let context = this

        if (immediate &amp;&amp; !timer) {
            fn.apply(context, args)
        }

        if (timer) clearTimeout(timer)
        timer = setTimeout(() =&gt; {
            fn.apply(context, args)
        }, wait)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>节流(throttle)</strong>: 每隔一段时间后执行一次，也就是降低频率，将高频操作优化成低频操作，通常使用场景: 滚动条事件 或者 resize 事件，通常每隔 100~500 ms执行一次即可。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function throttle(fn, wait, immediate) {
    let timer = null
    let callNow = immediate
    
    return function() {
        let context = this,
            args = arguments

        if (callNow) {
            fn.apply(context, args)
            callNow = false
        }

        if (!timer) {
            timer = setTimeout(() =&gt; {
                fn.apply(context, args)
                timer = null
            }, wait)
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-函数执行改变this" tabindex="-1"><a class="header-anchor" href="#_16-函数执行改变this" aria-hidden="true">#</a> 16. 函数执行改变this</h3><p>由于 JS 的设计原理: 在函数中，可以引用运行环境中的变量。因此就需要一个机制来让我们可以在函数体内部获取当前的运行环境，这便是<code>this</code>。</p><p>因此要明白 <code>this</code> 指向，其实就是要搞清楚 函数的运行环境，说人话就是，谁调用了函数。例如:</p><ul><li><code>obj.fn()</code>，便是 <code>obj</code> 调用了函数，既函数中的 <code>this === obj</code></li><li><code>fn()</code>，这里可以看成 <code>window.fn()</code>，因此 <code>this === window</code></li></ul><p>但这种机制并不完全能满足我们的业务需求，因此提供了三种方式可以手动修改 <code>this</code> 的指向:</p><ul><li><code>call: fn.call(target, 1, 2)</code></li><li><code>apply: fn.apply(target, [1, 2])</code></li><li><code>bind: fn.bind(target)(1,2)</code></li></ul><h3 id="_17-es6-es7" tabindex="-1"><a class="header-anchor" href="#_17-es6-es7" aria-hidden="true">#</a> 17. ES6/ES7</h3><p>由于 Babel 的强大和普及，现在 ES6/ES7 基本上已经是现代化开发的必备了。通过新的语法糖，能让代码整体更为简洁和易读。</p><ul><li><p>声明</p><ul><li><code>let / const</code>: 块级作用域、不存在变量提升、暂时性死区、不允许重复声明</li><li><code>const</code>: 声明常量，无法修改</li></ul></li><li><p>解构赋值</p></li><li><p><code>class / extend</code>: 类声明与继承</p></li><li><p><code>Set / Map</code>: 新的数据结构</p></li><li><p>异步解决方案:</p><ul><li><p><code>Promise</code>的使用与实现</p></li><li><p><code>generator</code>:</p><ul><li><code>yield</code>: 暂停代码</li><li><code>next()</code>: 继续执行代码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* helloWorld() {
  yield &#39;hello&#39;;
  yield &#39;world&#39;;
  return &#39;ending&#39;;
}

const generator = helloWorld();

generator.next()  // { value: &#39;hello&#39;, done: false }

generator.next()  // { value: &#39;world&#39;, done: false }

generator.next()  // { value: &#39;ending&#39;, done: true }

generator.next()  // { value: undefined, done: true }


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>await / async</code>: 是<code>generator</code>的语法糖， babel中是基于<code>promise</code>实现。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function getUserByAsync(){
   let user = await fetchUser();
   return user;
}

const user = await getUserByAsync()
console.log(user)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="_18-ast" tabindex="-1"><a class="header-anchor" href="#_18-ast" aria-hidden="true">#</a> 18. AST</h3><p><strong>抽象语法树 (Abstract Syntax Tree)</strong>，是将代码逐字母解析成 <strong>树状对象</strong> 的形式。这是语言之间的转换、代码语法检查，代码风格检查，代码格式化，代码高亮，代码错误提示，代码自动补全等等的基础。例如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function square(n){
 return n * n
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过解析转化成的<code>AST</code>如下图:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d95910dd187~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h3 id="_19-babel编译原理" tabindex="-1"><a class="header-anchor" href="#_19-babel编译原理" aria-hidden="true">#</a> 19. babel编译原理</h3><ul><li>babylon 将 ES6/ES7 代码解析成 AST</li><li>babel-traverse 对 AST 进行遍历转译，得到新的 AST</li><li>新 AST 通过 babel-generator 转换成 ES5</li></ul><h3 id="_20-函数柯里化" tabindex="-1"><a class="header-anchor" href="#_20-函数柯里化" aria-hidden="true">#</a> 20. 函数柯里化</h3><p>在一个函数中，首先填充几个参数，然后再返回一个新的函数的技术，称为函数的柯里化。通常可用于在不侵入函数的前提下，为函数 <strong>预置通用参数</strong>，供多次重复调用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const add = function add(x) {
 return function (y) {
  return x + y
 }
}

const add1 = add(1)

add1(2) === 3
add1(20) === 21

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-数组-array" tabindex="-1"><a class="header-anchor" href="#_21-数组-array" aria-hidden="true">#</a> 21. 数组(array)</h3><ul><li><p><code>map</code>: 遍历数组，返回回调返回值组成的新数组</p></li><li><p><code>forEach</code>: 无法<code>break</code>，可以用<code>try/catch</code>中<code>throw new Error</code>来停止</p></li><li><p><code>filter</code>: 过滤</p></li><li><p><code>some</code>: 有一项返回<code>true</code>，则整体为<code>true</code></p></li><li><p><code>every</code>: 有一项返回<code>false</code>，则整体为<code>false</code></p></li><li><p><code>join</code>: 通过指定连接符生成字符串</p></li><li><p><code>push / pop</code>: 末尾推入和弹出，改变原数组， <code>push</code> 返回数组长度, <code>pop</code> 返回原数组最后一项；</p></li><li><p><code>unshift / shift</code>: 头部推入和弹出，改变原数组，<code>unshift</code> 返回数组长度，<code>shift</code> 返回原数组第一项 ；</p></li><li><p><code>sort(fn) / reverse</code>: 排序与反转，改变原数组</p></li><li><p><code>concat</code>: 连接数组，不影响原数组， 浅拷贝</p></li><li><p><code>slice(start, end)</code>: 返回截断后的新数组，不改变原数组</p></li><li><p><code>splice(start, number, value...)</code>: 返回删除元素组成的数组，value 为插入项，改变原数组</p></li><li><p><code>indexOf / lastIndexOf(value, fromIndex)</code>: 查找数组项，返回对应的下标</p></li><li><p><code>reduce / reduceRight(fn(prev, cur)， defaultPrev)</code>: 两两执行，prev 为上次化简函数的<code>return</code>值，cur 为当前值</p><ul><li>当传入 <code>defaultPrev</code> 时，从第一项开始；</li><li>当未传入时，则为第二项</li></ul></li><li><p>数组乱序：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    return Math.random() - 0.5;
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组拆解: flat: [1,[2,3]] --&gt; [1, 2, 3]</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.flat = function() {
    return this.toString().split(&#39;,&#39;).map(item =&gt; +item )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h2><h3 id="_1-跨标签页通讯" tabindex="-1"><a class="header-anchor" href="#_1-跨标签页通讯" aria-hidden="true">#</a> 1. 跨标签页通讯</h3><p>不同标签页间的通讯，本质原理就是去运用一些可以 <strong>共享的中间介质</strong>，因此比较常用的有以下方法:</p><ul><li><p>通过父页面<code>window.open()</code>和子页面<code>postMessage</code></p><ul><li>异步下，通过 <code>window.open(&#39;about: blank&#39;)</code> 和 <code>tab.location.href = &#39;*&#39;</code></li></ul></li><li><p>设置同域下共享的<code>localStorage</code>与监听<code>window.onstorage</code></p><ul><li>重复写入相同的值无法触发</li><li>会受到浏览器隐身模式等的限制</li></ul></li><li><p>设置共享<code>cookie</code>与不断轮询脏检查(<code>setInterval</code>)</p></li><li><p>借助服务端或者中间层实现</p></li></ul><h3 id="_2-浏览器架构" tabindex="-1"><a class="header-anchor" href="#_2-浏览器架构" aria-hidden="true">#</a> 2. 浏览器架构</h3><ul><li>用户界面</li><li>主进程</li><li>内核 <ul><li>渲染引擎</li><li>JS 引擎 <ul><li>执行栈</li></ul></li><li>事件触发线程 <ul><li>消息队列 <ul><li>微任务</li><li>宏任务</li></ul></li></ul></li><li>网络异步线程</li><li>定时器线程</li></ul></li></ul><h3 id="_3-浏览器下事件循环-event-loop" tabindex="-1"><a class="header-anchor" href="#_3-浏览器下事件循环-event-loop" aria-hidden="true">#</a> 3. 浏览器下事件循环(Event Loop)</h3><p>事件循环是指: 执行一个宏任务，然后执行清空微任务列表，循环再执行宏任务，再清微任务列表</p><ul><li>微任务 <code>microtask(jobs)</code>: <code>promise / ajax / Object.observe(该方法已废弃)</code></li><li>宏任务 <code>macrotask(task)</code>: <code>setTimout / script / IO / UI Rendering</code></li></ul><h3 id="_4-从输入-url-到展示的过程" tabindex="-1"><a class="header-anchor" href="#_4-从输入-url-到展示的过程" aria-hidden="true">#</a> 4. 从输入 url 到展示的过程</h3><ul><li>DNS 解析</li><li>TCP 三次握手</li><li>发送请求，分析 url，设置请求报文(头，主体)</li><li>服务器返回请求的文件 (html)</li><li>浏览器渲染 <ul><li>HTML parser --&gt; DOM Tree <ul><li>标记化算法，进行元素状态的标记</li><li>dom 树构建</li></ul></li><li>CSS parser --&gt; Style Tree <ul><li>解析 css 代码，生成样式树</li></ul></li><li>attachment --&gt; Render Tree <ul><li>结合 dom树 与 style树，生成渲染树</li></ul></li><li>layout: 布局</li><li>GPU painting: 像素绘制页面</li></ul></li></ul><h3 id="_5-重绘与回流" tabindex="-1"><a class="header-anchor" href="#_5-重绘与回流" aria-hidden="true">#</a> 5. 重绘与回流</h3><p>当元素的样式发生变化时，浏览器需要触发更新，重新绘制元素。这个过程中，有两种类型的操作，即重绘与回流。</p><ul><li><p><strong>重绘(repaint)</strong>: 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 <strong>损耗较少</strong></p></li><li><p><strong>回流(reflow)</strong>: 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:</p><ul><li>页面初次渲染</li><li>浏览器窗口大小改变</li><li>元素尺寸、位置、内容发生改变</li><li>元素字体大小变化</li><li>添加或者删除可见的 dom 元素</li><li>激活 CSS 伪类（例如：:hover）</li><li>查询某些属性或调用某些方法 <ul><li>clientWidth、clientHeight、clientTop、clientLeft</li><li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li><li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li><li>getComputedStyle()</li><li>getBoundingClientRect()</li><li>scrollTo()</li></ul></li></ul></li></ul><p><strong>回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。</strong></p><h4 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h4><ul><li><p>css</p><ul><li>避免使用<code>table</code>布局</li><li>将动画效果应用到<code>position</code>属性为<code>absolute</code>或<code>fixed</code>的元素上</li></ul></li><li><p>javascript</p><ul><li>避免频繁操作样式，可汇总后统一 <strong>一次修改</strong></li><li>尽量使用<code>class</code>进行样式修改</li><li>减少<code>dom</code>的增删次数，可使用 <strong>字符串</strong> 或者 <code>documentFragment</code> 一次性插入</li><li>极限优化时，修改样式可将其<code>display: none</code>后修改</li><li>避免多次触发上面提到的那些会触发回流的方法，可以的话尽量用 <strong>变量存住</strong></li></ul></li></ul><h3 id="_6-存储" tabindex="-1"><a class="header-anchor" href="#_6-存储" aria-hidden="true">#</a> 6. 存储</h3><p>我们经常需要对业务中的一些数据进行存储，通常可以分为 短暂性存储 和 持久性储存。</p><ul><li><p>短暂性的时候，我们只需要将数据存在内存中，只在运行时可用</p></li><li><p>持久性存储，可以分为 浏览器端 与 服务器端</p><ul><li>浏览器: <ul><li><code>cookie</code>: 通常用于存储用户身份，登录状态等 <ul><li>http 中自动携带， 体积上限为 4K， 可自行设置过期时间</li></ul></li><li><code>localStorage / sessionStorage</code>: 长久储存/窗口关闭删除， 体积限制为 4~5M</li><li><code>indexDB</code></li></ul></li><li>服务器: <ul><li>分布式缓存 redis</li><li>数据库</li></ul></li></ul></li></ul><h3 id="_7-web-worker" tabindex="-1"><a class="header-anchor" href="#_7-web-worker" aria-hidden="true">#</a> 7. Web Worker</h3><p>现代浏览器为<code>JavaScript</code>创造的 <strong>多线程环境</strong>。可以新建并将部分任务分配到<code>worker</code>线程并行运行，两个线程可 <strong>独立运行，互不干扰</strong>，可通过自带的 <strong>消息机制</strong> 相互通信。</p><p><strong>基本用法:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 创建 worker
const worker = new Worker(&#39;work.js&#39;);

// 向 worker 线程推送消息
worker.postMessage(&#39;Hello World&#39;);

// 监听 worker 线程发送过来的消息
worker.onmessage = function (event) {
  console.log(&#39;Received message &#39; + event.data);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>限制:</strong></p><ul><li>同源限制</li><li>无法使用 <code>document</code> / <code>window</code> / <code>alert</code> / <code>confirm</code></li><li>无法加载本地资源</li></ul><h3 id="_8-v8垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#_8-v8垃圾回收机制" aria-hidden="true">#</a> 8. V8垃圾回收机制</h3><p>垃圾回收: 将内存中不再使用的数据进行清理，释放出内存空间。V8 将内存分成 <strong>新生代空间</strong> 和 <strong>老生代空间</strong>。</p><ul><li><strong>新生代空间</strong>: 用于存活较短的对象 <ul><li>又分成两个空间: from 空间 与 to 空间</li><li>Scavenge GC算法: 当 from 空间被占满时，启动 GC 算法 <ul><li>存活的对象从 from space 转移到 to space</li><li>清空 from space</li><li>from space 与 to space 互换</li><li>完成一次新生代GC</li></ul></li></ul></li><li><strong>老生代空间</strong>: 用于存活时间较长的对象 <ul><li>从 新生代空间 转移到 老生代空间 的条件 <ul><li>经历过一次以上 Scavenge GC 的对象</li><li>当 to space 体积超过25%</li></ul></li><li><strong>标记清除算法</strong>: 标记存活的对象，未被标记的则被释放 <ul><li>增量标记: 小模块标记，在代码执行间隙执，GC 会影响性能</li><li>并发标记(最新技术): 不阻塞 js 执行</li></ul></li><li><strong>压缩算法</strong>: 将内存中清除后导致的碎片化对象往内存堆的一端移动，解决 <strong>内存的碎片化</strong></li></ul></li></ul><h3 id="_9-内存泄露" tabindex="-1"><a class="header-anchor" href="#_9-内存泄露" aria-hidden="true">#</a> 9. 内存泄露</h3><ul><li>意外的<strong>全局变量</strong>: 无法被回收</li><li><strong>定时器</strong>: 未被正确关闭，导致所引用的外部变量无法被释放</li><li><strong>事件监听</strong>: 没有正确销毁 (低版本浏览器可能出现)</li><li><strong>闭包</strong>: 会导致父级中的变量无法被释放</li><li><strong>dom 引用</strong>: dom 元素被删除时，内存中的引用未被正确清空</li></ul><p>可用 chrome 中的 timeline 进行内存标记，可视化查看内存的变化情况，找出异常点。</p><h2 id="服务端与网络" tabindex="-1"><a class="header-anchor" href="#服务端与网络" aria-hidden="true">#</a> 服务端与网络</h2><h3 id="_1-http-https-协议" tabindex="-1"><a class="header-anchor" href="#_1-http-https-协议" aria-hidden="true">#</a> 1. http/https 协议</h3><ul><li><p>1.0 协议缺陷:</p><ul><li>无法复用链接，完成即断开，<strong>重新慢启动和 TCP 3次握手</strong></li><li>head of line blocking: <strong>线头阻塞</strong>，导致请求之间互相影响</li></ul></li><li><p>1.1 改进:</p><ul><li><strong>长连接</strong>(默认 keep-alive)，复用</li><li>host 字段指定对应的虚拟站点</li><li>新增功能: <ul><li>断点续传</li><li>身份认证</li><li>状态管理</li><li>cache 缓存 <ul><li>Cache-Control</li><li>Expires</li><li>Last-Modified</li><li>Etag</li></ul></li></ul></li></ul></li><li><p>2.0:</p><ul><li>多路复用</li><li>二进制分帧层: 应用层和传输层之间</li><li>首部压缩</li><li>服务端推送</li></ul></li><li><p>https: 较为安全的网络传输协议</p><ul><li>证书(公钥)</li><li>SSL 加密</li><li>端口 443</li></ul></li><li><p>TCP:</p><ul><li>三次握手</li><li>四次挥手</li><li>滑动窗口: 流量控制</li><li>拥塞处理 <ul><li>慢开始</li><li>拥塞避免</li><li>快速重传</li><li>快速恢复</li></ul></li></ul></li><li><p>缓存策略: 可分为 <strong>强缓存</strong> 和 <strong>协商缓存</strong></p><ul><li><p>Cache-Control/Expires: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，<strong>Cache-Control的 max-age 优先级高于 Expires</strong></p></li><li><p>当缓存已经过期时，使用协商缓存</p><ul><li>唯一标识方案: Etag(response 携带) &amp; If-None-Match(request携带，上一次返回的 Etag): 服务器判断资源是否被修改，</li><li>最后一次修改时间: Last-Modified(response) &amp; If-Modified-Since (request，上一次返回的Last-Modified) <ul><li>如果一致，则直接返回 304 通知浏览器使用缓存</li><li>如不一致，则服务端返回新的资源</li></ul></li></ul></li><li><p>Last-Modified 缺点：</p><ul><li>周期性修改，但内容未变时，会导致缓存失效</li><li>最小粒度只到 s， s 以内的改动无法检测到</li></ul></li><li><p>Etag 的优先级高于 Last-Modified</p></li></ul></li></ul><h3 id="_2-常见状态码" tabindex="-1"><a class="header-anchor" href="#_2-常见状态码" aria-hidden="true">#</a> 2. 常见状态码</h3><ul><li>1xx: 接受，继续处理</li><li>200: 成功，并返回数据</li><li>201: 已创建</li><li>202: 已接受</li><li>203: 成为，但未授权</li><li>204: 成功，无内容</li><li>205: 成功，重置内容</li><li>206: 成功，部分内容</li><li>301: 永久移动，重定向</li><li>302: 临时移动，可使用原有URI</li><li>304: 资源未修改，可使用缓存</li><li>305: 需代理访问</li><li>400: 请求语法错误</li><li>401: 要求身份认证</li><li>403: 拒绝请求</li><li>404: 资源不存在</li><li>500: 服务器错误</li></ul><h3 id="_3-get-post" tabindex="-1"><a class="header-anchor" href="#_3-get-post" aria-hidden="true">#</a> 3. get / post</h3><ul><li>get: 缓存、请求长度受限、会被历史保存记录 <ul><li>无副作用(不修改资源)，幂等(请求次数与资源无关)的场景</li></ul></li><li>post: 安全、大数据、更多编码类型</li></ul><p>两者详细对比如下图:</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d9050b9d08a~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><h3 id="_4-websocket" tabindex="-1"><a class="header-anchor" href="#_4-websocket" aria-hidden="true">#</a> 4. Websocket</h3><p>Websocket 是一个 <strong>持久化的协议</strong>， 基于 http ， 服务端可以 <strong>主动 push</strong></p><ul><li><p>兼容：</p><ul><li>FLASH Socket</li><li>长轮询： 定时发送 ajax</li><li>long poll： 发送 --&gt; 有消息时再 response</li></ul></li><li><p><code>new WebSocket(url)</code></p></li><li><p><code>ws.onerror = fn</code></p></li><li><p><code>ws.onclose = fn</code></p></li><li><p><code>ws.onopen = fn</code></p></li><li><p><code>ws.onmessage = fn</code></p></li><li><p><code>ws.send()</code></p></li></ul><h3 id="_5-tcp三次握手" tabindex="-1"><a class="header-anchor" href="#_5-tcp三次握手" aria-hidden="true">#</a> 5. TCP三次握手</h3><p>建立连接前，客户端和服务端需要通过握手来确认对方:</p><ul><li>客户端发送 syn(同步序列编号) 请求，进入 syn_send 状态，等待确认</li><li>服务端接收并确认 syn 包后发送 syn+ack 包，进入 syn_recv 状态</li><li>客户端接收 syn+ack 包后，发送 ack 包，双方进入 established 状态</li></ul><h3 id="_6-tcp四次挥手" tabindex="-1"><a class="header-anchor" href="#_6-tcp四次挥手" aria-hidden="true">#</a> 6. TCP四次挥手</h3><ul><li>客户端 -- FIN --&gt; 服务端， FIN—WAIT</li><li>服务端 -- ACK --&gt; 客户端， CLOSE-WAIT</li><li>服务端 -- ACK,FIN --&gt; 客户端， LAST-ACK</li><li>客户端 -- ACK --&gt; 服务端，CLOSED</li></ul><h3 id="_7-node-的-event-loop-6个阶段" tabindex="-1"><a class="header-anchor" href="#_7-node-的-event-loop-6个阶段" aria-hidden="true">#</a> 7. Node 的 Event Loop: 6个阶段</h3><ul><li>timer 阶段: 执行到期的<code>setTimeout / setInterval</code>队列回调</li><li>I/O 阶段: 执行上轮循环残流的<code>callback</code></li><li>idle, prepare</li><li>poll: 等待回调 <ul><li><ol><li>执行回调</li></ol></li><li><ol start="2"><li>执行定时器</li></ol><ul><li>如有到期的<code>setTimeout / setInterval</code>， 则返回 timer 阶段</li><li>如有<code>setImmediate</code>，则前往 check 阶段</li></ul></li></ul></li><li>check <ul><li>执行<code>setImmediate</code></li></ul></li><li>close callbacks</li></ul><h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3><ul><li>JSONP: 利用<code>&lt;script&gt;</code>标签不受跨域限制的特点，缺点是只能支持 get 请求</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function jsonp(url, jsonpCallback, success) {
  const script = document.createElement(&#39;script&#39;)
  script.src = url
  script.async = true
  script.type = &#39;text/javascript&#39;
  window[jsonpCallback] = function(data) {
    success &amp;&amp; success(data)
  }
  document.body.appendChild(script)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置 CORS: Access-Control-Allow-Origin：*</li><li>postMessage</li></ul><h3 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h3><ul><li>XSS攻击: 注入恶意代码 <ul><li>cookie 设置 httpOnly</li><li>转义页面上的输入内容和输出内容</li></ul></li><li>CSRF: 跨站请求伪造，防护: <ul><li>get 不修改数据</li><li>不被第三方网站访问到用户的 cookie</li><li>设置白名单，不被第三方网站请求</li><li>请求校验</li></ul></li></ul><h2 id="框架-vue" tabindex="-1"><a class="header-anchor" href="#框架-vue" aria-hidden="true">#</a> 框架：Vue</h2><h3 id="_1-nexttick" tabindex="-1"><a class="header-anchor" href="#_1-nexttick" aria-hidden="true">#</a> 1. nextTick</h3><p>在下次<code>dom</code>更新循环结束之后执行延迟回调，可用于获取更新后的<code>dom</code>状态</p><ul><li><p>新版本中默认是<code>microtasks</code>, <code>v-on</code>中会使用<code>macrotasks</code></p></li><li><p><code>macrotasks</code>任务的实现:</p><ul><li><code>setImmediate / MessageChannel / setTimeout</code></li></ul></li></ul><h3 id="_2-生命周期" tabindex="-1"><a class="header-anchor" href="#_2-生命周期" aria-hidden="true">#</a> 2. 生命周期</h3><ul><li><p><code>_init_</code></p><ul><li><code>initLifecycle/Event</code>，往<code>vm</code>上挂载各种属性</li><li><code>callHook: beforeCreated</code>: 实例刚创建</li><li><code>initInjection/initState</code>: 初始化注入和 data 响应性</li><li><code>created</code>: 创建完成，属性已经绑定， 但还未生成真实<code>dom</code></li><li>进行元素的挂载： <code>$el / vm.$mount()</code></li><li>是否有<code>template</code>: 解析成<code>render function</code><ul><li><code>*.vue</code>文件: <code>vue-loader</code>会将<code>&lt;template&gt;</code>编译成<code>render function</code></li></ul></li><li><code>beforeMount</code>: 模板编译/挂载之前</li><li>执行<code>render function</code>，生成真实的<code>dom</code>，并替换到<code>dom tree</code>中</li><li><code>mounted</code>: 组件已挂载</li></ul></li><li><p><code>update</code>:</p><ul><li>执行<code>diff</code>算法，比对改变是否需要触发UI更新</li><li><code>flushScheduleQueue</code><ul><li><code>watcher.before</code>: 触发<code>beforeUpdate</code>钩子 - <code>watcher.run()</code>: 执行<code>watcher</code>中的 <code>notify</code>，通知所有依赖项更新UI</li></ul></li><li>触发<code>updated</code>钩子: 组件已更新</li></ul></li><li><p><code>actived / deactivated(keep-alive)</code>: 不销毁，缓存，组件激活与失活</p></li><li><p><code>destroy</code>:</p><ul><li><code>beforeDestroy</code>: 销毁开始</li><li>销毁自身且递归销毁子组件以及事件监听 <ul><li><code>remove()</code>: 删除节点</li><li><code>watcher.teardown()</code>: 清空依赖</li><li><code>vm.$off()</code>: 解绑监听</li></ul></li><li><code>destroyed</code>: 完成后触发钩子</li></ul></li></ul><p>上面是<code>vue</code>的声明周期的简单梳理，接下来我们直接以代码的形式来完成<code>vue</code>的初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
new Vue({})

// 初始化Vue实例
function _init() {
  // 挂载属性
    initLifeCycle(vm) 
    // 初始化事件系统，钩子函数等
    initEvent(vm) 
    // 编译slot、vnode
    initRender(vm) 
    // 触发钩子
    callHook(vm, &#39;beforeCreate&#39;)
    // 添加inject功能
    initInjection(vm)
    // 完成数据响应性 props/data/watch/computed/methods
    initState(vm)
    // 添加 provide 功能
    initProvide(vm)
    // 触发钩子
    callHook(vm, &#39;created&#39;)
  
  // 挂载节点
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
}

// 挂载节点实现
function mountComponent(vm) {
  // 获取 render function
    if (!this.options.render) {
        // template to render
        // Vue.compile = compileToFunctions
        let { render } = compileToFunctions() 
        this.options.render = render
    }
    // 触发钩子
    callHook(&#39;beforeMounte&#39;)
    // 初始化观察者
    // render 渲染 vdom， 
    vdom = vm.render()
    // update: 根据 diff 出的 patchs 挂载成真实的 dom 
    vm._update(vdom)
    // 触发钩子  
    callHook(vm, &#39;mounted&#39;)
}

// 更新节点实现
funtion queueWatcher(watcher) {
 nextTick(flushScheduleQueue)
}

// 清空队列
function flushScheduleQueue() {
  // 遍历队列中所有修改
    for(){
     // beforeUpdate
        watcher.before()
         
        // 依赖局部更新节点
        watcher.update() 
        callHook(&#39;updated&#39;)
    }
}

// 销毁实例实现
Vue.prototype.$destory = function() {
  // 触发钩子
    callHook(vm, &#39;beforeDestory&#39;)
    // 自身及子节点
    remove() 
    // 删除依赖
    watcher.teardown() 
    // 删除监听
    vm.$off() 
    // 触发钩子
    callHook(vm, &#39;destoryed&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数据响应-数据劫持" tabindex="-1"><a class="header-anchor" href="#_3-数据响应-数据劫持" aria-hidden="true">#</a> 3. 数据响应(数据劫持)</h3><p>看完生命周期后，里面的<code>watcher</code>等内容其实是数据响应中的一部分。数据响应的实现由两部分构成: <strong>观察者( watcher )</strong> 和 <strong>依赖收集器( Dep )</strong>，其核心是 <code>defineProperty</code>这个方法，它可以 <strong>重写属性的 get 与 set</strong> 方法，从而完成监听数据的改变。</p><ul><li>Observe (观察者)观察 props 与 state <ul><li>遍历 props 与 state，对每个属性创建独立的监听器( watcher )</li></ul></li><li>使用 <code>defineProperty</code> 重写每个属性的 get/set(<code>defineReactive</code>） <ul><li><code>get</code>: 收集依赖 <ul><li><code>Dep.depend()</code><ul><li><code>watcher.addDep()</code></li></ul></li></ul></li><li><code>set</code>: 派发更新 <ul><li><code>Dep.notify()</code></li><li><code>watcher.update()</code></li><li><code>queenWatcher()</code></li><li><code>nextTick</code></li><li><code>flushScheduleQueue</code></li><li><code>watcher.run()</code></li><li><code>updateComponent()</code></li></ul></li></ul></li></ul><p>大家可以先看下面的数据相应的代码实现后，理解后就比较容易看懂上面的简单脉络了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let data = {a: 1}
// 数据响应性
observe(data)

// 初始化观察者
new Watcher(data, &#39;name&#39;, updateComponent)
data.a = 2

// 简单表示用于数据更新后的操作
function updateComponent() {
    vm._update() // patchs
}

// 监视对象
function observe(obj) {
  // 遍历对象，使用 get/set 重新定义对象的每个属性值
    Object.keys(obj).map(key =&gt; {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, k, v) {
    // 递归子属性
    if (type(v) == &#39;object&#39;) observe(v)
    
    // 新建依赖收集器
    let dep = new Dep()
    // 定义get/set
    Object.defineProperty(obj, k, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
           // 当有获取该属性时，证明依赖于该对象，因此被添加进收集器中
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return v
        },
        // 重新设置值时，触发收集器的通知机制
        set: function reactiveSetter(nV) {
            v = nV
            dep.nofify()
        },
    })
}

// 依赖收集器
class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.map(sub =&gt; {
            sub.update()
        })
    }
}

Dep.target = null

// 观察者
class Watcher {
    constructor(obj, key, cb) {
        Dep.target = this
        this.cb = cb
        this.obj = obj
        this.key = key
        this.value = obj[key]
        Dep.target = null
    }
    addDep(Dep) {
        Dep.addSub(this)
    }
    update() {
        this.value = this.obj[this.key]
        this.cb(this.value)
    }
    before() {
        callHook(&#39;beforeUpdate&#39;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-virtual-dom-原理实现" tabindex="-1"><a class="header-anchor" href="#_4-virtual-dom-原理实现" aria-hidden="true">#</a> 4. virtual dom 原理实现</h3><ul><li><p>创建 dom 树</p></li><li><p>树的<code>diff</code>，同层对比，输出<code>patchs(listDiff/diffChildren/diffProps)</code></p><ul><li>没有新的节点，返回</li><li>新的节点<code>tagName</code>与<code>key</code>不变， 对比<code>props</code>，继续递归遍历子树 <ul><li>对比属性(对比新旧属性列表): <ul><li>旧属性是否存在与新属性列表中</li><li>都存在的是否有变化</li><li>是否出现旧列表中没有的新属性</li></ul></li></ul></li><li><code>tagName</code>和<code>key</code>值变化了，则直接替换成新节点</li></ul></li><li><p>渲染差异</p><ul><li>遍历<code>patchs</code>， 把需要更改的节点取出来</li><li>局部更新<code>dom</code></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// diff算法的实现
function diff(oldTree, newTree) {
  // 差异收集
    let pathchs = {}
    dfs(oldTree, newTree, 0, pathchs)
    return pathchs
}

function dfs(oldNode, newNode, index, pathchs) {
    let curPathchs = []
    if (newNode) {
        // 当新旧节点的 tagName 和 key 值完全一致时
        if (oldNode.tagName === newNode.tagName &amp;&amp; oldNode.key === newNode.key) {
           // 继续比对属性差异
            let props = diffProps(oldNode.props, newNode.props)
            curPathchs.push({ type: &#39;changeProps&#39;, props })
            // 递归进入下一层级的比较
            diffChildrens(oldNode.children, newNode.children, index, pathchs)
        } else {
           // 当 tagName 或者 key 修改了后，表示已经是全新节点，无需再比
            curPathchs.push({ type: &#39;replaceNode&#39;, node: newNode })
        }
    }

  // 构建出整颗差异树
    if (curPathchs.length) {
      if(pathchs[index]){
       pathchs[index] = pathchs[index].concat(curPathchs)
      } else {
       pathchs[index] = curPathchs
      }
    }
}

// 属性对比实现
function diffProps(oldProps, newProps) {
    let propsPathchs = []
    // 遍历新旧属性列表
    // 查找删除项
    // 查找修改项
    // 查找新增项
    forin(olaProps, (k, v) =&gt; {
        if (!newProps.hasOwnProperty(k)) {
            propsPathchs.push({ type: &#39;remove&#39;, prop: k })
        } else {
            if (v !== newProps[k]) {
                propsPathchs.push({ type: &#39;change&#39;, prop: k , value: newProps[k] })
            }
        }
    })
    forin(newProps, (k, v) =&gt; {
        if (!oldProps.hasOwnProperty(k)) {
            propsPathchs.push({ type: &#39;add&#39;, prop: k, value: v })
        }
    })
    return propsPathchs
}

// 对比子级差异
function diffChildrens(oldChild, newChild, index, pathchs) {
  // 标记子级的删除/新增/移动
    let { change, list } = diffList(oldChild, newChild, index, pathchs)
    if (change.length) {
        if (pathchs[index]) {
            pathchs[index] = pathchs[index].concat(change)
        } else {
            pathchs[index] = change
        }
    }

  // 根据 key 获取原本匹配的节点，进一步递归从头开始对比
    oldChild.map((item, i) =&gt; {
        let keyIndex = list.indexOf(item.key)
        if (keyIndex) {
            let node = newChild[keyIndex]
            // 进一步递归对比
            dfs(item, node, index, pathchs)
        }
    })
}

// 列表对比，主要也是根据 key 值查找匹配项
// 对比出新旧列表的新增/删除/移动
function diffList(oldList, newList, index, pathchs) {
    let change = []
    let list = []
    const newKeys = getKey(newList)
    oldList.map(v =&gt; {
        if (newKeys.indexOf(v.key) &gt; -1) {
            list.push(v.key)
        } else {
            list.push(null)
        }
    })

    // 标记删除
    for (let i = list.length - 1; i&gt;= 0; i--) {
        if (!list[i]) {
            list.splice(i, 1)
            change.push({ type: &#39;remove&#39;, index: i })
        }
    }

    // 标记新增和移动
    newList.map((item, i) =&gt; {
        const key = item.key
        const index = list.indexOf(key)
        if (index === -1 || key == null) {
            // 新增
            change.push({ type: &#39;add&#39;, node: item, index: i })
            list.splice(i, 0, key)
        } else {
            // 移动
            if (index !== i) {
                change.push({
                    type: &#39;move&#39;,
                    form: index,
                    to: i,
                })
                move(list, index, i)
            }
        }
    })

    return { change, list }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-proxy-相比于-defineproperty-的优势" tabindex="-1"><a class="header-anchor" href="#_5-proxy-相比于-defineproperty-的优势" aria-hidden="true">#</a> 5. Proxy 相比于 defineProperty 的优势</h3><ul><li>数组变化也能监听到</li><li>不需要深度遍历监听</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let data = { a: 1 }
let reactiveData = new Proxy(data, {
 get: function(target, name){
  // ...
 },
 // ...
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-vue-router" tabindex="-1"><a class="header-anchor" href="#_6-vue-router" aria-hidden="true">#</a> 6. vue-router</h3><ul><li><code>mode</code><ul><li><code>hash</code></li><li><code>history</code></li></ul></li><li>跳转 <ul><li><code>this.$router.push()</code></li><li><code>&lt;router-link to=&quot;&quot;&gt;&lt;/router-link&gt;</code></li></ul></li><li>占位 <ul><li><code>&lt;router-view&gt;&lt;/router-view&gt;</code></li></ul></li></ul><h3 id="_7-vuex" tabindex="-1"><a class="header-anchor" href="#_7-vuex" aria-hidden="true">#</a> 7. vuex</h3><ul><li><code>state</code>: 状态中心</li><li><code>mutations</code>: 更改状态</li><li><code>actions</code>: 异步更改状态</li><li><code>getters</code>: 获取状态</li><li><code>modules</code>: 将<code>state</code>分成多个<code>modules</code>，便于管理</li></ul><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><p>其实算法方面在前端的实际项目中涉及得并不多，但还是需要精通一些基础性的算法，一些公司还是会有这方面的需求和考核，建议大家还是需要稍微准备下，这属于加分题。</p><h3 id="_1-五大算法" tabindex="-1"><a class="header-anchor" href="#_1-五大算法" aria-hidden="true">#</a> 1. 五大算法</h3><ul><li><strong>贪心算法</strong>: 局部最优解法</li><li><strong>分治算法</strong>: 分成多个小模块，与原问题性质相同</li><li><strong>动态规划</strong>: 每个状态都是过去历史的一个总结</li><li><strong>回溯法</strong>: 发现原先选择不优时，退回重新选择</li><li><strong>分支限界法</strong></li></ul><h3 id="_2-基础排序算法" tabindex="-1"><a class="header-anchor" href="#_2-基础排序算法" aria-hidden="true">#</a> 2. 基础排序算法</h3><ul><li>冒泡排序: 两两比较</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> function bubleSort(arr) {
     var len = arr.length;
     for (let outer = len ; outer &gt;= 2; outer--) {
         for(let inner = 0; inner &lt;=outer - 1; inner++) {
             if(arr[inner] &gt; arr[inner + 1]) {
                 [arr[inner],arr[inner+1]] = [arr[inner+1],arr[inner]]
             }
         }
     }
     return arr;
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>选择排序: 遍历自身以后的元素，最小的元素跟自己调换位置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function selectSort(arr) {
    var len = arr.length;
    for(let i = 0 ;i &lt; len - 1; i++) {
        for(let j = i ; j&lt;len; j++) {
            if(arr[j] &lt; arr[i]) {
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }
    return arr
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入排序: 即将元素插入到已排序好的数组中</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function insertSort(arr) {
    for(let i = 1; i &lt; arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
        for(let j = i; j &gt; 0; j--) {  //j = i,将arr[j]依次插入有序段中
            if(arr[j] &lt; arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-高级排序算法" tabindex="-1"><a class="header-anchor" href="#_3-高级排序算法" aria-hidden="true">#</a> 3. 高级排序算法</h3><ul><li>快速排序 <ul><li>选择基准值(base)，原数组长度减一(基准值)，使用 splice</li><li>循环原数组，小的放左边(left数组)，大的放右边(right数组);</li><li>concat(left, base, right)</li><li>递归继续排序 left 与 right</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function quickSort(arr) {
    if(arr.length &lt;= 1) {
        return arr;  //递归出口
    }
    var left = [],
        right = [],
        current = arr.splice(0,1); 
    for(let i = 0; i &lt; arr.length; i++) {
        if(arr[i] &lt; current) {
            left.push(arr[i])  //放在左边
        } else {
            right.push(arr[i]) //放在右边
        }
    }
    return quickSort(left).concat(current,quickSort(right));
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>希尔排序：不定步数的插入排序，插入排序</p></li><li><p>口诀: 插冒归基稳定，快选堆希不稳定</p></li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d8524a2b947~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>稳定性： 同大小情况下是否可能会被交换位置, 虚拟dom的diff，不稳定性会导致重新渲染；</p><h3 id="_4-递归运用-斐波那契数列-爬楼梯问题" tabindex="-1"><a class="header-anchor" href="#_4-递归运用-斐波那契数列-爬楼梯问题" aria-hidden="true">#</a> 4. 递归运用(斐波那契数列)： 爬楼梯问题</h3><p>初始在第一级，到第一级有1种方法(s(1) = 1)，到第二级也只有一种方法(s(2) = 1)， 第三级(s(3) = s(1) + s(2))</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function cStairs(n) {
    if(n === 1 || n === 2) {
        return 1;
    } else {
        return cStairs(n-1) + cStairs(n-2)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-数据树" tabindex="-1"><a class="header-anchor" href="#_5-数据树" aria-hidden="true">#</a> 5. 数据树</h3><ul><li>二叉树: 最多只有两个子节点 <ul><li>完全二叉树</li><li>满二叉树 <ul><li>深度为 h, 有 n 个节点，且满足 n = 2^h - 1</li></ul></li></ul></li><li>二叉查找树: 是一种特殊的二叉树，能有效地提高查找效率 <ul><li>小值在左，大值在右</li><li>节点 n 的所有左子树值小于 n，所有右子树值大于 n</li></ul></li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/2/14/168e9d89406fa6a8~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><ul><li>遍历节点 <ul><li>前序遍历 <ul><li><ol><li>根节点</li></ol></li><li><ol start="2"><li>访问左子节点，回到 1</li></ol></li><li><ol start="3"><li>访问右子节点，回到 1</li></ol></li></ul></li><li>中序遍历 <ul><li><ol><li>先访问到最左的子节点</li></ol></li><li><ol start="2"><li>访问该节点的父节点</li></ol></li><li><ol start="3"><li>访问该父节点的右子节点， 回到 1</li></ol></li></ul></li><li>后序遍历 <ul><li><ol><li>先访问到最左的子节点</li></ol></li><li><ol start="2"><li>访问相邻的右节点</li></ol></li><li><ol start="3"><li>访问父节点， 回到 1</li></ol></li></ul></li></ul></li><li>插入与删除节点</li></ul><h3 id="_6-天平找次品" tabindex="-1"><a class="header-anchor" href="#_6-天平找次品" aria-hidden="true">#</a> 6. 天平找次品</h3><p>有n个硬币，其中1个为假币，假币重量较轻，你有一把天平，请问，至少需要称多少次能保证一定找到假币?</p><ul><li>三等分算法: <ul><li><ol><li>将硬币分成3组，随便取其中两组天平称量</li></ol><ul><li>平衡，假币在未上称的一组，取其回到 1 继续循环</li><li>不平衡，假币在天平上较轻的一组， 取其回到 1 继续循环</li></ul></li></ul></li></ul>`,228),a=[s];function r(c,o){return i(),l("div",null,a)}const u=e(d,[["render",r],["__file","index.html.vue"]]);export{u as default};
