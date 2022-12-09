import{_ as d,z as l,A as t,X as e,C as n,T as a,a6 as i,Q as r}from"./framework.fef63301.js";const c={},o=i(`<h1 id="从es6到es10" tabindex="-1"><a class="header-anchor" href="#从es6到es10" aria-hidden="true">#</a> 从ES6到ES10</h1><h3 id="历史版本" tabindex="-1"><a class="header-anchor" href="#历史版本" aria-hidden="true">#</a> 历史版本</h3><p>至发稿日为止有九个ECMA-262版本发表。其历史版本如下：</p><ol><li>1997年6月：第一版</li><li>1998年6月：修改格式，使其与ISO/IEC16262国际标准一样</li><li>1999年12月：强大的正则表达式，更好的词法作用域链处理，新的控制指令，异常处理，错误定义更加明确，数据输出的格式化及其它改变</li><li>2009年12月：添加严格模式(<code>&quot;use strict&quot;</code>)。修改了前面版本模糊不清的概念。增加了getters，setters，JSON以及在对象属性上更完整的反射。</li><li>2011年6月：ECMAScript标5.1版形式上完全一致于国际标准ISO/IEC 16262:2011。</li><li>2015年6月：ECMAScript 2015（ES2015），第 6 版，最早被称作是 ECMAScript 6（ES6），添加了类和模块的语法，其他特性包括迭代器，Python风格的生成器和生成器表达式，箭头函数，二进制数据，静态类型数组，集合（maps，sets 和 weak maps），promise，reflection 和 proxies。作为最早的 ECMAScript Harmony 版本，也被叫做ES6 Harmony。</li><li>2016年6月：ECMAScript 2016（ES2016），第 7 版，多个新的概念和语言特性。</li><li>2017年6月：ECMAScript 2017（ES2017），第 8 版，多个新的概念和语言特性。</li><li>2018年6月：ECMAScript 2018 （ES2018），第 9 版，包含了异步循环，生成器，新的正则表达式特性和 rest/spread 语法。</li><li>2019年6月：ECMAScript 2019 （ES2019），第 10 版。</li></ol><h3 id="发展标准" tabindex="-1"><a class="header-anchor" href="#发展标准" aria-hidden="true">#</a> 发展标准</h3><p>TC39（Technical Committee 39）是一个推动JavaScript发展的委员会，它的成语来自各个主流浏览器的代表成语。会议实行多数决，每一项决策只有大部分人同意且没有强烈反对才能去实现。</p><p>TC39成员制定着ECMAScript的未来。</p><p>每一项新特性最终要进入到ECMAScript规范里，需要经历5个阶段，这5个阶段如下：</p><ul><li><p><strong>Stage 0</strong>: Strawperson</p><p>只要是TC39成员或者贡献者，都可以提交想法</p></li><li><p><strong>Stage 1</strong>: Proposal</p><p>这个阶段确定一个正式的提案</p></li><li><p><strong>Stage 2</strong>: draft</p><p>规范的第一个版本，进入此阶段的提案大概率会成为标准</p></li><li><p><strong>Stage 3</strong>: Candidate</p><p>进一步完善提案细则</p></li><li><p><strong>Stage 4</strong>: Finished</p><p>表示已准备好将其添加到正式的ECMAScript标准中</p></li></ul><p><strong>由于ES6以前的属性诞生年底久远，我们使用也比较普遍，遂不进行说明，ES6之后的语言风格跟ES5以前的差异比较大，所以单独拎出来做个记录。</strong></p><h2 id="es6-es2015" tabindex="-1"><a class="header-anchor" href="#es6-es2015" aria-hidden="true">#</a> ES6(ES2015)</h2><blockquote><p>ES6是一次重大的革新，比起过去的版本，改动比较大，本文仅对常用的API以及语法糖进行讲解。</p></blockquote><h3 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> Let 和 Const</h3><p>在ES6以前，<code>JS</code>只有<code>var</code>一种声明方式，但是在ES6之后，就多了<code>let</code>跟<code>const</code>这两种方式。用<code>var</code>定义的变量没有块级作用域的概念，而<code>let</code>跟<code>const</code>则会有，因为这三个关键字创建是不一样的。</p><p>区别如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    var a = 10
    let b = 20
    const c = 30
}
a // 10
b // Uncaught ReferenceError: b is not defined
c // c is not defined
let d = 40
const e = 50
d = 60
d // 60
e = 70 // VM231:1 Uncaught TypeError: Assignment to constant variable.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th></th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>变量提升</td><td>√</td><td>×</td><td>×</td></tr><tr><td>全局变量</td><td>√</td><td>×</td><td>×</td></tr><tr><td>重复声明</td><td>√</td><td>×</td><td>×</td></tr><tr><td>重新赋值</td><td>√</td><td>√</td><td>×</td></tr><tr><td>暂时死区</td><td>×</td><td>√</td><td>√</td></tr><tr><td>块作用域</td><td>×</td><td>√</td><td>√</td></tr><tr><td>只声明不初始化</td><td>√</td><td>√</td><td>×</td></tr></tbody></table><h3 id="类-class" tabindex="-1"><a class="header-anchor" href="#类-class" aria-hidden="true">#</a> 类（Class）</h3><p>在ES6之前，如果我们要生成一个实例对象，传统的方法就是写一个构造函数，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.information = function () {
    return &#39;My name is &#39; + this.name + &#39;, I am &#39; + this.age
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES6之后，我们只需要写成以下形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    information() {
        return &#39;My name is &#39; + this.name + &#39;, I am &#39; + this.age
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="箭头函数-arrow-function" tabindex="-1"><a class="header-anchor" href="#箭头函数-arrow-function" aria-hidden="true">#</a> 箭头函数（Arrow function）</h3><p>箭头函数表达式的语法比函数表达式更简洁，并且没有自己的<code>this</code>，<code>arguments</code>，<code>super</code>或 <code>new.target</code>。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。</p><p>在ES6以前，我们写函数一般是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var list = [1, 2, 3, 4, 5, 6, 7]
var newList = list.map(function (item) {
    return item * item
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES6里，我们可以：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const list = [1, 2, 3, 4, 5, 6, 7]
const newList = list.map(item =&gt; item * item)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看，是不是简洁了不少</p><h3 id="函数参数默认值-function-parameter-defaults" tabindex="-1"><a class="header-anchor" href="#函数参数默认值-function-parameter-defaults" aria-hidden="true">#</a> 函数参数默认值（Function parameter defaults）</h3><p>在ES6之前，如果我们写函数需要定义初始值的时候，需要这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function config (data) {
    var data = data || &#39;data is empty&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样看起来也没有问题，但是如果参数的布尔值为<strong>falsy</strong>时就会出问题，例如我们这样调用config：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config(0)
config(&#39;&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么结果就永远是后面的值</p><p>如果我们用函数参数默认值就没有这个问题，写法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const config = (data = &#39;data is empty&#39;) =&gt; {}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串-template-string" tabindex="-1"><a class="header-anchor" href="#模板字符串-template-string" aria-hidden="true">#</a> 模板字符串（Template string）</h3><p>在ES6之前，如果我们要拼接字符串，则需要像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var name = &#39;kris&#39;
var age = 24
var info = &#39;My name is &#39; + this.name + &#39;, I am &#39; + this.age

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES6之后，我们只需要写成以下形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const name = &#39;kris&#39;
const age = 24
const info = \`My name is \${name}, I am \${age}\`

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解构赋值-destructuring-assignment" tabindex="-1"><a class="header-anchor" href="#解构赋值-destructuring-assignment" aria-hidden="true">#</a> 解构赋值（Destructuring assignment）</h3><p>我们通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。</p><p>比如我们需要交换两个变量的值，在ES6之前我们可能需要：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 10
var b = 20
var temp = a
a = b
b = temp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES6里，我们有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = 10
let b = 20
[a, b] = [b, a]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是方便很多</p><h3 id="模块化-module" tabindex="-1"><a class="header-anchor" href="#模块化-module" aria-hidden="true">#</a> 模块化（Module）</h3><p>在ES6之前，JS并没有模块化的概念，有的也只是社区定制的类似CommonJS和AMD之类的规则。例如基于CommonJS的NodeJS：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// circle.js
// 输出
const { PI } = Math
exports.area = (r) =&gt; PI * r ** 2
exports.circumference = (r) =&gt; 2 * PI * r

// index.js
// 输入
const circle = require(&#39;./circle.js&#39;)
console.log(\`半径为 4 的圆的面积是 \${circle.area(4)}\`)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在ES6之后我们则可以写成以下形式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// circle.js</span>
<span class="token comment">// 输出</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">PI</span> <span class="token punctuation">}</span> <span class="token operator">=</span> Math
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">area</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">PI</span> <span class="token operator">*</span> r <span class="token operator">**</span> <span class="token number">2</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">circumference</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token constant">PI</span> <span class="token operator">*</span> r

<span class="token comment">// index.js</span>
<span class="token comment">// 输入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    area
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&#39;./circle.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">半径为 4 的圆的面积是: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展操作符-spread-operator" tabindex="-1"><a class="header-anchor" href="#扩展操作符-spread-operator" aria-hidden="true">#</a> 扩展操作符（Spread operator）</h3><p>扩展操作符可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。</p><p>比如在ES5的时候，我们要对一个数组的元素进行相加，在不使用<code>reduce</code>或者<code>reduceRight</code>的场合，我们需要：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(x, y, z) {
    return x + y + z;
}
var list = [5, 6, 7]
var total = sum.apply(null, list)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果我们使用扩展操作符，只需要如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const sum = (x, y, z) =&gt; x + y + z
const list = [5, 6, 7]
const total = sum(...list)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非常的简单，但是要注意的是扩展操作符只能用于可迭代对象</p><p>如果是下面的情况，是会报错的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {&#39;key1&#39;: &#39;value1&#39;}
var array = [...obj] // TypeError: obj is not iterable

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象属性简写-object-attribute-shorthand" tabindex="-1"><a class="header-anchor" href="#对象属性简写-object-attribute-shorthand" aria-hidden="true">#</a> 对象属性简写（Object attribute shorthand）</h3><p>在ES6之前，如果我们要将某个变量赋值为同样名称的对象元素，则需要：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var cat = &#39;Miaow&#39;
var dog = &#39;Woof&#39;
var bird = &#39;Peet peet&#39;

var someObject = {
  cat: cat,
  dog: dog,
  bird: bird
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES6里我们就方便很多：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let cat = &#39;Miaow&#39;
let dog = &#39;Woof&#39;
let bird = &#39;Peet peet&#39;

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject)

//{
//  cat: &quot;Miaow&quot;,
//  dog: &quot;Woof&quot;,
//  bird: &quot;Peet peet&quot;
//}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非常方便</p><h3 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h3><p>Promise 是ES6提供的一种异步解决方案，比回调函数更加清晰明了。</p><p><code>Promise</code> 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：</p><ol><li>等待中（pending）</li><li>完成了 （resolved）</li><li>拒绝了（rejected）</li></ol><p>这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  resolve(&#39;success&#39;)
  // 无效
  reject(&#39;reject&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们在构造 <code>Promise</code> 的时候，构造函数内部的代码是立即执行的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
  console.log(&#39;new Promise&#39;)
  resolve(&#39;success&#39;)
})
console.log(&#39;finifsh&#39;)
// new Promise -&gt; finifsh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Promise</code> 实现了链式调用，也就是说每次调用 <code>then</code> 之后返回的都是一个 <code>Promise</code>，并且是一个全新的 <code>Promise</code>，原因也是因为状态不可变。如果你在 <code>then</code> 中 使用了 <code>return</code>，那么 <code>return</code> 的值会被 <code>Promise.resolve()</code> 包装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Promise.resolve(1)
  .then(res =&gt; {
    console.log(res) // =&gt; 1
    return 2 // 包装成 Promise.resolve(2)
  })
  .then(res =&gt; {
    console.log(res) // =&gt; 2
  })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然了，<code>Promise</code> 也很好地解决了回调地狱的问题，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ajax(url, () =&gt; {
    // 处理逻辑
    ajax(url1, () =&gt; {
        // 处理逻辑
        ajax(url2, () =&gt; {
            // 处理逻辑
        })
    })
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以改写成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ajax(url)
  .then(res =&gt; {
      console.log(res)
      return ajax(url1)
  }).then(res =&gt; {
      console.log(res)
      return ajax(url2)
  }).then(res =&gt; console.log(res))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for...of</h3><p><code>for...of</code>语句在可迭代对象（包括 <code>Array，Map，Set，String，TypedArray，arguments</code> 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;];

for (const element of array1) {
      console.log(element)
}

// &quot;a&quot;
// &quot;b&quot;
// &quot;c&quot;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h3><p><strong>symbol</strong> 是一种基本数据类型，<code>Symbol()</code>函数会返回<strong>symbol</strong>类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法：&quot;<code>new Symbol()</code>&quot;。</p><p>每个从<code>Symbol()</code>返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol(&#39;foo&#39;);

console.log(typeof symbol1); // &quot;symbol&quot;
console.log(symbol3.toString()); // &quot;Symbol(foo)&quot;
console.log(Symbol(&#39;foo&#39;) === Symbol(&#39;foo&#39;)); // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器-iterator-生成器-generator" tabindex="-1"><a class="header-anchor" href="#迭代器-iterator-生成器-generator" aria-hidden="true">#</a> 迭代器（Iterator）/ 生成器（Generator）</h3><p>迭代器（Iterator）是一种迭代的机制，为各种不同的数据结构提供统一的访问机制。任何数据结构只要内部有 Iterator 接口，就可以完成依次迭代操作。</p><p>一旦创建，迭代器对象可以通过重复调用next()显式地迭代，从而获取该对象每一级的值，直到迭代完，返回<code>{ value: undefined, done: true }</code></p>`,95),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffunction*",title:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"function*",-1),m=i(`<p>可以根据需要多次调用该函数，并且每次都返回一个新的Generator，但每个Generator只能迭代一次。</p><p>所以我们可以有以下例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    for (let i = start; i &lt; end; i += step) {
        yield i;
    }
}
var a = makeRangeIterator(1,10,2)
a.next() // {value: 1, done: false}
a.next() // {value: 3, done: false}
a.next() // {value: 5, done: false}
a.next() // {value: 7, done: false}
a.next() // {value: 9, done: false}
a.next() // {value: undefined, done: true}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-weakset" tabindex="-1"><a class="header-anchor" href="#set-weakset" aria-hidden="true">#</a> Set/WeakSet</h3><p><code>Set</code> 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</p><p>所以我们可以通过<code>Set</code>实现数组去重</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) 
// [2, 3, 4, 5, 6, 7, 32]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WeakSet</code> 结构与 <code>Set</code> 类似，但区别有以下两点：</p><ul><li><code>WeakSet</code> 对象中只能存放对象引用, 不能存放值, 而 <code>Set</code> 对象都可以。</li><li><code>WeakSet</code> 对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, <code>WeakSet</code> 对象是无法被枚举的, 没有办法拿到它包含的所有元素。</li></ul><p>所以代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var ws = new WeakSet()
var obj = {}
var foo = {}

ws.add(window)
ws.add(obj)

ws.has(window) // true
ws.has(foo)    // false, 对象 foo 并没有被添加进 ws 中 

ws.delete(window) // 从集合中删除 window 对象
ws.has(window)    // false, window 对象已经被删除了

ws.clear() // 清空整个 WeakSet 对象

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-weakmap" tabindex="-1"><a class="header-anchor" href="#map-weakmap" aria-hidden="true">#</a> Map/WeakMap</h3><p><code>Map</code> 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。</p><p>例子如下，我们甚至可以使用<code>NaN</code>来作为键值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var myMap = new Map();
myMap.set(NaN, &quot;not a number&quot;);

myMap.get(NaN); // &quot;not a number&quot;

var otherNaN = Number(&quot;foo&quot;);
myMap.get(otherNaN); // &quot;not a number&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>WeakMap</code> 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。</p><p>跟<code>Map</code>的区别与<code>Set</code>跟<code>WeakSet</code>的区别相似，具体代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, &quot;azerty&quot;);
wm2.set(o1, o2); // value可以是任意值,包括一个对象
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // 键和值可以是任意对象,甚至另外一个WeakMap对象
wm1.get(o2); // &quot;azerty&quot;
wm2.get(o2); // undefined,wm2中没有o2这个键
wm2.get(o3); // undefined,值就是undefined

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (即使值是undefined)

wm3.set(o1, 37);
wm3.get(o1); // 37
wm3.clear();
wm3.get(o1); // undefined,wm3已被清空
wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-reflect" tabindex="-1"><a class="header-anchor" href="#proxy-reflect" aria-hidden="true">#</a> Proxy/Reflect</h3><p><code>Proxy</code> 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。</p><p><code>Reflect</code> 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 <code>Proxy</code> 的方法相同。<code>Reflect</code>不是一个函数对象，因此它是不可构造的。</p><p><code>Proxy</code>跟<code>Reflect</code>是非常完美的配合，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const observe = (data, callback) =&gt; {
      return new Proxy(data, {
            get(target, key) {
                return Reflect.get(target, key)
            },
            set(target, key, value, proxy) {
                  callback(key, value);
                  target[key] = value;
                    return Reflect.set(target, key, value, proxy)
            }
      })
}

const FooBar = { open: false };
const FooBarObserver = observe(FooBar, (property, value) =&gt; {
  property === &#39;open&#39; &amp;&amp; value 
          ? console.log(&#39;FooBar is open!!!&#39;) 
          : console.log(&#39;keep waiting&#39;);
});
console.log(FooBarObserver.open) // false
FooBarObserver.open = true // FooBar is open!!!

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也不是什么都可以被代理的，如果对象带有<code>configurable: false</code> 跟<code>writable: false</code> 属性，则代理失效。</p><h3 id="regex对象的扩展" tabindex="-1"><a class="header-anchor" href="#regex对象的扩展" aria-hidden="true">#</a> Regex对象的扩展</h3><h4 id="正则新增符号" tabindex="-1"><a class="header-anchor" href="#正则新增符号" aria-hidden="true">#</a> 正则新增符号</h4><ul><li><p><code>i</code> 修饰符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// i 修饰符
/[a-z]/i.test(&#39;\\u212A&#39;) // false
/[a-z]/iu.test(&#39;\\u212A&#39;) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>y</code>修饰符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// y修饰符
var s = &#39;aaa_aa_a&#39;;
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // [&quot;aaa&quot;]
r2.exec(s) // [&quot;aaa&quot;]

r1.exec(s) // [&quot;aa&quot;]
r2.exec(s) // null

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>String.prototype.flags</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查看RegExp构造函数的修饰符
var regex = new RegExp(&#39;xyz&#39;, &#39;i&#39;)
regex.flags // &#39;i&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>unicode模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var s = &#39;𠮷&#39;
/^.$/.test(s) // false
/^.$/u.test(s) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>u转义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// u转义
/\\,/ // /\\,/
/\\,/u // 报错 没有u修饰符时，逗号前面的反斜杠是无效的，加了u修饰符就报错。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>引用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const RE_TWICE = /^(?&lt;word&gt;[a-z]+)!\\k&lt;word&gt;$/;
RE_TWICE.test(&#39;abc!abc&#39;) // true
RE_TWICE.test(&#39;abc!ab&#39;) // false

const RE_TWICE = /^(?&lt;word&gt;[a-z]+)!\\1$/;
RE_TWICE.test(&#39;abc!abc&#39;) // true
RE_TWICE.test(&#39;abc!ab&#39;) // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="字符串方法的实现改为调用regexp方法" tabindex="-1"><a class="header-anchor" href="#字符串方法的实现改为调用regexp方法" aria-hidden="true">#</a> 字符串方法的实现改为调用<code>RegExp</code>方法</h4><ul><li><code>String.prototype.match</code> 调用 <code>RegExp.prototype[Symbol.match]</code></li><li><code>String.prototype.replace</code> 调用 <code>RegExp.prototype[Symbol.replace]</code></li><li><code>String.prototype.search</code> 调用 <code>RegExp.prototype[Symbol.search]</code></li><li><code>String.prototype.split</code> 调用 <code>RegExp.prototype[Symbol.split]</code></li></ul><h4 id="正则新增属性" tabindex="-1"><a class="header-anchor" href="#正则新增属性" aria-hidden="true">#</a> 正则新增属性</h4><ul><li><p><code>RegExp.prototype.sticky</code> 表示是否有<code>y</code>修饰符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/hello\\d/y.sticky // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>RegExp.prototype.flags</code>获取修饰符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/abc/ig.flags // &#39;gi&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="math对象的扩展" tabindex="-1"><a class="header-anchor" href="#math对象的扩展" aria-hidden="true">#</a> Math对象的扩展</h3><ul><li><p><code>二进制表示法</code> : <code>0b或0B开头</code>表示二进制(<code>0bXX</code>或<code>0BXX</code>)</p></li><li><p><code>二进制表示法</code> : <code>0b或0B开头</code>表示二进制(<code>0bXX</code>或<code>0BXX</code>)</p></li><li><p><code>八进制表示法</code> : <code>0o或0O开头</code>表示二进制(<code>0oXX</code>或<code>0OXX</code>)</p></li><li><p><code>Number.EPSILON</code> : 数值最小精度</p></li><li><p><code>Number.MIN_SAFE_INTEGER</code> : 最小安全数值(<code>-2^53</code>)</p></li><li><p><code>Number.MAX_SAFE_INTEGER</code> : 最大安全数值(<code>2^53</code>)</p></li><li><p><code>Number.parseInt()</code> : 返回转换值的整数部分</p></li><li><p><code>Number.parseFloat()</code> : 返回转换值的浮点数部分</p></li><li><p><code>Number.isFinite()</code> : 是否为有限数值</p></li><li><p><code>Number.isNaN()</code> : 是否为NaN</p></li><li><p><code>Number.isInteger()</code> : 是否为整数</p></li><li><p><code>Number.isSafeInteger()</code> : 是否在数值安全范围内</p></li><li><p><code>Math.trunc()</code> : 返回数值整数部分</p></li><li><p><code>Math.sign()</code> : 返回数值类型(<code>正数1</code>、<code>负数-1</code>、<code>零0</code>)</p></li><li><p><code>Math.cbrt()</code> : 返回数值立方根</p></li><li><p><code>Math.clz32()</code> : 返回数值的32位无符号整数形式</p></li><li><p><code>Math.imul()</code> : 返回两个数值相乘</p></li><li><p><code>Math.fround()</code> : 返回数值的32位单精度浮点数形式</p></li><li><p><code>Math.hypot()</code> : 返回所有数值平方和的平方根</p></li><li><p><code>Math.expm1()</code> : 返回<code>e^n - 1</code></p></li><li><p><code>Math.log1p()</code> : 返回<code>1 + n</code>的自然对数(<code>Math.log(1 + n)</code>)</p></li><li><p><code>Math.log10()</code> : 返回以10为底的n的对数</p></li><li><p><code>Math.log2()</code> : 返回以2为底的n的对数</p></li><li><p><code>Math.sinh()</code> : 返回n的双曲正弦</p></li><li><p><code>Math.cosh()</code> : 返回n的双曲余弦</p></li><li><p><code>Math.tanh()</code> : 返回n的双曲正切</p></li><li><p><code>Math.asinh()</code> : 返回n的反双曲正弦</p></li><li><p><code>Math.acosh()</code> : 返回n的反双曲余弦</p></li><li><p><code>Math.atanh()</code> : 返回n的反双曲正切</p></li></ul><h3 id="array对象的扩展" tabindex="-1"><a class="header-anchor" href="#array对象的扩展" aria-hidden="true">#</a> Array对象的扩展</h3><ul><li><p><code>Array.prototype.from</code>：转换具有<code>Iterator接口</code>的数据结构为真正数组，返回新数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(Array.from(&#39;foo&#39;)) // [&quot;f&quot;, &quot;o&quot;, &quot;o&quot;]
console.log(Array.from([1, 2, 3], x =&gt; x + x)) // [2, 4, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.of()</code>：转换一组值为真正数组，返回新数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.of(7)       // [7] 
Array.of(1, 2, 3) // [1, 2, 3]

Array(7)          // [empty, empty, empty, empty, empty, empty]
Array(1, 2, 3)    // [1, 2, 3]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.copyWithin()</code>：把指定位置的成员复制到其他位置，返回原数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;]

console.log(array1.copyWithin(0, 3, 4)) // [&quot;d&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;, &quot;e&quot;]

console.log(array1.copyWithin(1, 3)) // [&quot;d&quot;, &quot;d&quot;, &quot;e&quot;, &quot;d&quot;, &quot;e&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.find()</code>：返回第一个符合条件的成员</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [5, 12, 8, 130, 44]

const found = array1.find(element =&gt; element &gt; 10)

console.log(found) // 12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.findIndex()</code>：返回第一个符合条件的成员索引值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [5, 12, 8, 130, 44]

const isLargeNumber = (element) =&gt; element &gt; 13

console.log(array1.findIndex(isLargeNumber)) // 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.fill()</code>：根据指定值填充整个数组，返回原数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [1, 2, 3, 4]

console.log(array1.fill(0, 2, 4)) // [1, 2, 0, 0]

console.log(array1.fill(5, 1)) // [1, 5, 5, 5]

console.log(array1.fill(6)) // [6, 6, 6, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.keys()</code>：返回以索引值为遍历器的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
const iterator = array1.keys()

for (const key of iterator) {
      console.log(key)
}

// 0
// 1
// 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.values()</code>：返回以属性值为遍历器的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
const iterator = array1.values()

for (const key of iterator) {
      console.log(key)
}

// a
// b
// c

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>Array.prototype.entries()</code>：返回以索引值和属性值为遍历器的对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]
const iterator = array1.entries()

console.log(iterator.next().value) // [0, &quot;a&quot;]
console.log(iterator.next().value) // [1, &quot;b&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>数组空位</code>：ES6明确将数组空位转为<code>undefined</code>或者<code>empty</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.from([&#39;a&#39;,,&#39;b&#39;]) // [ &quot;a&quot;, undefined, &quot;b&quot; ]
[...[&#39;a&#39;,,&#39;b&#39;]] // [ &quot;a&quot;, undefined, &quot;b&quot; ]
Array(3) //  [empty × 3]
[,&#39;a&#39;] // [empty, &quot;a&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="es7-es2016" tabindex="-1"><a class="header-anchor" href="#es7-es2016" aria-hidden="true">#</a> ES7(ES2016)</h2><h3 id="array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#array-prototype-includes" aria-hidden="true">#</a> Array.prototype.includes()</h3><p><code>includes()</code> 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const array1 = [1, 2, 3]
console.log(array1.includes(2)) // true

const pets = [&#39;cat&#39;, &#39;dog&#39;, &#39;bat&#39;]
console.log(pets.includes(&#39;cat&#39;)) // true
console.log(pets.includes(&#39;at&#39;)) // false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="幂运算符" tabindex="-1"><a class="header-anchor" href="#幂运算符" aria-hidden="true">#</a> 幂运算符**</h3><p>幂运算符**，具有与Math.pow()一样的功能，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(2**10) // 1024
console.log(Math.pow(2, 10)) // 1024

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串-template-string-1" tabindex="-1"><a class="header-anchor" href="#模板字符串-template-string-1" aria-hidden="true">#</a> 模板字符串（Template string）</h3><p>自ES7起，带标签的模版字面量遵守以下转义序列的规则：</p><ul><li>Unicode字符以&quot;\\u&quot;开头，例如<code>\\u00A9</code></li><li>Unicode码位用&quot;\\u{}&quot;表示，例如<code>\\u{2F804}</code></li><li>十六进制以&quot;\\x&quot;开头，例如<code>\\xA9</code></li><li>八进制以&quot;&quot;和数字开头，例如<code>\\251</code></li></ul><p>这表示类似下面这种带标签的模版是有问题的，因为对于每一个ECMAScript语法，解析器都会去查找有效的转义序列，但是只能得到这是一个形式错误的语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>latex\`\\unicode\`
// 在较老的ECMAScript版本中报错（ES2016及更早）
// SyntaxError: malformed Unicode character escape sequence

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es8-es2017" tabindex="-1"><a class="header-anchor" href="#es8-es2017" aria-hidden="true">#</a> ES8(ES2017)</h2><h3 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async/await</h3><p>虽然<code>Promise</code>可以解决回调地狱的问题，但是链式调用太多，则会变成另一种形式的回调地狱 —— 面条地狱，所以在ES8里则出现了<code>Promise</code>的语法糖<code>async/await</code>，专门解决这个问题。</p><p>我们先看一下下面的<code>Promise</code>代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fetch(&#39;coffee.jpg&#39;)
    .then(response =&gt; response.blob())
    .then(myBlob =&gt; {
          let objectURL = URL.createObjectURL(myBlob)
          let image = document.createElement(&#39;img&#39;)
          image.src = objectURL
          document.body.appendChild(image)
    })
    .catch(e =&gt; {
          console.log(&#39;There has been a problem with your fetch operation: &#39; + e.message)
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再看看<code>async/await</code>版的，这样看起来是不是更清晰了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function myFetch() {
      let response = await fetch(&#39;coffee.jpg&#39;)
      let myBlob = await response.blob()

      let objectURL = URL.createObjectURL(myBlob)
      let image = document.createElement(&#39;img&#39;)
      image.src = objectURL
      document.body.appendChild(image)
}

myFetch()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你喜欢，你甚至可以两者混用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function myFetch() {
      let response = await fetch(&#39;coffee.jpg&#39;)
      return await response.blob()
}

myFetch().then((blob) =&gt; {
      let objectURL = URL.createObjectURL(blob)
      let image = document.createElement(&#39;img&#39;)
      image.src = objectURL
      document.body.appendChild(image)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values()</h3><p><code>Object.values()</code>方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const object1 = {
      a: &#39;somestring&#39;,
      b: 42,
      c: false
}
console.log(Object.values(object1)) // [&quot;somestring&quot;, 42, false]


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object.entries()</h3><p><code>Object.entries()</code>方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const object1 = {
      a: &#39;somestring&#39;,
      b: 42
}

for (let [key, value] of Object.entries(object1)) {
      console.log(\`\${key}: \${value}\`)
}

// &quot;a: somestring&quot;
// &quot;b: 42&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="padstart" tabindex="-1"><a class="header-anchor" href="#padstart" aria-hidden="true">#</a> padStart()</h3><p><code>padStart()</code> 方法用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const str1 = &#39;5&#39;
console.log(str1.padStart(2, &#39;0&#39;)) // &quot;05&quot;

const fullNumber = &#39;2034399002125581&#39;
const last4Digits = fullNumber.slice(-4)
const maskedNumber = last4Digits.padStart(fullNumber.length, &#39;*&#39;) 
console.log(maskedNumber) // &quot;************5581&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="padend" tabindex="-1"><a class="header-anchor" href="#padend" aria-hidden="true">#</a> padEnd()</h3><p><code>padEnd()</code> 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const str1 = &#39;Breaded Mushrooms&#39;
console.log(str1.padEnd(25, &#39;.&#39;)) // &quot;Breaded Mushrooms........&quot;
const str2 = &#39;200&#39;
console.log(str2.padEnd(5)) // &quot;200  &quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数结尾逗号-function-parameter-lists-and-calls-trailing-commas" tabindex="-1"><a class="header-anchor" href="#函数参数结尾逗号-function-parameter-lists-and-calls-trailing-commas" aria-hidden="true">#</a> 函数参数结尾逗号（Function parameter lists and calls trailing commas）</h3><p>在ES5里就添加了对象的尾逗号，不过并不支持函数参数，但是在ES8之后，便开始支持这一特性，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 参数定义
function f(p) {}
function f(p,) {} 

(p) =&gt; {}
(p,) =&gt; {}

class C {
  one(a,) {},
  two(a, b,) {},
}

var obj = {
  one(a,) {},
  two(a, b,) {},
};

// 函数调用
f(p)
f(p,)

Math.max(10, 20)
Math.max(10, 20,)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是以下的方式是不合法的：</p><p>仅仅包含逗号的函数参数定义或者函数调用会抛出 SyntaxError。 而且，当使用剩余参数的时候，并不支持尾后逗号，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function f(,) {} // SyntaxError: missing formal parameter
(,) =&gt; {}       // SyntaxError: expected expression, got &#39;,&#39;
f(,)             // SyntaxError: expected expression, got &#39;,&#39;

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) =&gt; {}        // SyntaxError: expected closing parenthesis, got &#39;,&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在解构里也可以使用，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 带有尾后逗号的数组解构
[a, b,] = [1, 2]

// 带有尾后逗号的对象解构
var o = {
  p: 42, 
  q: true,
}
var {p, q,} = o

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样地，在使用剩余参数时，会抛出 SyntaxError，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var [a, ...b,] = [1, 2, 3] // SyntaxError: rest element may not have a trailing comma

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sharearraybuffer-因安全问题-暂时在chrome跟firefox中被禁用" tabindex="-1"><a class="header-anchor" href="#sharearraybuffer-因安全问题-暂时在chrome跟firefox中被禁用" aria-hidden="true">#</a> ShareArrayBuffer（因安全问题，暂时在Chrome跟FireFox中被禁用）</h3><p>SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区，类似于 ArrayBuffer 对象，它们都可以用来在共享内存（shared memory）上创建视图。与 ArrayBuffer 不同的是，SharedArrayBuffer 不能被分离。</p><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let sab = new SharedArrayBuffer(1024) // 必须实例化
worker.postMessage(sab)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="atomics对象" tabindex="-1"><a class="header-anchor" href="#atomics对象" aria-hidden="true">#</a> Atomics对象</h3>`,87),b=e("strong",null,"Atomics对象",-1),p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FSharedArrayBuffer",title:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"SharedArrayBuffer",-1),h=i(`<p>方法如下：</p><ul><li><p><strong>Atomics.add()</strong> ：将指定位置上的数组元素与给定的值相加，并返回相加前该元素的值。</p></li><li><p><strong>Atomics.and()</strong>：将指定位置上的数组元素与给定的值相与，并返回与操作前该元素的值。</p></li><li><p><strong>Atomics.compareExchange()</strong>：如果数组中指定的元素与给定的值相等，则将其更新为新的值，并返回该元素原先的值。</p></li><li><p><strong>Atomics.exchange()</strong>：将数组中指定的元素更新为给定的值，并返回该元素更新前的值。</p></li><li><p><strong>Atomics.load()</strong>：返回数组中指定元素的值。</p></li><li><p><strong>Atomics.or()</strong>：将指定位置上的数组元素与给定的值相或，并返回或操作前该元素的值。</p></li><li><p><strong>Atomics.store()</strong>：将数组中指定的元素设置为给定的值，并返回该值。</p></li><li><p><strong>Atomics.sub()</strong>：将指定位置上的数组元素与给定的值相减，并返回相减前该元素的值。</p></li><li><p><strong>Atomics.xor()</strong>：将指定位置上的数组元素与给定的值相异或，并返回异或操作前该元素的值。</p></li><li><p><strong>Atomics.wait()</strong>：检测数组中某个指定位置上的值是否仍然是给定值，是则保持挂起直到被唤醒或超时。返回值为 &quot;ok&quot;、&quot;not-equal&quot; 或 &quot;time-out&quot;。调用时，如果当前线程不允许阻塞，则会抛出异常（大多数浏览器都不允许在主线程中调用 wait()）。</p></li><li><p><strong>Atomics.wake()</strong>：唤醒等待队列中正在数组指定位置的元素上等待的线程。返回值为成功唤醒的线程数量。</p></li><li><p><strong>Atomics.isLockFree(size)</strong>：可以用来检测当前系统是否支持硬件级的原子操作。对于指定大小的数组，如果当前系统支持硬件级的原子操作，则返回 true；否则就意味着对于该数组，Atomics 对象中的各原子操作都只能用锁来实现。此函数面向的是技术专家。</p></li></ul><h3 id="object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptors" aria-hidden="true">#</a> Object.getOwnPropertyDescriptors()</h3><p><code>Object.getOwnPropertyDescriptors()</code> 方法用来获取一个对象的所有自身属性的描述符。代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const object1 = {
  property1: 42
}

const descriptors1 = Object.getOwnPropertyDescriptors(object1)

console.log(descriptors1.property1.writable) // true

console.log(descriptors1.property1.value) // 42

// 浅拷贝一个对象
Object.create(
  Object.getPrototypeOf(obj), 
  Object.getOwnPropertyDescriptors(obj) 
)

// 创建子类
function superclass() {}
superclass.prototype = {
  // 在这里定义方法和属性
}
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, Object.getOwnPropertyDescriptors({
  // 在这里定义方法和属性
}))

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es9-es2018" tabindex="-1"><a class="header-anchor" href="#es9-es2018" aria-hidden="true">#</a> ES9(ES2018)</h2><h3 id="for-await-of" tabindex="-1"><a class="header-anchor" href="#for-await-of" aria-hidden="true">#</a> for await...of</h3><p><code>for await...of</code> 语句会在异步或者同步可迭代对象上创建一个迭代循环，包括 <code>String</code>，<code>Array</code>，<code>Array-like</code> 对象（比如<code>arguments</code> 或者<code>NodeList</code>)，<code>TypedArray</code>，<code>Map</code>， <code>Set</code>和自定义的异步或者同步可迭代对象。其会调用自定义迭代钩子，并为每个不同属性的值执行语句。</p><p>配合迭代异步生成器，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>async function* asyncGenerator() {
      var i = 0
      while (i &lt; 3) {
            yield i++
      }
}

(async function() {
      for await (num of asyncGenerator()) {
            console.log(num)
      }
})()
// 0
// 1
// 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板字符串-template-string-2" tabindex="-1"><a class="header-anchor" href="#模板字符串-template-string-2" aria-hidden="true">#</a> 模板字符串（Template string）</h3><p>ES9开始，模板字符串允许嵌套支持常见转义序列，移除对ECMAScript在带标签的模版字符串中转义序列的语法限制。</p><p>不过，非法转义序列在&quot;cooked&quot;当中仍然会体现出来。它们将以<code>undefined</code>元素的形式存在于&quot;cooked&quot;之中，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function latex(str) { 
 return { &quot;cooked&quot;: str[0], &quot;raw&quot;: str.raw[0] }
} 

latex\`\\unicode\` // { cooked: undefined, raw: &quot;\\\\unicode&quot; }



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式反向-lookbehind-断言" tabindex="-1"><a class="header-anchor" href="#正则表达式反向-lookbehind-断言" aria-hidden="true">#</a> 正则表达式反向(lookbehind)断言</h3><p>首先我们得先知道什么是<strong>断言(Assertion)</strong>。</p><p>**断言(Assertion)**是一个对当前匹配位置之前或之后的字符的测试， 它不会实际消耗任何字符，所以断言也被称为“非消耗性匹配”或“非获取匹配”。</p><p>正则表达式的断言一共有 4 种形式：</p><ul><li><code>(?=pattern)</code> 零宽正向肯定断言(zero-width positive lookahead assertion)</li><li><code>(?!pattern)</code> 零宽正向否定断言(zero-width negative lookahead assertion)</li><li><code>(?&lt;=pattern)</code> 零宽反向肯定断言(zero-width positive lookbehind assertion)</li><li><code>(?&lt;!pattern)</code> 零宽反向否定断言(zero-width negative lookbehind assertion)</li></ul><p>在ES9之前，JavaScript 正则表达式，只支持正向断言。正向断言的意思是：当前位置后面的字符串应该满足断言，但是并不捕获。例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;fishHeadfishTail&#39;.match(/fish(?=Head)/g) // [&quot;fish&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>反向断言和正向断言的行为一样，只是方向相反。例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;abc123&#39;.match(/(?&lt;=(\\d+)(\\d+))$/) //  [&quot;&quot;, &quot;1&quot;, &quot;23&quot;, index: 6, input: &quot;abc123&quot;, groups: undefined]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式-unicode-转义" tabindex="-1"><a class="header-anchor" href="#正则表达式-unicode-转义" aria-hidden="true">#</a> 正则表达式 Unicode 转义</h3><p>正则表达式中的Unicode转义符允许根据Unicode字符属性匹配Unicode字符。 它允许区分字符类型，例如大写和小写字母，数学符号和标点符号。</p><p>部分例子代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 匹配所有数字
const regex = /^\\p{Number}+$/u;
regex.test(&#39;²³¹¼½¾&#39;) // true
regex.test(&#39;㉛㉜㉝&#39;) // true
regex.test(&#39;ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ&#39;) // true

// 匹配所有空格
\\p{White_Space}

// 匹配各种文字的所有字母，等同于 Unicode 版的 \\w
[\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}]

// 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \\W
[^\\p{Alphabetic}\\p{Mark}\\p{Decimal_Number}\\p{Connector_Punctuation}\\p{Join_Control}]

// 匹配 Emoji
/\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}?|\\p{Emoji_Presentation}|\\p{Emoji}\\uFE0F/gu

// 匹配所有的箭头字符
const regexArrows = /^\\p{Block=Arrows}+$/u;
regexArrows.test(&#39;←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩&#39;) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FGuide%2FRegular_Expressions%2FUnicode_Property_Escapes",title:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="正则表达式-s-dotall-模式" tabindex="-1"><a class="header-anchor" href="#正则表达式-s-dotall-模式" aria-hidden="true">#</a> 正则表达式 s/dotAll 模式</h3><p>在以往的版本里，JS的正则的<code>.</code>只能匹配emoji跟行终结符以外的所有文本，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let regex = /./;

regex.test(&#39;\\n&#39;);       // false
regex.test(&#39;\\r&#39;);       // false
regex.test(&#39;\\u{2028}&#39;); // false
regex.test(&#39;\\u{2029}&#39;); // false

regex.test(&#39;\\v&#39;);       // true
regex.test(&#39;\\f&#39;);       // true
regex.test(&#39;\\u{0085}&#39;); // true

/foo.bar/.test(&#39;foo\\nbar&#39;);     // false
/foo[^]bar/.test(&#39;foo\\nbar&#39;);   // true

/foo.bar/.test(&#39;foo\\nbar&#39;);     // false
/foo[\\s]bar/.test(&#39;foo\\nbar&#39;);   // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES9之后，JS正则增加了一个新的标志 <code>s</code> 用来表示 dotAll，这可以匹配任意字符。代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/foo.bar/s.test(&#39;foo\\nbar&#39;);    // true

const re = /foo.bar/s;  //  等价于 const re = new RegExp(&#39;foo.bar&#39;, &#39;s&#39;);
re.test(&#39;foo\\nbar&#39;);    // true
re.dotAll;      // true
re.flags;       // &quot;s&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式命名捕获组" tabindex="-1"><a class="header-anchor" href="#正则表达式命名捕获组" aria-hidden="true">#</a> 正则表达式命名捕获组</h3><p>在以往的版本里，JS的正则分组是无法命名的，所以容易混淆。例如下面获取年月日的例子，很容易让人搞不清哪个是月份，哪个是年份:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const matched = /(\\d{4})-(\\d{2})-(\\d{2})/.exec(&#39;2019-01-01&#39;)
console.log(matched[0]);    // 2019-01-01
console.log(matched[1]);    // 2019
console.log(matched[2]);    // 01
console.log(matched[3]);    // 01

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES9引入了命名捕获组，允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const RE_DATE = /(?&lt;year&gt;\\d{4})-(?&lt;month&gt;\\d{2})-(?&lt;day&gt;\\d{2})/;

const matchObj = RE_DATE.exec(&#39;1999-12-31&#39;);
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31

const RE_OPT_A = /^(?&lt;as&gt;a+)?$/;
const matchObj = RE_OPT_A.exec(&#39;&#39;);

matchObj.groups.as // undefined
&#39;as&#39; in matchObj.groups // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象扩展操作符" tabindex="-1"><a class="header-anchor" href="#对象扩展操作符" aria-hidden="true">#</a> 对象扩展操作符</h3><p>ES6中添加了数组的扩展操作符，让我们在操作数组时更加简便，美中不足的是并不支持对象扩展操作符，但是在ES9开始，这一功能也得到了支持，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj1 = { foo: &#39;bar&#39;, x: 42 };
var obj2 = { foo: &#39;baz&#39;, y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: &quot;bar&quot;, x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: &quot;baz&quot;, x: 42, y: 13 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面便是一个简便的浅拷贝。这里有一点小提示，就是<code>Object.assign()</code> 函数会触发 <code>setters</code>，而展开语法则不会。所以不能替换也不能模拟<code>Object.assign()</code> 。</p><p>如果存在相同的属性名，只有最后一个会生效。</p><h3 id="promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#promise-prototype-finally" aria-hidden="true">#</a> Promise.prototype.finally()</h3><p><code>finally()</code>方法会返回一个<code>Promise</code>，当promise的状态变更，不管是变成<code>rejected</code>或者<code>fulfilled</code>，最终都会执行<code>finally()</code>的回调。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fetch(url)
      .then((res) =&gt; {
        console.log(res)
      })
      .catch((error) =&gt; { 
        console.log(error)
      })
      .finally(() =&gt; { 
        console.log(&#39;结束&#39;)
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es10-es2019" tabindex="-1"><a class="header-anchor" href="#es10-es2019" aria-hidden="true">#</a> ES10(ES2019)</h2><h3 id="array-prototype-flat-flatmap" tabindex="-1"><a class="header-anchor" href="#array-prototype-flat-flatmap" aria-hidden="true">#</a> Array.prototype.flat() / flatMap()</h3><p><code>flat()</code> 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。</p><p><code>flatMap()</code>与 <code>map()</code> 方法和深度为1的 <code>flat()</code> 几乎相同.，不过它会首先使用映射函数映射每个元素，然后将结果压缩成一个新数组，这样效率会更高。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr1 = [1, 2, 3, 4]

arr1.map(x =&gt; [x * 2]) // [[2], [4], [6], [8]]

arr1.flatMap(x =&gt; [x * 2]) // [2, 4, 6, 8]

// 深度为1
arr1.flatMap(x =&gt; [[x * 2]]) // [[2], [4], [6], [8]]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flatMap()</code>可以代替<code>reduce()</code> 与 <code>concat()</code>，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4]
arr.flatMap(x =&gt; [x, x * 2]) // [1, 2, 2, 4, 3, 6, 4, 8]
// 等价于
arr.reduce((acc, x) =&gt; acc.concat([x, x * 2]), []) // [1, 2, 2, 4, 3, 6, 4, 8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这是非常低效的，在每次迭代中，它创建一个必须被垃圾收集的新临时数组，并且它将元素从当前的累加器数组复制到一个新的数组中，而不是将新的元素添加到现有的数组中。</p><h3 id="string-prototype-trimstart-trimleft-trimend-trimright" tabindex="-1"><a class="header-anchor" href="#string-prototype-trimstart-trimleft-trimend-trimright" aria-hidden="true">#</a> String.prototype.trimStart() / trimLeft() / trimEnd() / trimRight()</h3><p>在ES5中，我们可以通过<code>trim()</code>来去掉字符首尾的空格，但是却无法只去掉单边的，但是在ES10之后，我们可以实现这个功能。</p><p>如果我们要去掉开头的空格，可以使用<code>trimStart()</code>或者它的别名<code>trimLeft()</code>，</p><p>同样的，如果我们要去掉结尾的空格，我们可以使用<code>trimEnd()</code>或者它的别名<code>trimRight()</code>。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const Str = &#39;   Hello world!  &#39;
console.log(Str) // &#39;   Hello world!  &#39;
console.log(Str.trimStart()) // &#39;Hello world!  &#39;
console.log(Str.trimLeft()) // &#39;Hello world!  &#39;
console.log(Str.trimEnd()) // &#39;   Hello world!&#39;
console.log(Str.trimRight()) // &#39;   Hello world!&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过这里有一点要注意的是，<code>trimStart()</code>跟<code>trimEnd()</code>才是标准方法，<code>trimLeft()</code>跟<code>trimRight()</code>只是别名。</p><p>在某些引擎里（例如Chrome），有以下的等式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String.prototype.trimLeft.name === &quot;trimStart&quot;

String.prototype.trimRight.name === &quot;trimEnd&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> Object.fromEntries()</h3><p><code>Object.fromEntries()</code> 方法把键值对列表转换为一个对象，它是<code>Object.entries()</code>的反函数。</p><p>例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const entries = new Map([
  [&#39;foo&#39;, &#39;bar&#39;],
  [&#39;baz&#39;, 42]
])

const obj = Object.fromEntries(entries)

console.log(obj) // Object { foo: &quot;bar&quot;, baz: 42 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#symbol-prototype-description" aria-hidden="true">#</a> Symbol.prototype.description</h3><p><code>description</code> 是一个只读属性，它会返回<code>Symbol</code>对象的可选描述的字符串。与 <code>Symbol.prototype.toString()</code> 不同的是它不会包含<code>Symbol()</code>的字符串。例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Symbol(&#39;desc&#39;).toString();   // &quot;Symbol(desc)&quot;
Symbol(&#39;desc&#39;).description;  // &quot;desc&quot;
Symbol(&#39;&#39;).description;      // &quot;&quot;
Symbol().description;        // undefined

// 具名 symbols
Symbol.iterator.toString();  // &quot;Symbol(Symbol.iterator)&quot;
Symbol.iterator.description; // &quot;Symbol.iterator&quot;

//全局 symbols
Symbol.for(&#39;foo&#39;).toString();  // &quot;Symbol(foo)&quot;
Symbol.for(&#39;foo&#39;).description; // &quot;foo&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-prototype-matchall" tabindex="-1"><a class="header-anchor" href="#string-prototype-matchall" aria-hidden="true">#</a> String.prototype.matchAll</h3><p><code>matchAll()</code> 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。并且返回一个不可重启的迭代器。例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var regexp = /t(e)(st(\\d?))/g
var str = &#39;test1test2&#39;

str.match(regexp) // [&#39;test1&#39;, &#39;test2&#39;]
str.matchAll(regexp) // RegExpStringIterator {}
[...str.matchAll(regexp)] // [[&#39;test1&#39;, &#39;e&#39;, &#39;st1&#39;, &#39;1&#39;, index: 0, input: &#39;test1test2&#39;, length: 4], [&#39;test2&#39;, &#39;e&#39;, &#39;st2&#39;, &#39;2&#39;, index: 5, input: &#39;test1test2&#39;, length: 4]]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function-prototype-tostring-返回注释与空格" tabindex="-1"><a class="header-anchor" href="#function-prototype-tostring-返回注释与空格" aria-hidden="true">#</a> Function.prototype.toString() 返回注释与空格</h3><p>在以往的版本中，<code>Function.prototype.toString()</code>得到的字符串是去掉空白符号的，但是从ES10开始会保留这些空格，如果是原生函数则返回你控制台看到的效果，例子如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(a, b) {
      return a + b;
}

console.log(sum.toString())
// &quot;function sum(a, b) {
//   return a + b;
//  }&quot;

console.log(Math.abs.toString()) // &quot;function abs() { [native code] }&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try-catch</h3><p>在以往的版本中，<code>try-catch</code>里<code>catch</code>后面必须带异常参数，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    // ES10之前
try {
      // tryCode
} catch (err) {
      // catchCode
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES10之后，这个参数却不是必须的，如果用不到，我们可以不用传，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
      console.log(&#39;Foobar&#39;)
} catch {
      console.error(&#39;Bar&#39;)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h3><p><strong>BigInt</strong> 是一种内置对象，它提供了一种方法来表示大于 <code>253 - 1</code> 的整数。这原本是 Javascript中可以用 <code>Number</code> 表示的最大数字。<strong>BigInt</strong> 可以表示任意大的整数。</p><p>可以用在一个整数字面量后面加 <code>n</code> 的方式定义一个 <code>BigInt</code> ，如：<code>10n</code>，或者调用函数<code>BigInt()</code>。</p><p>在以往的版本中，我们有以下的弊端：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 大于2的53次方的整数，无法保持精度
2 ** 53 === (2 ** 53 + 1)
// 超过2的1024次方的数值，无法表示
2 ** 1024 // Infinity

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES10引入<code>BigInt</code>之后，这个问题便得到了解决。</p><p>以下操作符可以和 <code>BigInt</code> 一起使用： <code>+</code>、<code>*</code>、<code>-</code>、<code>**</code>、<code>%</code> 。除 <code>&gt;&gt;&gt;</code> （无符号右移）之外的位操作也可以支持。因为 <code>BigInt</code> 都是有符号的， <code>&gt;&gt;&gt;</code> （无符号右移）不能用于 <code>BigInt</code>。<code>BigInt</code> 不支持单目 (<code>+</code>) 运算符。</p><p><code>/</code> 操作符对于整数的运算也没问题。可是因为这些变量是 <code>BigInt</code> 而不是 <code>BigDecimal</code> ，该操作符结果会向零取整，也就是说不会返回小数部分。</p><p><code>BigInt</code> 和 <code>Number</code>不是严格相等的，但是宽松相等的。</p><p>所以在<code>BigInt</code>出来以后，JS的原始类型便增加到了7个，如下：</p><ul><li>Boolean</li><li>Null</li><li>Undefined</li><li>Number</li><li>String</li><li>Symbol (ES6)</li><li>BigInt (ES10)</li></ul><h3 id="globalthis" tabindex="-1"><a class="header-anchor" href="#globalthis" aria-hidden="true">#</a> globalThis</h3><p><code>globalThis</code>属性包含类似于全局对象 <code>this</code>值。所以在全局环境下，我们有：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>globalThis === this // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import-语句" tabindex="-1"><a class="header-anchor" href="#import-语句" aria-hidden="true">#</a> import 语句</h3><p>静态的 import 语句用于导入由另一个模块导出的绑定。无论是否声明了 严格模式，导入的模块都运行在严格模式下。在浏览器中，import 语句只能在声明了 type=&quot;module 的 script 的标签中使用。</p><p>但是在ES10之后，我们有动态 import()，它不需要依赖 type=&quot;module 的script标签。</p><p>所以我们有以下例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> main <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> link <span class="token keyword">of</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;nav &gt; a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      link<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/modules/my-module.js&#39;</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    module<span class="token punctuation">.</span><span class="token function">loadPageInto</span><span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    main<span class="token punctuation">.</span>textContent <span class="token operator">=</span> err<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有元素与方法" tabindex="-1"><a class="header-anchor" href="#私有元素与方法" aria-hidden="true">#</a> 私有元素与方法</h3><p>在ES10之前，如果我们要实现一个简单的计数器组件，我们可能会这么写：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// web component 写法
class Counter extends HTMLElement {
      get x() { 
           return this.xValue
      }
      set x(value) {
              this.xValue = value
              window.requestAnimationFrame(this.render.bind(this))
      }

      clicked() {
            this.x++
      }

      constructor() {
            super()
            this.onclick = this.clicked.bind(this)
            this.xValue = 0
      }

      connectedCallback() { 
           this.render()
      }

      render() {
            this.textContent = this.x.toString()
      }
}
window.customElements.define(&#39;num-counter&#39;, Counter)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在ES10之后我们可以使用私有变量进行组件封装，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Counter extends HTMLElement {
      #xValue = 0

      get #x() { 
          return #xValue
      }
      set #x(value) {
            this.#xValue = value
            window.requestAnimationFrame(this.#render.bind(this))
      }

      #clicked() {
            this.#x++
      }

      constructor() {
            super();
            this.onclick = this.#clicked.bind(this)
      }

      connectedCallback() { 
           this.#render()
      }

      #render() {
            this.textContent = this.#x.toString()
      }
}
window.customElements.define(&#39;num-counter&#39;, Counter)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79);function y(S,k){const s=r("ExternalLinkIcon");return l(),t("div",null,[o,e("p",null,[n("虽然自定义的迭代器是一个有用的工具，但由于需要显式地维护其内部状态，因此需要谨慎地创建。生成器函数提供了一个强大的选择：它允许你定义一个包含自有迭代算法的函数， 同时它可以自动维护自己的状态。 生成器函数使用 "),e("a",v,[u,a(s)]),n("语法编写。 最初调用时，生成器函数不执行任何代码，而是返回一种称为Generator的迭代器。 通过调用生成器的下一个方法消耗值时，Generator函数将执行，直到遇到yield关键字。")]),m,e("p",null,[b,n(" 提供了一组静态方法用来对 "),e("a",p,[g,a(s)]),n(" 对象进行原子操作。")]),h,e("p",null,[n("具体的属性列表可查看："),e("a",x,[n("developer.mozilla.org/en-US/docs/…"),a(s)])]),f])}const E=d(c,[["render",y],["__file","index.html.vue"]]);export{E as default};
