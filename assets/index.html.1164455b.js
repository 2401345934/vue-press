import{_ as a,z as r,A as d,X as e,C as i,T as s,a6 as n,Q as m}from"./framework.fef63301.js";const t={},o=n(`<h1 id="_2022高频前端面试题合集之javascript篇" tabindex="-1"><a class="header-anchor" href="#_2022高频前端面试题合集之javascript篇" aria-hidden="true">#</a> 2022高频前端面试题合集之JavaScript篇</h1><h3 id="_1-根据下面-es6-构造函数的书写方式-要求写出-es5-的" tabindex="-1"><a class="header-anchor" href="#_1-根据下面-es6-构造函数的书写方式-要求写出-es5-的" aria-hidden="true">#</a> 1. 根据下面 <em>ES6</em> 构造函数的书写方式，要求写出 <em>ES5</em> 的</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Example { 
  constructor(name) { 
    this.name = name;
  }
  init() { 
    const fun = () =&gt; { console.log(this.name) }
    fun(); 
  } 
}
const e = new Example(&#39;Hello&#39;);
e.init();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Example(name) {
      &#39;use strict&#39;;
      if (!new.target) {
           throw new TypeError(&#39;Class constructor cannot be invoked without new&#39;);
      }
      this.name = name;
}

Object.defineProperty(Example.prototype, &#39;init&#39;, {
      enumerable: false,
      value: function () {
           &#39;use strict&#39;;
           if (new.target) {
               throw new TypeError(&#39;init is not a constructor&#39;);
           }
           var fun = function () {
               console.log(this.name);
           }
           fun.call(this);
      }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>解析：</p><p>此题的关键在于是否清楚 <em>ES6</em> 的 <em>class</em> 和普通构造函数的区别，记住它们有以下区别，就不会有遗漏：</p><ol><li><p><em>ES6</em> 中的 <em>class</em> 必须通过 <em>new</em> 来调用，不能当做普通函数调用，否则报错</p><p>因此，在答案中，加入了 <em>new.target</em> 来判断调用方式</p></li><li><p><em>ES6</em> 的 <em>class</em> 中的所有代码均处于严格模式之下</p></li></ol><p>因此，在答案中，无论是构造函数本身，还是原型方法，都使用了严格模式</p><ol start="3"><li><p><em>ES6</em> 中的原型方法是不可被枚举的</p><p>因此，在答案中，定义原型方法使用了属性描述符，让其不可枚举</p></li><li><p>原型上的方法不允许通过 <em>new</em> 来调用</p><p>因此，在答案中，原型方法中加入了 <em>new.target</em> 来判断调用方式</p></li></ol></blockquote><h3 id="_2-数组去重有哪些方法-美团-19-年" tabindex="-1"><a class="header-anchor" href="#_2-数组去重有哪些方法-美团-19-年" aria-hidden="true">#</a> 2. 数组去重有哪些方法？（美团 <em>19</em> 年）</h3><blockquote><p>参考答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 数字或字符串数组去重，效率高
function unique(arr) {
      var result = {}; // 利用对象属性名的唯一性来保证不重复
      for (var i = 0; i &lt; arr.length; i++) {
           if (!result[arr[i]]) {
               result[arr[i]] = true;
           }
      }
      return Object.keys(result); // 获取对象所有属性名的数组
}

// 任意数组去重，适配范围光，效率低
function unique(arr) {
      var result = []; // 结果数组
      for (var i = 0; i &lt; arr.length; i++) {
           if (!result.includes(arr[i])) {
               result.push(arr[i]);
           }
      }
      return result;
}

// 利用ES6的Set去重，适配范围广，效率一般，书写简单
function unique(arr) {
      return [...new Set(arr)]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_3-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_3-描述下列代码的执行结果" aria-hidden="true">#</a> 3. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>foo(typeof a);
function foo(p) {
    console.log(this);
    console.log(p);
    console.log(typeof b);
    let b = 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>报错，报错的位置在 <code>console.log(typeof b);</code></p><p>报错原因：<em>ReferenceError: Cannot access &#39;b&#39; before initialization</em></p></blockquote><blockquote><p>解析：</p><p>这道题考查的是 <em>ES6</em> 新增的声明变量关键字 <em>let</em> 以及暂时性死区的知识。<em>let</em> 和以前的 <em>var</em> 关键字不一样，无法在 <em>let</em> 声明变量之前访问到该变量，所以在 <em>typeof b</em> 的地方就会报错。</p></blockquote><h3 id="_4-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_4-描述下列代码的执行结果" aria-hidden="true">#</a> 4. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Foo {
    constructor(arr) { 
        this.arr = arr; 
    }
    bar(n) {
        return this.arr.slice(0, n);
    }
}
var f = new Foo([0, 1, 2, 3]);
console.log(f.bar(1));
console.log(f.bar(2).splice(1, 1));
console.log(f.arr);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>[ 0 ]<br> [ 1 ]<br> [ 0, 1, 2, 3 ]</p></blockquote><blockquote><p>解析：</p><p>主要考察的是数组相关的知识。 <em>f</em> 对象上面有一个属性 <em>arr</em>，<em>arr</em> 的值在初始化的时候会被初始化为  <em>[0, 1, 2, 3]</em> ，之后就完全是考察数组以及数组方法的使用了。</p></blockquote><h3 id="_5-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_5-描述下列代码的执行结果" aria-hidden="true">#</a> 5. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>01 function f(count) {
02    console.log(\`foo\${count}\`);
03    setTimeout(() =&gt; { console.log(\`bar\${count}\`); });
04 }
05 f(1);
06 f(2);
07 setTimeout(() =&gt; { f(3); });

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>foo1<br> foo2<br> bar1<br> bar2<br> foo3<br> bar3</p></blockquote><blockquote><p>解析：</p><p>这个完全是考察的异步的知识。调用 <em>f(1)</em>  的时候，会执行同步代码，打印出 <em>foo1</em>，然后 <em>03</em> 行的 <em>setTimeout</em> 被放入到异步执行队列，接下来调用 <em>f(2)</em>  的时候，打印出 <em>foo2</em>，后面 <em>03</em> 行的 <em>setTimeout</em> 又被放入到异步执行队列。然后执行 <em>07</em> 行的语句，被放入到异步执行队列。至此，所有同步代码就都执行完毕了。</p><p>接下来开始执行异步代码，那么大家时间没写，就都是相同的，所以谁先被放入到异步队列，谁就先执行，所以先打印出 <em>bar1</em>、然后是 <em>bar2</em>，接下来执行之前 <em>07</em> 行放入到异步队列里面的 <em>setTimeout</em>，先执行 <em>f</em> 函数里面的同步代码，打印出 <em>foo3</em>，然后是最后一个异步，打印出 <em>bar3</em></p></blockquote><h3 id="_6-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_6-描述下列代码的执行结果" aria-hidden="true">#</a> 6. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 2;
var b = 5;
console.log(a === 2 || 1 &amp;&amp; b === 3 || 4);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p><em>true</em></p><p>考察的是逻辑运算符。在 || 里面，只要有一个为真，后面的直接短路，都不用去计算。所以 <em>a === 2</em> 得到 <em>true</em> 之后直接短路了，返回 <em>true</em>。</p></blockquote><h3 id="_7-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_7-描述下列代码的执行结果" aria-hidden="true">#</a> 7. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export class ButtonWrapper {
    constructor(domBtnEl, hash) {
        this.domBtnEl = domBtnEl;
        this.hash = hash;
        this.bindEvent();
    }
    bindEvent() {
        this.domBtnEl.addEventListener(&#39;click&#39;, this.clickEvent, false);
    }
    detachEvent() {
        this.domBtnEl.removeEventListener(&#39;click&#39;, this.clickEvent);
    }
    clickEvent() {
        console.log(\`The hash of the button is: \${this.hash}\`);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>上面的代码导出了一个 <em>ButtonWrapper</em> 类，该类在被实例化的时候，实例化对象上面有两个属性，分别是 <em>domBtnEl</em> 和 <em>hash</em>，<em>domBtnEl</em> 是一个 <em>DOM</em> 节点，之后为这个 <em>domBtnEl</em> 绑定了点击事件，点击后打印出 <em>The hash of the button is: hash</em> 那句话。<em>detachEvent</em> 是移除点击事件，当调用实例化对象的 <em>detachEvent</em> 方法时，点击事件就会被移除。</p></blockquote><h3 id="_8-箭头函数有哪些特点" tabindex="-1"><a class="header-anchor" href="#_8-箭头函数有哪些特点" aria-hidden="true">#</a> 8. 箭头函数有哪些特点</h3><blockquote><p>参考答案：</p><ol><li><p>更简洁的语法，例如</p><ul><li>只有一个形参就不需要用括号括起来</li><li>如果函数体只有一行，就不需要放到一个块中</li><li>如果 <em>return</em> 语句是函数体内唯一的语句，就不需要 <em>return</em> 关键字</li></ul></li><li><p>箭头函数没有自己的 <em>this</em>，<em>arguments</em>，<em>super</em></p></li><li><p>箭头函数 <em>this</em> 只会从自己的作用域链的上一层继承 <em>this</em>。</p></li></ol></blockquote><h3 id="_9-说一说类的继承" tabindex="-1"><a class="header-anchor" href="#_9-说一说类的继承" aria-hidden="true">#</a> 9. 说一说类的继承</h3><blockquote><p>参考答案：</p><p>继承是面向对象编程中的三大特性之一。</p><p><em>JavaScript</em> 中的继承经过不断的发展，从最初的对象冒充慢慢发展到了今天的圣杯模式继承。</p><p>其中最需要掌握的就是<strong>伪经典继承</strong>和<strong>圣杯模式</strong>的继承。</p><p>很长一段时间，JS 继承使用的都是<strong>组合继承</strong>。这种继承也被称之为伪经典继承，该继承方式综合了原型链和盗用构造函数的方式，将两者的优点集中了起来。</p><p>组合继承弥补了之前原型链和盗用构造函数这两种方式各自的不足，是 <em>JavaScript</em> 中使用最多的继承方式。</p><p>组合继承最大的问题就是效率问题。最主要就是父类的构造函数始终会被调用两次：一次是在创建子类原型时调用，另一次是在子类构造函数中调用。</p><p>本质上，子类原型最终是要包含超类对象的所有实例属性，子类构造函数只要在执行时重写自己的原型就行了。</p><p>圣杯模式的继承解决了这一问题，其基本思路就是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型。</p></blockquote><blockquote><p>解析：该题主要考察就是对 <em>js</em> 中的继承是否了解，以及常见的继承的形式有哪些。最常用的继承就是<strong>组合继承</strong>（伪经典继承）和圣杯模式继承。下面附上 <em>js</em> 中这两种继承模式的详细解析。</p><p>下面是一个组合继承的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 基类
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.test = &quot;this is a test&quot;;
Person.prototype.testFunc = function () {
    console.log(&#39;this is a testFunc&#39;);
}

// 子类
var Student = function (name, age, gender, score) {
    Person.apply(this, [name, age]); // 盗用构造函数
    this.gender = gender;
    this.score = score;
}
Student.prototype = new Person(); // 改变 Student 构造函数的原型对象
Student.prototype.testStuFunc = function () {
    console.log(&#39;this is a testStuFunc&#39;);
}

// 测试
var zhangsan = new Student(&quot;张三&quot;, 18, &quot;男&quot;, 100);
console.log(zhangsan.name); // 张三
console.log(zhangsan.age); // 18
console.log(zhangsan.gender); // 男
console.log(zhangsan.score); // 100
console.log(zhangsan.test); // this is a test
zhangsan.testFunc(); // this is a testFunc
zhangsan.testStuFunc(); // this is a testStuFunc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们使用了组合继承的方式来实现继承，可以看到无论是基类上面的属性和方法，还是子类自己的属性和方法，都得到了很好的实现。</p><p>但是在组合继承中存在效率问题，比如在上面的代码中，我们其实调用了两次 <em>Person</em>，产生了两组 <em>name</em> 和 <em>age</em> 属性，一组在原型上，一组在实例上。</p><p>也就是说，我们在执行 <em>Student.prototype = new Person( )</em>  的时候，我们是想要 <em>Person</em> 原型上面的方法，属性是不需要的，因为属性之后可以通过 <em>Person.apply(this, [name, age])</em>  拿到，但是当你 <em>new Person( )</em>  的时候，会实例化一个 <em>Person</em> 对象出来，这个对象上面，属性和方法都有。</p><p>圣杯模式的继承解决了这一问题，其基本思路就是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型。</p><p>下面是一个圣杯模式的示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// target 是子类，origin 是基类
// target ---&gt; Student, origin ---&gt; Person
function inherit(target, origin) {
    function F() { }; // 没有任何多余的属性

    // origin.prototype === Person.prototype, origin.prototype.constructor === Person 构造函数
    F.prototype = origin.prototype;

    // 假设 new F() 出来的对象叫小 f
    // 那么这个 f 的原型对象 === F.prototype === Person.prototype
    // 那么 f.constructor === Person.prototype.constructor === Person 的构造函数
    target.prototype = new F();

    // 而 f 这个对象又是 target 对象的原型对象
    // 这意味着 target.prototype.constructor === f.constructor
    // 所以 target 的 constructor 会指向 Person 构造函数

    // 我们要让子类的 constructor 重新指向自己
    // 若不修改则会发现 constructor 指向的是父类的构造函数
    target.prototype.constructor = target;
}

// 基类
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.test = &quot;this is a test&quot;;
Person.prototype.testFunc = function () {
    console.log(&#39;this is a testFunc&#39;);
}

// 子类
var Student = function (name, age, gender, score) {
    Person.apply(this, [name, age]);
    this.gender = gender;
    this.score = score;
}
inherit(Student, Person); // 使用圣杯模式实现继承
// 在子类上面添加方法
Student.prototype.testStuFunc = function () {
    console.log(&#39;this is a testStuFunc&#39;);
}

// 测试
var zhangsan = new Student(&quot;张三&quot;, 18, &quot;男&quot;, 100);

console.log(zhangsan.name); // 张三
console.log(zhangsan.age); // 18
console.log(zhangsan.gender); // 男
console.log(zhangsan.score); // 100
console.log(zhangsan.test); // this is a test
zhangsan.testFunc(); // this is a testFunc
zhangsan.testStuFunc(); // this is a testStuFunc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们在 <em>inherit</em> 方法中创建了一个中间层，之后让 <em>F</em> 的原型和父类的原型指向同一地址，再让子类的原型指向这个 <em>F</em> 的实例化对象来实现了继承。</p><p>这样我们的继承，属性就不会像之前那样实例对象上一份，原型对象上一份，拥有两份。圣杯模式继承是目前 <em>js</em> 继承的最优解。</p><p>最后我再画个图帮助大家理解，如下图：</p><p>组合模式（伪经典模式）下的继承示意图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4550d93c80d64574854729dcdff963bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210808102111003"></p><p>圣杯模式下的继承示意图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d47742fb22584c429c83e45b7e6b06db~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210808101303180"></p></blockquote><h3 id="_10-new-操作符都做了哪些事" tabindex="-1"><a class="header-anchor" href="#_10-new-操作符都做了哪些事" aria-hidden="true">#</a> 10. <em>new</em> 操作符都做了哪些事？</h3><blockquote><p>参考答案：</p><p><em>new</em> 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。</p><p><em>new</em> 关键字会进行如下的操作：<br> 步骤 <em>1</em>：创建一个空的简单 <em>JavaScript</em> 对象，即 { } ;<br> 步骤 <em>2</em>：链接该对象到另一个对象（即设置该对象的原型对象）；<br> 步骤 <em>3</em>：将步骤 <em>1</em> 新创建的对象作为 <em>this</em> 的上下文；<br> 步骤 <em>4</em>：如果该函数没有返回对象，则返回 <em>this</em>。</p></blockquote><h3 id="_11-call、apply、bind-的区别" tabindex="-1"><a class="header-anchor" href="#_11-call、apply、bind-的区别" aria-hidden="true">#</a> 11. <em>call、apply、bind</em> 的区别 ？</h3><blockquote><p>参考答案：</p><p><em>call</em> 和 <em>apply</em> 的功能相同，区别在于传参的方式不一样:</p><ul><li><em>fn.call(obj, arg1, arg2, ...)</em>  调用一个函数, 具有一个指定的 <em>this</em> 值和分别地提供的参数(参数的列表)。</li><li><em>fn.apply(obj, [argsArray])</em>  调用一个函数，具有一个指定的 <em>this</em> 值，以及作为一个数组（或类数组对象）提供的参数。</li></ul><p><em>bind</em> 和 <em>call/apply</em> 有一个很重要的区别，一个函数被 <em>call/apply</em> 的时候，会直接调用，但是 <em>bind</em> 会创建一个新函数。当这个新函数被调用时，<em>bind( )</em>  的第一个参数将作为它运行时的 <em>this</em>，之后的一序列参数将会在传递的实参前传入作为它的参数。</p></blockquote><h3 id="_12-事件循环机制-宏任务、微任务" tabindex="-1"><a class="header-anchor" href="#_12-事件循环机制-宏任务、微任务" aria-hidden="true">#</a> 12. 事件循环机制（宏任务、微任务）</h3><blockquote><p>参考答案：</p><p>在 <em>js</em> 中任务会分为同步任务和异步任务。</p><p>如果是同步任务，则会在主线程（也就是 <em>js</em> 引擎线程）上进行执行，形成一个执行栈。但是一旦遇到异步任务，则会将这些异步任务交给异步模块去处理，然后主线程继续执行后面的同步代码。</p><p>当异步任务有了运行结果以后，就会在任务队列里面放置一个事件，这个任务队列由事件触发线程来进行管理。</p><p>一旦执行栈中所有的同步任务执行完毕，就代表着当前的主线程（<em>js</em> 引擎线程）空闲了，系统就会读取任务队列，将可以运行的异步任务添加到执行栈中，开始执行。</p><p>在 <em>js</em> 中，任务队列中的任务又可以被分为 <em>2</em> 种类型：宏任务（<em>macrotask</em>）与微任务（<em>microtask</em>）</p><p>宏任务可以理解为每次执行栈所执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中所执行的任务。</p><p>微任务可以理解为当前宏任务执行结束后立即执行的任务。</p></blockquote><h3 id="_13-你了解-node-中的事件循环机制吗-node11-版本以后有什么改变" tabindex="-1"><a class="header-anchor" href="#_13-你了解-node-中的事件循环机制吗-node11-版本以后有什么改变" aria-hidden="true">#</a> 13. 你了解 <em>node</em> 中的事件循环机制吗？<em>node11</em> 版本以后有什么改变</h3><blockquote><p>参考答案：</p><p><em>Node.js</em> 在主线程里维护了一个<strong>事件队列，<strong>当接到请求后，就将该请求作为一个事件放入这个队列中，然后继续接收其他请求。当主线程空闲时（没有请求接入时），就开始循环事件队列，检查队列中是否有要处理的事件，这时要分两种情况：如果是非 <em>I/O</em> 任务，就亲自处理，并通过回调函数返回到上层调用；如果是 <em>I/O</em> 任务，就从</strong>线程池</strong>中拿出一个线程来处理这个事件，并指定回调函数，然后继续循环队列中的其他事件。</p><p>当线程中的 <em>I/O</em> 任务完成以后，就执行指定的回调函数，并把这个完成的事件放到事件队列的尾部，等待事件循环，当主线程再次循环到该事件时，就直接处理并返回给上层调用。 这个过程就叫 <strong>事件循环</strong> (<em>Event Loop</em>)。</p><p>无论是 <em>Linux</em> 平台还是 <em>Windows</em> 平台，<em>Node.js</em> 内部都是通过<strong>线程池</strong>来完成异步 <em>I/O</em> 操作的，而 <em>LIBUV</em> 针对不同平台的差异性实现了统一调用。因此，<strong><em>Node.js</em> 的单线程仅仅是指 <em>JavaScript</em> 运行在单线程中，而并非 <em>Node.js</em> 是单线程。</strong></p><p><em>Node.JS</em> 的事件循环分为 <em>6</em> 个阶段：</p><ul><li><em>timers</em> 阶段：这个阶段执行 <em>timer</em>（ <em>setTimeout、setInterval</em> ）的回调</li><li><em>I/O callbacks</em> 阶段：处理一些上一轮循环中的少数未执行的 <em>I/O</em> 回调</li><li><em>idle、prepare</em> 阶段：仅 <em>Node.js</em> 内部使用</li><li><em>poll</em> 阶段：获取新的 <em>I/O</em> 事件, 适当的条件下 <em>Node.js</em> 将阻塞在这里</li><li><em>check</em> 阶段：执行 <em>setImmediate( )</em>  的回调</li><li><em>close callbacks</em> 阶段：执行 <em>socket</em> 的 <em>close</em> 事件回调</li></ul><p>事件循环的执行顺序为：</p><p>外部输入数据 –-&gt; 轮询阶段（ <em>poll</em> ）-–&gt; 检查阶段（ <em>check</em> ）-–&gt; 关闭事件回调阶段（ <em>close callback</em> ）–-&gt; 定时器检测阶段（ <em>timer</em> ）–-&gt; <em>I/O</em> 事件回调阶段（ <em>I/O callbacks</em> ）-–&gt;闲置阶段（ <em>idle、prepare</em> ）–-&gt;轮询阶段（按照该顺序反复运行）...</p><p>浏览器和 <em>Node.js</em> 环境下，微任务任务队列的执行时机不同</p><ul><li><em>Node.js</em> 端，微任务在事件循环的各个阶段之间执行</li><li>浏览器端，微任务在事件循环的宏任务执行完之后执行</li></ul><p><em>Node.js v11.0.0</em> 版本于 <em>2018</em> 年 <em>10</em> 月，主要有以下变化：</p><ol><li><em>V8</em> 引擎更新至版本 <em>7.0</em></li><li><em>http、https</em> 和 <em>tls</em> 模块默认使用 <em>WHESWG URL</em> 解析器。</li><li>隐藏子进程的控制台窗口默认改为了 <em>true</em>。</li><li>_FreeBSD 10_不再支持。</li><li>增加了多线程 <em>Worker Threads</em></li></ol></blockquote><h3 id="_14-什么是函数柯里化" tabindex="-1"><a class="header-anchor" href="#_14-什么是函数柯里化" aria-hidden="true">#</a> 14. 什么是函数柯里化？</h3><blockquote><p>参考答案：</p><p>柯里化（<em>currying</em>）又称部分求值。一个柯里化的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。</p><p>举个例子，就是把原本：</p><p><em>function(arg1,arg2)</em>  变成 <em>function(arg1)(arg2)</em><br><em>function(arg1,arg2,arg3)</em>  变成 <em>function(arg1)(arg2)(arg3)</em><br><em>function(arg1,arg2,arg3,arg4)</em>  变成 <em>function(arg1)(arg2)(arg3)(arg4)</em></p><p>总而言之，就是将：</p><p><em>function(arg1,arg2,…,argn)</em>  变成 <em>function(arg1)(arg2)…(argn)</em></p></blockquote><h3 id="_15-promise-all-方法的使用场景-数组中必须每一项都是-promise-对象吗-不是-promise-对象会如何处理" tabindex="-1"><a class="header-anchor" href="#_15-promise-all-方法的使用场景-数组中必须每一项都是-promise-对象吗-不是-promise-对象会如何处理" aria-hidden="true">#</a> 15. <em>promise.all</em> 方法的使用场景？数组中必须每一项都是 <em>promise</em> 对象吗？不是 <em>promise</em> 对象会如何处理 ？</h3><blockquote><p>参考答案：</p><p>*<strong>promise.all(promiseArray)</strong> * 方法是 <em>promise</em> 对象上的静态方法，该方法的作用是将多个 <em>promise</em> 对象实例包装，生成并返回一个新的 <em>promise</em> 实例。</p><p>此方法在集合多个 <em>promise</em> 的返回结果时很有用。</p><p>返回值将会按照参数内的 <em>promise</em> 顺序排列，而不是由调用 <em>promise</em> 的完成顺序决定。</p><p><strong><em>promise.all</em> 的特点</strong></p><p>接收一个_Promise_实例的数组或具有_Iterator_接口的对象</p><p>如果元素不是_Promise_对象，则使用_Promise.resolve_转成_Promise_对象</p><p>如果全部成功，状态变为_resolved_，返回值将组成一个数组传给回调</p><p>只有有一个失败，状态就变为 <em>rejected</em>，返回值将直接传递给回调 *all( )*的返回值，也是新的 <em>promise</em> 对象</p></blockquote><h3 id="_16-this-的指向哪几种" tabindex="-1"><a class="header-anchor" href="#_16-this-的指向哪几种" aria-hidden="true">#</a> 16. <em>this</em> 的指向哪几种 ？</h3><blockquote><p>参考答案：</p><p>总结起来，<em>this</em> 的指向规律有如下几条：</p><ul><li>在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 <em>this</em> 会被绑定到 <em>undefined</em> 上，在非严格模式下则会被绑定到全局对象 <em>window/global</em> 上。</li><li>一般使用 <em>new</em> 方法调用构造函数时，构造函数内的 <em>this</em> 会被绑定到新创建的对象上。</li><li>一般通过 <em>call/apply/bind</em> 方法显式调用函数时，函数体内的 <em>this</em> 会被绑定到指定参数的对象上。</li><li>一般通过上下文对象调用函数时，函数体内的 <em>this</em> 会被绑定到该对象上。</li><li>在箭头函数中，<em>this</em> 的指向是由外层（函数或全局）作用域来决定的。</li></ul></blockquote><h3 id="_17-js-中继承实现的几种方式" tabindex="-1"><a class="header-anchor" href="#_17-js-中继承实现的几种方式" aria-hidden="true">#</a> 17. <em>JS</em> 中继承实现的几种方式</h3><blockquote><p>参考答案：</p><p><em>JS</em> 的继承随着语言的发展，从最早的对象冒充到现在的圣杯模式，涌现出了很多不同的继承方式。每一种新的继承方式都是对前一种继承方式不足的一种补充。</p><ol><li>原型链继承</li></ol><ul><li><p>重点：让新实例的原型等于父类的实例。</p></li><li><p>特点：实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）</p></li><li><p>缺点：</p><ul><li><p>1、新实例无法向父类构造函数传参。</p></li><li><p>2、继承单一。</p></li><li><p>3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）</p></li></ul></li></ul><ol start="2"><li>借用构造函数继承</li></ol><ul><li><p>重点：用 <em>call( )</em>  和 <em>apply( )</em>  将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））</p></li><li><p>特点：<br> - 1、只继承了父类构造函数的属性，没有继承父类原型的属性。</p><ul><li>2、解决了原型链继承缺点1、2、3。</li><li>3、可以继承多个构造函数属性（call多个）。</li><li>4、在子实例中可向父实例传参。</li></ul></li><li><p>缺点：<br> - 1、只能继承父类构造函数的属性。</p><ul><li><p>2、无法实现构造函数的复用。（每次用每次都要重新调用）</p></li><li><p>3、每个新实例都有父类构造函数的副本，臃肿。</p></li></ul></li></ul><ol start="3"><li>组合模式（又被称之为伪经典模式）</li></ol><ul><li><p>重点：结合了两种模式的优点，传参和复用</p></li><li><p>特点：<br> - 1、可以继承父类原型上的属性，可以传参，可复用。<br> - 2、每个新实例引入的构造函数属性是私有的。</p></li><li><p>缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。</p></li></ul><ol start="4"><li>寄生组合式继承（圣杯模式）</li></ol><ul><li>重点：修复了组合继承的问题</li></ul></blockquote><h3 id="_18-什么是事件监听" tabindex="-1"><a class="header-anchor" href="#_18-什么是事件监听" aria-hidden="true">#</a> 18. 什么是事件监听</h3><blockquote><p>参考答案：</p><p>首先需要区别清楚事件监听和事件监听器。</p><p>在绑定事件的时候，我们需要对应的书写一个事件处理程序，来应对事件发生时的具体行为。</p><p>这个事件处理程序我们也称之为事件监听器。</p><p>当事件绑定好后，程序就会对事件进行监听，当用户触发事件时，就会执行对应的事件处理程序。</p><p>关于事件监听，<em>W3C</em> 规范中定义了 <em>3</em> 个事件阶段，依次是捕获阶段、目标阶段、冒泡阶段。</p><ul><li><strong>捕获</strong>阶段：在事件对象到达事件目标之前，事件对象必须从 <em>window</em> 经过目标的祖先节点传播到事件目标。 这个阶段被我们称之为捕获阶段。在这个阶段注册的事件监听器在事件到达其目标前必须先处理事件。</li><li><strong>目标</strong> 阶段：事件对象到达其事件目标。 这个阶段被我们称为目标阶段。一旦事件对象到达事件目标，该阶段的事件监听器就要对它进行处理。如果一个事件对象类型被标志为不能冒泡。那么对应的事件对象在到达此阶段时就会终止传播。</li><li><strong>冒泡</strong> 阶段：事件对象以一个与捕获阶段相反的方向从事件目标传播经过其祖先节点传播到 <em>window</em>。这个阶段被称之为冒泡阶段。在此阶段注册的事件监听器会对相应的冒泡事件进行处理。</li></ul></blockquote><h3 id="_19-什么是-js-的闭包-有什么作用" tabindex="-1"><a class="header-anchor" href="#_19-什么是-js-的闭包-有什么作用" aria-hidden="true">#</a> 19. 什么是 <em>js</em> 的闭包？有什么作用？</h3><blockquote><p>参考答案：</p><p>一个函数和对其周围状态（<em>lexical environment</em>，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是<strong>闭包</strong>（<em>closure</em>）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 <em>JavaScript</em> 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。</p><p>闭包的用处：</p><ol><li>匿名自执行函数</li><li>结果缓存</li><li>封装</li><li>实现类和继承</li></ol></blockquote><h3 id="_20-事件委托以及冒泡原理" tabindex="-1"><a class="header-anchor" href="#_20-事件委托以及冒泡原理" aria-hidden="true">#</a> 20. 事件委托以及冒泡原理</h3><blockquote><p>参考答案：</p><p>事件委托，又被称之为事件代理。在 <em>JavaScript</em> 中，添加到页面上的事件处理程序数量将直接关系到页面整体的运行性能。导致这一问题的原因是多方面的。</p><p>首先，每个函数都是对象，都会占用内存。内存中的对象越多，性能就越差。其次，必须事先指定所有事件处理程序而导致的 <em>DOM</em> 访问次数，会延迟整个页面的交互就绪时间。</p><p>对事件处理程序过多问题的解决方案就是事件委托。</p><p>事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。例如，<em>click</em> 事件会一直冒泡到 <em>document</em> 层次。也就是说，我们可以为整个页面指定一个 <em>onclick</em> 事件处理程序，而不必给每个可单击的元素分别添加事件处理程序。</p><p>事件冒泡（<em>event bubbling</em>），是指事件开始时由最具体的元素（文档中嵌套层次最深的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。</p></blockquote><h3 id="_21-let-const-var-的区别-什么是块级作用域-如何用" tabindex="-1"><a class="header-anchor" href="#_21-let-const-var-的区别-什么是块级作用域-如何用" aria-hidden="true">#</a> 21. <em>let const var</em> 的区别？什么是块级作用域？如何用？</h3><blockquote><p>参考答案：</p><ol><li><em>var</em> 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问，有变量提升。</li><li><em>let</em> 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明。</li><li><em>const</em> 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明。</li></ol><p>最初在 <em>JS</em> 中作用域有：全局作用域、函数作用域。没有块作用域的概念。</p><p><em>ES6</em> 中新增了块级作用域。块作用域由 { } 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 { } 也属于块作用域。</p><p>在以前没有块作用域的时候，在 if 或者 for 循环中声明的变量会泄露成全局变量，其次就是 { } 中的内层变量可能会覆盖外层变量。块级作用域的出现解决了这些问题。</p></blockquote><h3 id="_22-es5-的方法实现块级作用域-立即执行函数-es6-呢" tabindex="-1"><a class="header-anchor" href="#_22-es5-的方法实现块级作用域-立即执行函数-es6-呢" aria-hidden="true">#</a> 22. <em>ES5</em> 的方法实现块级作用域（立即执行函数） <em>ES6</em> 呢？</h3><blockquote><p>参考答案：</p><p><em>ES6</em> 原生支持块级作用域。块作用域由 { } 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 { } 也属于块作用域。</p><p>使用 <em>let</em> 声明的变量或者使用 <em>const</em> 声明的常量，只能在块作用域里访问，不能跨块访问。</p></blockquote><h3 id="_23-es6-箭头函数的特性" tabindex="-1"><a class="header-anchor" href="#_23-es6-箭头函数的特性" aria-hidden="true">#</a> 23. <em>ES6</em> 箭头函数的特性</h3><blockquote><p>参考答案：</p><ol><li><p>更简洁的语法，例如</p><ul><li>只有一个形参就不需要用括号括起来</li><li>如果函数体只有一行，就不需要放到一个块中</li><li>如果 <em>return</em> 语句是函数体内唯一的语句，就不需要 <em>return</em> 关键字</li></ul></li><li><p>箭头函数没有自己的 <em>this</em>，<em>arguments</em>，<em>super</em></p></li><li><p>箭头函数 <em>this</em> 只会从自己的作用域链的上一层继承 <em>this</em>。</p></li></ol></blockquote><h3 id="_24-箭头函数与普通函数的区别" tabindex="-1"><a class="header-anchor" href="#_24-箭头函数与普通函数的区别" aria-hidden="true">#</a> 24. 箭头函数与普通函数的区别 ？</h3><blockquote><p>参考答案：</p><ol><li><p>外形不同。箭头函数使用箭头定义，普通函数中没有</p></li><li><p>普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数。</p></li><li><p>**箭头函数不能用于构造函数，不能使用 <em>new</em>，**普通函数可以用于构造函数，以此创建对象实例。</p></li><li><p>**箭头函数中 <em>this</em> 的指向不同，**在普通函数中，<em>this</em> 总是指向调用它的对象，如果用作构造函数，<em>this</em> 指向创建的对象实例。<br> 箭头函数本身不创建 <em>this</em>，也可以说箭头函数本身没有 <em>this</em>，但是它在声明时可以捕获其所在上下文的 <em>this</em> 供自己使用。</p></li><li><p>每一个普通函数调用后都具有一个 <em>arguments</em> 对象，用来存储实际传递的参数。</p><p>但是箭头函数并没有此对象。<strong>取而代之用rest参数来解决</strong>。</p></li><li><p>箭头函数不能用于 <em>Generator</em> 函数，不能使用 <em>yeild</em> 关键字。</p></li><li><p>箭头函数不具有 <em>prototype</em> 原型对象。而普通函数具有 <em>prototype</em> 原型对象。</p></li><li><p>箭头函数不具有 <em>super</em>。</p></li><li><p>箭头函数不具有 <em>new.target</em>。</p></li></ol></blockquote><h3 id="_25-js-的基本数据类型有哪些-基本数据类型和引用数据类型的区别" tabindex="-1"><a class="header-anchor" href="#_25-js-的基本数据类型有哪些-基本数据类型和引用数据类型的区别" aria-hidden="true">#</a> 25. <em>JS</em> 的基本数据类型有哪些？基本数据类型和引用数据类型的区别</h3><blockquote><p>参考答案：</p><p>在 <em>JavaScript</em> 中，数据类型整体上来讲可以分为两大类：<strong>基本类型</strong>和<strong>引用数据类型</strong></p><p>基本数据类型，一共有 <em>6</em> 种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string，symbol，number，boolean，undefined，null

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <em>symbol</em> 类型是在 <em>ES6</em> 里面新添加的基本数据类型。</p><p>引用数据类型，就只有 <em>1</em> 种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>基本数据类型的值又被称之为原始值或简单值，而引用数据类型的值又被称之为复杂值或引用值。</p><p>两者的区别在于：</p><p><strong>原始值是表示 <em>JavaScript</em> 中可用的数据或信息的最底层形式或最简单形式。<strong>简单类型的值被称为原始值，是因为它们是</strong>不可细化</strong>的。</p><p>也就是说，数字是数字，字符是字符，布尔值是 <em>true</em> 或 <em>false</em>，<em>null</em> 和 <em>undefined</em> 就是 <em>null</em> 和 <em>undefined</em>。这些值本身很简单，不能够再进行拆分。由于原始值的数据大小是固定的，所以<strong>原始值的数据是存储于内存中的栈区里面的。</strong></p><p>在 <em>JavaScript</em> 中，对象就是一个引用值。因为对象可以向下拆分，拆分成多个简单值或者复杂值。<strong>引用值在内存中的大小是未知的，因为引用值可以包含任何值，而不是一个特定的已知值，所以引用值的数据都是存储于堆区里面。</strong></p><p>最后总结一下两者的区别：</p><ol><li><p>访问方式</p><ul><li>原始值：访问到的是值</li><li>引用值：访问到的是引用地址</li></ul></li><li><p>比较方式</p><ul><li>原始值：比较的是值</li><li>引用值：比较的是地址</li></ul></li><li><p>动态属性</p><ul><li>原始值：无法添加动态属性</li><li>引用值：可以添加动态属性</li></ul></li><li><p>变量赋值</p><ul><li>原始值：赋值的是值</li><li>引用值：赋值的是地址</li></ul></li></ol></blockquote><h3 id="_26-nan-是什么的缩写" tabindex="-1"><a class="header-anchor" href="#_26-nan-是什么的缩写" aria-hidden="true">#</a> 26. <em>NaN</em> 是什么的缩写</h3><blockquote><p>参考答案：</p><p><em>NaN</em> 的全称为 <em>Not a Number</em>，表示非数，或者说不是一个数。虽然 NaN 表示非数，但是它却属于 <em>number</em> 类型。</p><p><em>NaN</em> 有两个特点：</p><ol><li>任何涉及 <em>NaN</em> 的操作都会返回 <em>NaN</em></li><li><em>NaN</em> 和任何值都不相等，包括它自己本身</li></ol></blockquote><h3 id="_27-js-的作用域类型" tabindex="-1"><a class="header-anchor" href="#_27-js-的作用域类型" aria-hidden="true">#</a> 27. <em>JS</em> 的作用域类型</h3><blockquote><p>参考答案：</p><p>在 <em>JavaScript</em> 里面，作用域一共有 4 种：全局作用域，局部作用域、函数作用域以及 <em>eval</em> 作用域。</p><p>**全局作用域：**这个是默认的代码运行环境，一旦代码被载入，引擎最先进入的就是这个环境。</p><p>**局部作用域：**当使用 <em>let</em> 或者 <em>const</em> 声明变量时，这些变量在一对花括号中存在局部作用域，只能够在花括号内部进行访问使用。</p><p>**函数作用域：**当进入到一个函数的时候，就会产生一个函数作用域。函数作用域里面所声明的变量只在函数中提供访问使用。</p><p>**<em>eval</em> 作用域：**当调用 <em>eval( )</em>  函数的时候，就会产生一个 <em>eval</em> 作用域。</p></blockquote><h3 id="_28-undefined-null-返回的结果是什么-undefined-与-null-的区别在哪" tabindex="-1"><a class="header-anchor" href="#_28-undefined-null-返回的结果是什么-undefined-与-null-的区别在哪" aria-hidden="true">#</a> 28. <em>undefined==null</em> 返回的结果是什么？<em>undefined</em> 与 <em>null</em> 的区别在哪？</h3><blockquote><p>参考答案：</p><p>返回 <em>true</em>。</p><p>这两个值都表示“无”的意思。</p><p>通常情况下， 当我们试图访问某个不存在的或者没有赋值的变量时，就会得到一个 <em>undefined</em> 值。<em>Javascript</em> 会自动将声明是没有进行初始化的变量设为 <em>undifined</em>。</p><p>而 <em>null</em> 值表示空，<em>null</em> 不能通过 <em>Javascript</em> 来自动赋值，也就是说必须要我们自己手动来给某个变量赋值为 <em>null</em>。</p></blockquote><blockquote><p>解析：</p><p>那么为什么 <em>JavaScript</em> 要设置两个表示&quot;无&quot;的值呢？这其实是历史原因。</p><p><em>1995</em> 年 <em>JavaScript</em> 诞生时，最初像 <em>Java</em> 一样，只设置了 <em>null</em> 作为表示&quot;无&quot;的值。根据 <em>C</em> 语言的传统，<em>null</em> 被设计成可以自动转为_0_。</p><p>但是，<em>JavaScript</em> 的设计者，觉得这样做还不够，主要有以下两个原因。</p><ol><li><em>null</em> 像在 <em>Java</em> 里一样，被当成一个对象。但是，<em>JavaScript</em> 的数据类型分成原始类型（<em>primitive</em>）和合成类型（<em>complex</em>）两大类，作者觉得表示&quot;无&quot;的值最好不是对象。</li><li><em>JavaScript</em> 的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。作者觉得，如果 <em>null</em> 自动转为 <em>0</em>，很不容易发现错误。</li></ol><p>因此，作者又设计了一个 <em>undefined</em>。</p><p><strong>这里注意：先有 <em>null</em> 后有 <em>undefined</em> 出来，<em>undefined</em> 是为了填补之前的坑。</strong></p><p><em>JavaScript</em> 的最初版本是这样区分的：</p><p><em>null</em> 是一个表示&quot;无&quot;的对象（空对象指针），转为数值时为 <em>0</em>；</p><p>典型用法是：</p><ul><li>作为函数的参数，表示该函数的参数不是对象。</li><li>作为对象原型链的终点。</li></ul><p><em>undefined</em> 是一个表示&quot;无&quot;的原始值，转为数值时为 <em>NaN</em>。</p><p>典型用法是：</p><ul><li>变量被声明了，但没有赋值时，就等于 <em>undefined</em>。</li><li>调用函数时，应该提供的参数没有提供，该参数等于 <em>undefined</em>。</li><li>对象没有赋值的属性，该属性的值为 <em>undefined</em>。</li><li>函数没有返回值时，默认返回 <em>undefined</em>。</li></ul></blockquote><h3 id="_29-写一个函数判断变量类型" tabindex="-1"><a class="header-anchor" href="#_29-写一个函数判断变量类型" aria-hidden="true">#</a> 29. 写一个函数判断变量类型</h3><blockquote><p>参考答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getType(data){
    let type = typeof data;
    if(type !== &quot;object&quot;){
        return type
    }
    return Object.prototype.toString.call(data).replace(/^[object (\\S+)]$/,&#39;$1&#39;)
}
function Person(){}
console.log(getType(1)); // number
console.log(getType(true)); // boolean
console.log(getType([1,2,3])); // Array
console.log(getType(/abc/)); // RegExp
console.log(getType(new Date)); // Date
console.log(getType(new Person)); // Object
console.log(getType({})); // Object

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_30-js-的异步处理函数" tabindex="-1"><a class="header-anchor" href="#_30-js-的异步处理函数" aria-hidden="true">#</a> 30. <em>js</em> 的异步处理函数</h3><blockquote><p>参考答案：</p><p>在最早期的时候，<em>JavaScript</em> 中要实现异步操作，使用的就是 <em>Callback</em> 回调函数。</p><p>但是回调函数会产生回调地狱（<em>Callback Hell</em>）</p><p>之后 ES6 推出了 <em>Promise</em> 解决方案来解决回调地狱的问题。不过，虽然 <em>Promise</em> 作为 <em>ES6</em> 中提供的一种新的异步编程解决方案，但是它也有问题。比如，代码并没有因为新方法的出现而减少，反而变得更加复杂，同时理解难度也加大。</p><p>之后，就出现了基于 <em>Generator</em> 的异步解决方案。不过，这种方式需要编写外部的执行器，而执行器的代码写起来一点也不简单。当然也可以使用一些插件，比如 <em>co</em> 模块来简化执行器的编写。</p><p><em>ES7</em> 提出的 <em>async</em> 函数，终于让 <em>JavaScript</em> 对于异步操作有了终极解决方案。</p><p>实际上，<em>async</em> 只是生成器的一种语法糖而已，简化了外部执行器的代码，同时利用 <em>await</em> 替代 <em>yield</em>，<em>async</em> 替代生成器的<code>*</code>号。</p></blockquote><h3 id="_31-defer-与-async-的区别" tabindex="-1"><a class="header-anchor" href="#_31-defer-与-async-的区别" aria-hidden="true">#</a> 31. <em>defer</em> 与 <em>async</em> 的区别</h3><blockquote><p>参考答案：</p><p>按照惯例，所有 <em>script</em> 元素都应该放在页面的 <em>head</em> 元素中。这种做法的目的就是把<strong>所有外部文件（<em>CSS</em> 文件和 <em>JavaScript</em> 文件）的引用都放在相同的地方</strong>。可是，在文档的 <em>head</em> 元素中包含所有 <em>JavaScript</em> 文件，意味着必须等到全部 <em>JavaScript</em> 代码都被下载、解析和执行完成以后，才能开始呈现页面的内容（浏览器在遇到 <em>body</em> 标签时才开始呈现内容）。</p><p>对于那些需要很多 <em>JavaScript</em> 代码的页面来说，这无疑会导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口中将是一片空白。为了避免这个问题，现在 <strong><em>Web</em> 应用程序一般都全部 <em>JavaScript</em> 引用放在 <em>body</em> 元素中页面的内容后面</strong>。这样一来，在解析包含的 <em>JavaScript</em> 代码之前，页面的内容将完全呈现在浏览器中。而用户也会因为浏览器窗口显示空白页面的时间缩短而感到打开页面的速度加快了。</p><p>有了 <em>defer</em> 和 <em>async</em> 后，这种局面得到了改善。</p><p><strong><em>defer</em> （延迟脚本）</strong></p><p>延迟脚本：<em>defer</em> 属性只适用于外部脚本文件。</p><p>如果给 <em>script</em> 标签定义了_defer_ 属性，这个属性的作用是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，如果 <em>script</em> 元素中设置了 <em>defer</em> 属性，相当于告诉浏览器立即下载，但延迟执行。</p><p><strong><em>async</em>（异步脚本）</strong></p><p>异步脚本：<em>async</em> 属性也只适用于外部脚本文件，并告诉浏览器立即下载文件。</p><p><strong>但与 <em>defer</em> 不同的是：标记为 <em>async</em> 的脚本并不保证按照指定它们的先后顺序执行。</strong></p><p>所以总结起来，两者之间最大的差异就是在于脚本下载完之后何时执行，显然 <em>defer</em> 是最接近我们对于应用脚本加载和执行的要求的。</p><p><em>defer</em> 是立即下载但延迟执行，加载后续文档元素的过程将和脚本的加载并行进行（异步），但是脚本的执行要在所有元素解析完成之后，<em>DOMContentLoaded</em> 事件触发之前完成。<em>async</em> 是立即下载并执行，加载和渲染后续文档元素的过程将和 <em>js</em> 脚本的加载与执行并行进行（异步）。</p></blockquote><h3 id="_32-浏览器事件循环和任务队列" tabindex="-1"><a class="header-anchor" href="#_32-浏览器事件循环和任务队列" aria-hidden="true">#</a> 32. 浏览器事件循环和任务队列</h3><blockquote><p>参考答案：</p><p><em>JavaScript</em> 的异步机制由事件循环和任务队列构成。</p><p><em>JavaScript</em> 本身是单线程语言，所谓异步依赖于浏览器或者操作系统等完成。<em>JavaScript</em> 主线程拥有一个执行栈以及一个任务队列，主线程会依次执行代码，当遇到函数时，会先将函数入栈，函数运行完毕后再将该函数出栈，直到所有代码执行完毕。</p><p>遇到异步操作（例如：<em>setTimeout、Ajax</em>）时，异步操作会由浏览器(<em>OS</em>)执行，浏览器会在这些任务完成后，将事先定义的回调函数推入主线程的任务队列(<em>task queue</em>)中,当主线程的执行栈清空之后会读取任务队列中的回调函数,当任务队列被读取完毕之后,主线程接着执行,从而进入一个无限的循环，这就是事件循环。</p></blockquote><h3 id="_33-原型与原型链-美团-19年" tabindex="-1"><a class="header-anchor" href="#_33-原型与原型链-美团-19年" aria-hidden="true">#</a> 33. 原型与原型链 （美团 19年）</h3><blockquote><p>参考答案：</p><ul><li>每个对象都有一个 <code>__proto__</code> 属性，该属性指向自己的原型对象</li><li>每个构造函数都有一个 <code>prototype</code> 属性，该属性指向实例对象的原型对象</li><li>原型对象里的 <code>constructor</code> 指向构造函数本身</li></ul><p>如下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c9b041b778440e895578fcf64761a42~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210812161401493"></p><p>每个对象都有自己的原型对象，而原型对象本身，也有自己的原型对象，从而形成了一条原型链条。</p><p>当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。</p></blockquote><h3 id="_34-作用域与作用域链-美团-19年" tabindex="-1"><a class="header-anchor" href="#_34-作用域与作用域链-美团-19年" aria-hidden="true">#</a> 34. 作用域与作用域链 （美团 19年）</h3><blockquote><p>参考答案：</p><p>作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。<em>ES6</em> 之前 <em>JavaScript</em> 没有块级作用域，只有全局作用域和函数作用域。<em>ES6</em> 的到来，为我们提供了块级作用域。</p><p>作用域链指的是作用域与作用域之间形成的链条。当我们查找一个当前作用域没有定义的变量（自由变量）的时候，就会向上一级作用域寻找，如果上一级也没有，就再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链 。</p></blockquote><h3 id="_35-闭包及应用场景以及闭包缺点-美团-19年" tabindex="-1"><a class="header-anchor" href="#_35-闭包及应用场景以及闭包缺点-美团-19年" aria-hidden="true">#</a> 35. 闭包及应用场景以及闭包缺点 （美团 19年）</h3><blockquote><p>参考答案：</p><p>闭包的应用场景：</p><ol><li>匿名自执行函数</li><li>结果缓存</li><li>封装</li><li>实现类和继承</li></ol><p>闭包的缺点：</p><p>因为闭包的作用域链会引用包含它的函数的活动对象，导致这些活动对象不会被销毁，因此会占用更多的内存。</p></blockquote><h3 id="_36-继承方式-美团-19年" tabindex="-1"><a class="header-anchor" href="#_36-继承方式-美团-19年" aria-hidden="true">#</a> 36. 继承方式 （美团 19年）</h3><blockquote><p>参考答案：</p><p>参阅前面第 <em>9</em> 题以及第 <em>18</em> 题答案。</p></blockquote><h3 id="_37-原始值与引用值-美团-19年" tabindex="-1"><a class="header-anchor" href="#_37-原始值与引用值-美团-19年" aria-hidden="true">#</a> 37. 原始值与引用值 （美团 19年）</h3><blockquote><p>参考答案：</p><p><strong>原始值是表示 <em>JavaScript</em> 中可用的数据或信息的最底层形式或最简单形式。<strong>简单类型的值被称为原始值，是因为它们是</strong>不可细化</strong>的。</p><p>也就是说，数字是数字，字符是字符，布尔值是 <em>true</em> 或 <em>false</em>，<em>null</em> 和 <em>undefined</em> 就是 <em>null</em> 和 <em>undefined</em>。这些值本身很简单，不能够再进行拆分。由于原始值的数据大小是固定的，所以<strong>原始值的数据是存储于内存中的栈区里面的。</strong></p><p>在 <em>JavaScript</em> 中，对象就是一个引用值。因为对象可以向下拆分，拆分成多个简单值或者复杂值。<strong>引用值在内存中的大小是未知的，因为引用值可以包含任何值，而不是一个特定的已知值，所以引用值的数据都是存储于堆区里面。</strong></p><p>最后总结一下两者的区别：</p><ol><li><p>访问方式</p><ul><li>原始值：访问到的是值</li><li>引用值：访问到的是引用地址</li></ul></li><li><p>比较方式</p><ul><li>原始值：比较的是值</li><li>引用值：比较的是地址</li></ul></li><li><p>动态属性</p><ul><li>原始值：无法添加动态属性</li><li>引用值：可以添加动态属性</li></ul></li><li><p>变量赋值</p><ul><li>原始值：赋值的是值</li><li>引用值：赋值的是地址</li></ul></li></ol></blockquote><h3 id="_38-描述下列代码的执行结果" tabindex="-1"><a class="header-anchor" href="#_38-描述下列代码的执行结果" aria-hidden="true">#</a> 38. 描述下列代码的执行结果</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const first = () =&gt; (new Promise((resolve, reject) =&gt; {
    console.log(3);
    let p = new Promise((resolve, reject) =&gt; {
        console.log(7);
        setTimeout(() =&gt; {
            console.log(1);
        }, 0);
        setTimeout(() =&gt; {
            console.log(2);
            resolve(3);
        }, 0)
        resolve(4);
    });
    resolve(2);
    p.then((arg) =&gt; {
        console.log(arg, 5); // 1 bb
    });
    setTimeout(() =&gt; {
        console.log(6);
    }, 0);
}))
first().then((arg) =&gt; {
    console.log(arg, 7); // 2 aa
    setTimeout(() =&gt; {
        console.log(8);
    }, 0);
});
setTimeout(() =&gt; {
    console.log(9);
}, 0);
console.log(10);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>3<br> 7<br> 10<br> 4 5<br> 2 7<br> 1<br> 2<br> 6<br> 9<br> 8</p></blockquote><h3 id="_39-如何判断数组或对象-美团-19年" tabindex="-1"><a class="header-anchor" href="#_39-如何判断数组或对象-美团-19年" aria-hidden="true">#</a> 39. 如何判断数组或对象（美团 19年）</h3><blockquote><p>参考答案：</p><ol><li>通过 <em>instanceof</em> 进行判断</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,2,3,1];
console.log(arr instanceof Array) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过对象的 <em>constructor</em> 属性</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1,2,3,1];
console.log(arr.constructor === Array) // true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><em>Object.prototype.toString.call(arr)</em></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(Object.prototype.toString.call({name: &quot;jerry&quot;}));//[object Object]
console.log(Object.prototype.toString.call([]));//[object Array]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>可以通过 <em>ES6</em> 新提供的方法 <em>Array.isArray( )</em></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.isArray([]) //true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_40-对象深拷贝与浅拷贝-单独问了-object-assign-美团-19年" tabindex="-1"><a class="header-anchor" href="#_40-对象深拷贝与浅拷贝-单独问了-object-assign-美团-19年" aria-hidden="true">#</a> 40. 对象深拷贝与浅拷贝，单独问了 <em>Object.assign</em>（美团 19年）</h3><blockquote><p>参考答案：</p><ul><li><p><strong>浅拷贝</strong>：只是拷贝了基本类型的数据，而引用类型数据，复制后也是会发生引用，我们把这种拷贝叫做浅拷贝（浅复制）</p><p>浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。</p></li><li><p><strong>深拷贝</strong>：在堆中重新分配内存，并且把源对象所有属性都进行新建拷贝，以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，拷贝后的对象与原来的对象是完全隔离，互不影响。</p></li></ul><p><em>Object.assign</em> 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。但是 <em>Object.assign</em> 方法进行的是浅拷贝，拷贝的是对象的属性的引用，而不是对象本身。</p></blockquote><h3 id="_42-说说-instanceof-原理-并回答下面的题目-美团-19年" tabindex="-1"><a class="header-anchor" href="#_42-说说-instanceof-原理-并回答下面的题目-美团-19年" aria-hidden="true">#</a> 42. 说说 <em>instanceof</em> 原理，并回答下面的题目（美团 19年）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function A(){}
function B(){}
A.prototype = new B(); 
let a = new A(); 
console.log(a instanceof B) // true of false ?

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>答案为 <em>true</em>。</p><p><em>instanceof</em> 原理：</p><p><em>instanceof</em> 用于检测一个对象是否为某个构造函数的实例。</p><p>例如：<em>A instanceof B</em><br><em>instanceof</em> 用于检测对象 <em>A</em> 是不是 <em>B</em> 的实例，而检测是基于原型链进行查找的，也就是说 <em>B</em> 的 <em>prototype</em> 有没有在对象 <em>A</em> 的__<em>proto</em>__ 原型链上，如果有就返回 <em>true</em>，否则返回 <em>false</em></p></blockquote><h3 id="_43-内存泄漏-美团-19-年" tabindex="-1"><a class="header-anchor" href="#_43-内存泄漏-美团-19-年" aria-hidden="true">#</a> 43. 内存泄漏（美团 19 年）</h3><blockquote><p>参考答案：</p><p>内存泄漏（<em>Memory Leak</em>）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。</p><p><em>Javascript</em> 是一种高级语言，它不像 <em>C</em> 语言那样要手动申请内存，然后手动释放，<em>Javascript</em> 在声明变量的时候自动会分配内存，普通的类型比如 <em>number</em>，一般放在栈内存里，对象放在堆内存里，声明一个变量，就分配一些内存，然后定时进行垃圾回收。垃圾回收的任务由 <em>JavaScript</em> 引擎中的垃圾回收器来完成，它监视所有对象，并删除那些不可访问的对象。</p><p>基本的垃圾回收算法称为**“标记-清除”**，定期执行以下“垃圾回收”步骤:</p><ul><li>垃圾回收器获取根并**“标记”**(记住)它们。</li><li>然后它访问并“标记”所有来自它们的引用。</li><li>然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。</li><li>以此类推，直到有未访问的引用(可以从根访问)为止。</li><li>除标记的对象外，所有对象都被删除。</li></ul></blockquote><h3 id="_44-es6-新增哪些东西-让你自己说-美团-19-年" tabindex="-1"><a class="header-anchor" href="#_44-es6-新增哪些东西-让你自己说-美团-19-年" aria-hidden="true">#</a> 44. <em>ES6</em> 新增哪些东西？让你自己说（美团 19 年）</h3><blockquote><p>参考答案：</p><p><em>ES6</em> 新增内容众多，这里列举出一些关键的以及平时常用的新增内容：</p><ol><li>箭头函数</li><li>字符串模板</li><li>支持模块化（<em>import、export</em>）</li><li>类（<em>class、constructor、extends</em>）</li><li><em>let、const</em> 关键字</li><li>新增一些数组、字符串等内置构造函数方法，例如 <em>Array.from</em>、<em>Array.of</em> 、<em>Math.sign</em>、<em>Math.trunc</em> 等</li><li>新增一些语法，例如扩展操作符、解构、函数默认参数等</li><li>新增一种基本数据类型 <em>Symbol</em></li><li>新增元编程相关，例如 <em>proxy</em>、<em>Reflect</em></li><li><em>Set</em> 和 <em>Map</em> 数据结构</li><li><em>Promise</em></li><li><em>Generator</em> 生成器</li></ol></blockquote><h3 id="_45-weakmap、weakset-美团-19-年" tabindex="-1"><a class="header-anchor" href="#_45-weakmap、weakset-美团-19-年" aria-hidden="true">#</a> 45. <em>weakmap、weakset</em>（美团 <em>19</em> 年）</h3><blockquote><p>参考答案：</p><p><em>WeakSet</em> 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在 <em>WeakSet</em> 的集合中是唯一的</p><p>它和 <em>Set</em> 对象的区别有两点:</p><ul><li>与 <em>Set</em> 相比，<em>WeakSet</em> 只能是<strong>对象的集合</strong>，而不能是任何类型的任意值。</li><li><em>WeakSet</em> 持弱引用：集合中对象的引用为弱引用。 如果没有其他的对 <em>WeakSet</em> 中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着 <em>WeakSet</em> 中没有存储当前对象的列表。 正因为这样，<em>WeakSet</em> 是不可枚举的。</li></ul><p><em>WeakMap</em> 对象也是键值对的集合。它的<strong>键必须是对象类型</strong>，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 <em>GC</em> 回收掉。<em>WeakMap</em> 提供的接口与 <em>Map</em> 相同。</p><p>与 <em>Map</em> 对象不同的是，<em>WeakMap</em> 的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。</p></blockquote><h3 id="_46-为什么-es6-会新增-promise-美团-19年" tabindex="-1"><a class="header-anchor" href="#_46-为什么-es6-会新增-promise-美团-19年" aria-hidden="true">#</a> 46. 为什么 <em>ES6</em> 会新增 <em>Promise</em>（美团 19年）</h3><blockquote><p>参考答案：</p><p>在 <em>ES6</em> 以前，解决异步的方法是回调函数。但是回调函数有一个最大的问题就是回调地狱（<em>callback hell</em>），当我们的回调函数嵌套的层数过多时，就会导致代码横向发展。</p><p><em>Promise</em> 的出现就是为了解决回调地狱的问题。</p></blockquote><h3 id="_47-es5-实现继承-虾皮" tabindex="-1"><a class="header-anchor" href="#_47-es5-实现继承-虾皮" aria-hidden="true">#</a> 47. <em>ES5</em> 实现继承？（虾皮）</h3><blockquote><p>参考答案：</p><ol><li>借用构造函数实现继承</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent1(){
    this.name = &quot;parent1&quot;
}
function Child1(){
    Parent1.call(this);
    this.type = &quot;child1&quot;;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：<em>Child1</em> 无法继承 <em>Parent1</em> 的原型对象，并没有真正的实现继承 (部分继承)。</p><ol start="2"><li>借用原型链实现继承</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent2(){
    this.name = &quot;parent2&quot;;
    this.play = [1,2,3];
}
function Child2(){
    this.type = &quot;child2&quot;;
}
Child2.prototype = new Parent2();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：原型对象的属性是共享的。</p><ol start="3"><li>组合式继承</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function Parent3(){
    this.name = &quot;parent3&quot;;
    this.play = [1,2,3];
}
function Child3(){
    Parent3.call(this);
    this.type = &quot;child3&quot;;
}
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_48-科里化-搜狗" tabindex="-1"><a class="header-anchor" href="#_48-科里化-搜狗" aria-hidden="true">#</a> 48. 科里化？（搜狗）</h3><blockquote><p>参考答案：</p><p>柯里化，英语全称 <em>Currying</em>，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。</p><p>举个例子，就是把原本：</p><p><em>function(arg1,arg2)</em>  变成 <em>function(arg1)(arg2)</em><br><em>function(arg1,arg2,arg3)</em>  变成 <em>function(arg1)(arg2)(arg3)</em><br><em>function(arg1,arg2,arg3,arg4)</em>  变成 <em>function(arg1)(arg2)(arg3)(arg4)</em></p><p>总而言之，就是将：</p><p><em>function(arg1,arg2,…,argn)</em>  变成 <em>function(arg1)(arg2)…(argn)</em></p></blockquote><h3 id="_49-防抖和节流-虾皮" tabindex="-1"><a class="header-anchor" href="#_49-防抖和节流-虾皮" aria-hidden="true">#</a> 49. 防抖和节流？（虾皮）</h3><blockquote><p>参考答案：</p><p>我们在平时开发的时候，会有很多场景会频繁触发事件，比如说搜索框实时发请求，<em>onmousemove、resize、onscroll</em> 等，有些时候，我们并不能或者不想频繁触发事件，这时候就应该用到函数防抖和函数节流。</p><p>函数防抖(<em>debounce</em>)，指的是短时间内多次触发同一事件，只执行最后一次，或者只执行最开始的一次，中间的不执行。</p><p>函数节流(<em>throttle</em>)，指连续触发事件但是在 <em>n</em> 秒中只执行一次函数。即 <em>2n</em> 秒内执行 <em>2</em> 次... 。节流如字面意思，会稀释函数的执行频率。</p></blockquote><h3 id="_50-闭包-好未来-探讨了-40-分钟" tabindex="-1"><a class="header-anchor" href="#_50-闭包-好未来-探讨了-40-分钟" aria-hidden="true">#</a> 50. 闭包？（好未来---探讨了 <em>40</em> 分钟）</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>20</em> 题以及第 <em>36</em> 题答案。</p></blockquote><h3 id="_51-原型和原型链-字节" tabindex="-1"><a class="header-anchor" href="#_51-原型和原型链-字节" aria-hidden="true">#</a> 51. 原型和原型链？（字节）</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>34</em> 题答案。</p></blockquote><h3 id="_52-排序算法-时间复杂度、空间复杂度" tabindex="-1"><a class="header-anchor" href="#_52-排序算法-时间复杂度、空间复杂度" aria-hidden="true">#</a> 52. 排序算法---（时间复杂度、空间复杂度）</h3><blockquote><p>参考答案：</p><p>算法（<em>Algorithm</em>）是指用来操作数据、解决程序问题的一组方法。对于同一个问题，使用不同的算法，也许最终得到的结果是一样的，但在过程中消耗的资源和时间却会有很大的区别。</p><p>主要还是从算法所占用的「时间」和「空间」两个维度去考量。</p><ul><li>时间维度：是指执行当前算法所消耗的时间，我们通常用「时间复杂度」来描述。</li><li>空间维度：是指执行当前算法需要占用多少内存空间，我们通常用「空间复杂度」来描述。</li></ul><p>因此，评价一个算法的效率主要是看它的时间复杂度和空间复杂度情况。然而，有的时候时间和空间却又是「鱼和熊掌」，不可兼得的，那么我们就需要从中去取一个平衡点。</p><p>排序也称排序算法(<em>Sort Algorithm</em>)，排序是将<strong>一组数据</strong>，依<strong>指定的顺序</strong>进行<strong>排列的过程</strong>。</p><p>排序的分类分为<strong>内部排序</strong>和<strong>外部排序法</strong>。</p><ul><li>内部排序：指将需要处理的所有数据都加载到**内部存储器(内存)**中进行排序。</li><li>外部排序：<strong>数据量过大</strong>，无法全部加载到内存中，需要借助**外部存储(文件等)**进行排序。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52d4f819b8824955a7c5b42306ea8741~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210813134746501"></p></blockquote><h3 id="_53-浏览器事件循环和-node-事件循环-搜狗" tabindex="-1"><a class="header-anchor" href="#_53-浏览器事件循环和-node-事件循环-搜狗" aria-hidden="true">#</a> 53. 浏览器事件循环和 <em>node</em> 事件循环（搜狗）</h3><blockquote><p>参考答案：</p><ol><li>浏览器中的 <em>Event Loop</em></li></ol><p>事件循环中的异步队列有两种：<em>macro</em>（宏任务）队列和 <em>micro</em>（微任务）队列。<strong>宏任务队列可以有多个，微任务队列只有一个</strong>。</p><ul><li>常见的 <em>macro-task</em> 比如：<em>setTimeout、setInterval、 setImmediate、script</em>（整体代码）、 <em>I/O</em> 操作、<em>UI</em> 渲染等。</li><li>常见的 <em>micro-task</em> 比如: <em>process.nextTick、new Promise( ).then</em>(回调)、<em>MutationObserver</em>(<em>html5</em> 新特性) 等。</li></ul><p>当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。</p><ol start="2"><li><em>Node</em> 中的事件循环</li></ol><p><em>Node</em> 中的 <em>Event Loop</em> 和浏览器中的是完全不相同的东西。<em>Node.js</em> 采用 <em>V8</em> 作为 <em>js</em> 的解析引擎，而 <em>I/O</em> 处理方面使用了自己设计的 <em>libuv</em>，<em>libuv</em> 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的 <em>API</em>，事件循环机制也是它里面的实现。</p><p><em>Node.JS</em> 的事件循环分为 <em>6</em> 个阶段：</p><ul><li><em>timers</em> 阶段：这个阶段执行 <em>timer</em>（ <em>setTimeout、setInterval</em> ）的回调</li><li><em>I/O callbacks</em> 阶段：处理一些上一轮循环中的少数未执行的 <em>I/O</em> 回调</li><li><em>idle、prepare</em> 阶段：仅 <em>Node.js</em> 内部使用</li><li><em>poll</em> 阶段：获取新的 <em>I/O</em> 事件, 适当的条件下 <em>Node.js</em> 将阻塞在这里</li><li><em>check</em> 阶段：执行 <em>setImmediate( )</em>  的回调</li><li><em>close callbacks</em> 阶段：执行 <em>socket</em> 的 <em>close</em> 事件回调</li></ul><p><em>Node.js</em> 的运行机制如下:</p><ul><li><em>V8</em> 引擎解析 <em>JavaScript</em> 脚本。</li><li>解析后的代码，调用 <em>Node API</em>。</li><li><em>libuv</em> 库负责 <em>Node API</em> 的执行。它将不同的任务分配给不同的线程，形成一个 <em>Event Loop</em>（事件循环），以异步的方式将任务的执行结果返回给 <em>V8</em> 引擎。</li><li><em>V8</em> 引擎再将结果返回给用户。</li></ul></blockquote><h3 id="_54-闭包的好处" tabindex="-1"><a class="header-anchor" href="#_54-闭包的好处" aria-hidden="true">#</a> 54. 闭包的好处</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>20</em> 题以及第 <em>36</em> 题答案。</p></blockquote><h3 id="_55-let、const、var-的区别" tabindex="-1"><a class="header-anchor" href="#_55-let、const、var-的区别" aria-hidden="true">#</a> 55. <em>let、const、var</em> 的区别</h3><blockquote><p>参考答案：</p><ol><li><em>var</em> 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问，有变量提升。</li><li><em>let</em> 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明。</li><li><em>const</em> 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明。</li></ol></blockquote><h3 id="_56-闭包、作用域-可以扩充到作用域链" tabindex="-1"><a class="header-anchor" href="#_56-闭包、作用域-可以扩充到作用域链" aria-hidden="true">#</a> 56. 闭包、作用域（可以扩充到作用域链）</h3><blockquote><p>参考答案：</p><p><strong>什么是作业域?</strong></p><p>ES5 中只存在两种作用域：全局作用域和函数作用域。在 JavaScript 中，我们将作用域定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套子作用域中根据标识符名称进行变量(变量名或者函数名)查找。</p><p><strong>什么是作用域链?</strong></p><p>当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止,，而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。</p><p><strong>闭包产生的本质</strong></p><p>当前环境中存在指向父级作用域的引用</p><p><strong>什么是闭包</strong></p><p>闭包是一种特殊的对象，它由两部分组成：执行上下文(代号 A)，以及在该执行上下文中创建的函数 (代号 B)，当 B 执行时，如果访问了 A 中变量对象的值，那么闭包就会产生，且在 Chrome 中使用这个执行上下文 A 的函数名代指闭包。</p><p><strong>一般如何产生闭包</strong></p><ul><li>返回函数</li><li>函数当做参数传递</li></ul><p><strong>闭包的应用场景</strong></p><ul><li>柯里化 bind</li><li>模块</li></ul></blockquote><h3 id="_57-promise" tabindex="-1"><a class="header-anchor" href="#_57-promise" aria-hidden="true">#</a> 57. <em>Promise</em></h3><blockquote><p>参考答案：</p><p><em>Promise</em> 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理且更强大。它最早由社区提出并实现，_ES6_将其写进了语言标准，统一了用法，并原生提供了_Promise_对象。</p><p><strong>特点</strong></p><ol><li><p>对象的状态不受外界影响 （<em>3</em> 种状态）</p><ul><li><em>Pending</em> 状态（进行中）</li><li><em>Fulfilled</em> 状态（已成功）</li><li><em>Rejected</em> 状态（已失败）</li></ul></li><li><p>一旦状态改变就不会再变 （两种状态改变：成功或失败）</p><ul><li><em>Pending</em> -&gt; <em>Fulfilled</em></li><li><em>Pending</em> -&gt; <em>Rejected</em></li></ul></li></ol><p><strong>用法</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var promise = new Promise(function(resolve, reject){
    // ... some code
    
    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_58-实现一个函数-对一个url进行请求-失败就再次请求-超过最大次数就走失败回调-任何一次成功都走成功回调" tabindex="-1"><a class="header-anchor" href="#_58-实现一个函数-对一个url进行请求-失败就再次请求-超过最大次数就走失败回调-任何一次成功都走成功回调" aria-hidden="true">#</a> 58. 实现一个函数,对一个url进行请求,失败就再次请求,超过最大次数就走失败回调,任何一次成功都走成功回调</h3><blockquote><p>参考答案：</p><p>示例代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
    @params url: 请求接口地址;
    @params body: 设置的请求体;
    @params succ: 请求成功后的回调
    @params error: 请求失败后的回调
    @params maxCount: 设置请求的数量
*/
function request(url, body, succ, error, maxCount = 5) {
    return fetch(url, body)
        .then(res =&gt; succ(res))
        .catch(err =&gt; {
            if (maxCount &lt;= 0) return error(&#39;请求超时&#39;);
            return request(url, body, succ, error, --maxCount);
        });
}

// 调用请求函数
request(&#39;https://java.some.com/pc/reqCount&#39;, { method: &#39;GET&#39;, headers: {} },
    (res) =&gt; {
        console.log(res.data);
    },
    (err) =&gt; {
        console.log(err);
    })

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_59-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_59-冒泡排序" aria-hidden="true">#</a> 59. 冒泡排序</h3><blockquote><p>参考答案：</p><p>冒泡排序的核心思想是：</p><ol><li>比较相邻的两个元素，如果前一个比后一个大或者小（取决于排序的顺序是小到大还是大到小），则交换位置。</li><li>比较完第一轮的时候，最后一个元素是最大或最小的元素。</li><li>这时候最后一个元素已经是最大或最小的了，所以下一次冒泡的时候最后一个元素不需要参与比较。</li></ol><p>示例代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function bSort(arr) {
    var len = arr.length;
    // 外层 for 循环控制冒泡的次数
    for (var i = 0; i &lt; len - 1; i++) {
        for (var j = 0; j &lt; len - 1 - i; j++) {
            // 内层 for 循环控制每一次冒泡需要比较的次数
            // 因为之后每一次冒泡的两两比较次数会越来越少，所以 -i
            if (arr[j] &gt; arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//举个数组
myArr = [20, -1, 27, -7, 35];
//使用函数
console.log(bSort(myArr)); // [ -7, -1, 20, 27, 35 ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_60-数组降维" tabindex="-1"><a class="header-anchor" href="#_60-数组降维" aria-hidden="true">#</a> 60. 数组降维</h3><blockquote><p>参考答案：</p><p>数组降维就是将一个嵌套多层的数组进行降维操作，也就是对数组进行扁平化。在 <em>ES5</em> 时代我们需要自己手写方法或者借助函数库来完成，但是现在可以使用 <em>ES6</em> 新提供的数组方法 <em>flat</em> 来完成数组降维操作。</p></blockquote><blockquote><p>解析：使用 <em>flat</em> 方法会接收一个参数，这个参数是数值类型，是要处理扁平化数组的深度，生成后的新数组是独立存在的，不会对原数组产生影响。</p><p><em>flat</em> 方法的语法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var newArray = arr.flat([depth])

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 <em>depth</em> 指定要提取嵌套数组结构的深度，默认值为 <em>1</em>。</p><p>示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());      // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2));     // [1, 2, 3, 4, 5, 6]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码定义了一个层嵌套的数组，默认情况下只会拍平一层数组，也就是把原来的三维数组降低到了二维数组。在传入的参数为 <em>2</em> 时，则会降低两维，成为一个一维数组。</p><p>使用 <em>Infinity</em>，可展开任意深度的嵌套数组，示例如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arr.flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7, 8]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在数组中有空项的时候，使用 <em>flat</em> 方法会将中的空项进行移除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, , 4, 5];
console.log(arr.flat()); // [1, 2, 4, 5]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，数组中第三项是空值，在使用 <em>flat</em> 后会对空项进行移除。</p></blockquote><h3 id="_61-call-apply-bind" tabindex="-1"><a class="header-anchor" href="#_61-call-apply-bind" aria-hidden="true">#</a> 61. <em>call apply bind</em></h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>11</em> 题答案。</p></blockquote><h3 id="_62-promise-代码题" tabindex="-1"><a class="header-anchor" href="#_62-promise-代码题" aria-hidden="true">#</a> 62. promise 代码题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Promise((resolve, reject) =&gt; {
    reject(1);
    console.log(2);
    resolve(3);
    console.log(4);
}).then((res) =&gt; { console.log(res) })
    .catch(res =&gt; { console.log(&#39;reject1&#39;) })
try {
    new Promise((resolve, reject) =&gt; {
        throw &#39;error&#39;
    }).then((res) =&gt; { console.log(res) })
        .catch(res =&gt; { console.log(&#39;reject2&#39;) })
} catch (err) {
    console.log(err)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考答案：</p><p>2<br> 4<br> reject1<br> reject2</p><p>直播课或者录播课进行解析。</p></blockquote><h3 id="_63-proxy-是实现代理-可以改变-js-底层的实现方式-然后说了一下和-object-defineproperty-的区别" tabindex="-1"><a class="header-anchor" href="#_63-proxy-是实现代理-可以改变-js-底层的实现方式-然后说了一下和-object-defineproperty-的区别" aria-hidden="true">#</a> 63. <em>proxy</em> 是实现代理，可以改变 <em>js</em> 底层的实现方式, 然后说了一下和 <em>Object.defineProperty</em> 的区别</h3><blockquote><p>参考答案：</p><p>两者的区别总结如下：</p><ul><li>代理原理：Object.defineProperty的原理是通过将数据属性转变为存取器属性的方式实现的属性读写代理。而Proxy则是因为这个内置的Proxy对象内部有一套监听机制，在传入handler对象作为参数构造代理对象后，一旦代理对象的某个操作触发，就会进入handler中对应注册的处理函数，此时我们就可以有选择的使用Reflect将操作转发被代理对象上。</li><li>代理局限性：Object.defineProperty始终还是局限于属性层面的读写代理，对于对象层面以及属性的其它操作代理它都无法实现。鉴于此，由于数组对象push、pop等方法的存在，它对于数组元素的读写代理实现的并不完全。而使用Proxy则可以很方便的监视数组操作。</li><li>自我代理：Object.defineProperty方式可以代理到自身（代理之后使用对象本身即可），也可以代理到别的对象身上（代理之后需要使用代理对象）。Proxy方式只能代理到Proxy实例对象上。这一点在其它说法中是Proxy对象不需要侵入对象就可以实现代理，实际上Object.defineProperty方式也可以不侵入。</li></ul></blockquote><h3 id="_64-使用-es5-与-es6-分别实现继承" tabindex="-1"><a class="header-anchor" href="#_64-使用-es5-与-es6-分别实现继承" aria-hidden="true">#</a> 64. 使用 <em>ES5</em> 与 <em>ES6</em> 分别实现继承</h3><blockquote><p>参考答案：</p><p>如果是使用 <em>ES5</em> 来实现继承，那么现在的最优解是使用圣杯模式。圣杯模式的核心思想就是不通过调用父类构造函数来给子类原型赋值，而是取得父类原型的一个副本，然后将返回的新对象赋值给子类原型。具体代码可以参阅前面第 <em>9</em> 题的解析。</p><p><em>ES6</em> 新增了 <em>extends</em> 关键字，直接使用该关键字就能够实现继承。</p></blockquote><h3 id="_65-深拷贝" tabindex="-1"><a class="header-anchor" href="#_65-深拷贝" aria-hidden="true">#</a> 65. 深拷贝</h3><blockquote><p>参考答案：</p><p>有深拷贝就有浅拷贝。</p><p>浅拷贝就是只拷贝对象的引用，而不深层次的拷贝对象的值，多个对象指向堆内存中的同一对象，任何一个修改都会使得所有对象的值修改，因为它们共用一条数据。</p><p>深拷贝不是单纯的拷贝一份引用数据类型的引用地址，而是将引用类型的值全部拷贝一份，形成一个新的引用类型，这样就不会发生引用错乱的问题，使得我们可以多次使用同样的数据，而不用担心数据之间会起冲突。</p></blockquote><blockquote><p>解析：</p><p>「深拷贝」就是在拷贝数据的时候，将数据的所有<strong>引用结构</strong>都拷贝一份。简单的说就是，在内存中存在两个数据结构完全相同又相互独立的数据，将引用型类型进行复制，而不是只复制其引用关系。</p><p>分析下怎么做「深拷贝」：</p><ol><li>首先假设深拷贝这个方法已经完成，为 deepClone</li><li>要拷贝一个数据，我们肯定要去遍历它的属性，如果这个对象的属性仍是对象，继续使用这个方法，如此往复</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function deepClone(o1, o2) {
    for (let k in o2) {
        if (typeof o2[k] === &#39;object&#39;) {
            o1[k] = {};
            deepClone(o1[k], o2[k]);
        } else {
            o1[k] = o2[k];
        }
    }
}
// 测试用例
let obj = {
    a: 1,
    b: [1, 2, 3],
    c: {}
};
let emptyObj = Object.create(null);
deepClone(emptyObj, obj);
console.log(emptyObj.a == obj.a);
console.log(emptyObj.b == obj.b);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归容易造成爆栈，尾部调用可以解决递归的这个问题，<em>Chrome</em> 的 <em>V8</em> 引擎做了尾部调用优化，我们在写代码的时候也要注意尾部调用写法。递归的爆栈问题可以通过将递归改写成枚举的方式来解决，就是通过 <em>for</em> 或者 <em>while</em> 来代替递归。</p></blockquote><h3 id="_66-async-与-await-的作用" tabindex="-1"><a class="header-anchor" href="#_66-async-与-await-的作用" aria-hidden="true">#</a> 66. <em>async</em> 与 <em>await</em> 的作用</h3><blockquote><p>参考答案：</p><p><em>async</em> 是一个修饰符，<em>async</em> 定义的函数会默认的返回一个 <em>Promise</em> 对象 <em>resolve</em> 的值，因此对 <em>async</em> 函数可以直接进行 <em>then</em> 操作，返回的值即为 <em>then</em> 方法的传入函数。</p><p><em>await</em> 关键字只能放在 <em>async</em> 函数内部， <em>await</em> 关键字的作用就是获取 <em>Promise</em> 中返回的内容， 获取的是 <em>Promise</em> 函数中 <em>resolve</em> 或者 <em>reject</em> 的值。</p></blockquote><h3 id="_67-数据的基础类型-原始类型-有哪些" tabindex="-1"><a class="header-anchor" href="#_67-数据的基础类型-原始类型-有哪些" aria-hidden="true">#</a> 67. 数据的基础类型（原始类型）有哪些</h3><blockquote><p>参考答案：</p><p><em>JavaScript</em> 中的基础数据类型，一共有 <em>6</em> 种：</p><p><em>string，symbol，number，boolean，undefined，null</em></p><p>其中 <em>symbol</em> 类型是在 <em>ES6</em> 里面新添加的基本数据类型。</p></blockquote><h3 id="_68-typeof-null-返回结果" tabindex="-1"><a class="header-anchor" href="#_68-typeof-null-返回结果" aria-hidden="true">#</a> 68. <em>typeof null</em> 返回结果</h3><blockquote><p>参考答案：</p><p>返回 <em>object</em></p></blockquote><blockquote><p>解析：至于为什么会返回 <em>object</em>，这实际上是来源于 <em>JavaScript</em> 从第一个版本开始时的一个 <em>bug</em>，并且这个 <em>bug</em> 无法被修复。修复会破坏现有的代码。</p><p>原理这是这样的，不同的对象在底层都表现为二进制，在 <em>JavaScript</em> 中二进制前三位都为 <em>0</em> 的话会被判断为 <em>object</em> 类型，<em>null</em> 的二进制全部为 <em>0</em>，自然前三位也是 <em>0</em>，所以执行 <em>typeof</em> 值会返回 <em>object</em>。</p></blockquote><h3 id="_69-对变量进行类型判断的方式有哪些" tabindex="-1"><a class="header-anchor" href="#_69-对变量进行类型判断的方式有哪些" aria-hidden="true">#</a> 69. 对变量进行类型判断的方式有哪些</h3>`,154),c=n('<p>参考答案：</p><p>常用的方法有 <em>4</em> 种：</p><ol><li><em>typeof</em></li></ol><p><em>typeof</em> 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 <em>7</em> 种：<em>number、boolean、symbol、string、object、undefined、function</em> 等。</p><ol start="2"><li><em>instanceof</em></li></ol><p><em>instanceof</em> 是用来判断 <em>A</em> 是否为 <em>B</em> 的实例，表达式为：<em>A instanceof B</em>，如果 <em>A</em> 是 <em>B</em> 的实例，则返回 <em>true</em>,否则返回 <em>false</em>。 在这里需要特别注意的是：<em>instanceof</em> 检测的是原型。</p><ol start="3"><li><em>constructor</em></li></ol><p>当一个函数 <em>F</em> 被定义时，<em>JS</em> 引擎会为 <em>F</em> 添加 <em>prototype</em> 原型，然后再在 <em>prototype</em> 上添加一个 <em>constructor</em> 属性，并让其指向 <em>F</em> 的引用。</p><ol start="4"><li><em>toString</em></li></ol>',9),u=e("em",null,"toString( )",-1),v=e("em",null,"Object",-1),p={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},b=e("em",null,"[object Xxx]",-1),h=e("em",null,"Xxx",-1),g=n(`<p>对于 <em>Object</em> 对象，直接调用 <em>toString( )</em>  就能返回  <em>[object Object]</em>  。而对于其他对象，则需要通过 <em>call / apply</em> 来调用才能返回正确的类型信息。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Object.prototype.toString.call(&#39;&#39;) ;  // [object String]
Object.prototype.toString.call(1) ;   // [object Number]
Object.prototype.toString.call(true) ;// [object Boolean]
Object.prototype.toString.call(Symbol());//[object Symbol]
Object.prototype.toString.call(undefined) ;// [object Undefined]
Object.prototype.toString.call(null) ;// [object Null]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=n(`<h3 id="_70-typeof-与-instanceof-的区别-instanceof-是如何实现" tabindex="-1"><a class="header-anchor" href="#_70-typeof-与-instanceof-的区别-instanceof-是如何实现" aria-hidden="true">#</a> 70. <em>typeof</em> 与 <em>instanceof</em> 的区别？ <em>instanceof</em> 是如何实现？</h3><blockquote><p>参考答案：</p><ol><li><em>typeof</em></li></ol><p><em>typeof</em> 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 <em>7</em> 种：<em>number、boolean、symbol、string、object、undefined、function</em> 等。</p><ol start="2"><li><em>instanceof</em></li></ol><p><em>instanceof</em> 是用来判断 <em>A</em> 是否为 <em>B</em> 的实例，表达式为：<em>A instanceof B</em>，如果 <em>A</em> 是 <em>B</em> 的实例，则返回 <em>true</em>,否则返回 <em>false</em>。 在这里需要特别注意的是：<em>instanceof</em> 检测的是原型。</p><p>用一段伪代码来模拟其内部执行过程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>instanceof (A,B) = {
    varL = A.__proto__;
    varR = B.prototype;
    if(L === R) {
        // A的内部属性 __proto__ 指向 B 的原型对象
        return true;
    }
    return false;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上述过程可以看出，当 <em>A</em> 的 <strong><em>proto</em></strong> 指向 <em>B</em> 的 <em>prototype</em> 时，就认为 <em>A</em> 就是 <em>B</em> 的实例。</p><p>需要注意的是，<em>instanceof</em> 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。</p><p>例如： <em>[ ] instanceof Object</em> 返回的也会是 <em>true</em>。</p></blockquote><h3 id="_71-引用类型有哪些-有什么特点" tabindex="-1"><a class="header-anchor" href="#_71-引用类型有哪些-有什么特点" aria-hidden="true">#</a> 71. 引用类型有哪些，有什么特点</h3><blockquote><p>参考答案：</p><p>JS 中七种内置类型（<em>null，undefined，boolean，number，string，symbol，object</em>）又分为两大类型</p><p>两大类型：</p><ul><li>基本类型： <code>null</code>，<code>undefined</code>，<code>boolean</code>，<code>number</code>，<code>string</code>，<code>symbol</code></li><li>引用类型Object： <code>Array</code> ，<code>Function</code>， <code>Date</code>， <code>RegExp</code>等</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f177970e2924361902991e8910673cf~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210813153833385"></p><p>基本类型和引用类型的主要区别有以下几点：</p><p><strong>存放位置：</strong></p><ul><li>基本数据类型：基本类型值在内存中占据固定大小，直接存储在<strong>栈内存</strong>中的数据</li><li>引用数据类型：引用类型在栈中存储了指针，这个指针指向堆内存中的地址，真实的数据存放在<strong>堆内存</strong>里。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cbe609ed3174512b51e643e5d894226~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image-20210813154040287"></p><p><strong>值的可变性：</strong></p><ul><li>基本数据类型： 值不可变，<em>javascript</em> 中的原始值（<em>undefined、null</em>、布尔值、数字和字符串）是不可更改的</li><li>引用数据类型：引用类型是可以直接改变其值的</li></ul><p><strong>比较：</strong></p><ul><li>基本数据类型： 基本类型的比较是值的比较，只要它们的值相等就认为他们是相等的</li><li>引用数据类型： 引用数据类型的比较是引用的比较，看其的引用是否指向同一个对象</li></ul></blockquote><h3 id="_72-如何得到一个变量的类型-指函数封装实现" tabindex="-1"><a class="header-anchor" href="#_72-如何得到一个变量的类型-指函数封装实现" aria-hidden="true">#</a> 72. 如何得到一个变量的类型---指函数封装实现</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>30</em> 题答案。</p></blockquote><h3 id="_73-什么是作用域、闭包" tabindex="-1"><a class="header-anchor" href="#_73-什么是作用域、闭包" aria-hidden="true">#</a> 73. 什么是作用域、闭包</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>56</em> 题。</p></blockquote><h3 id="_74-闭包的缺点是什么-闭包的应用场景有哪些-怎么销毁闭包" tabindex="-1"><a class="header-anchor" href="#_74-闭包的缺点是什么-闭包的应用场景有哪些-怎么销毁闭包" aria-hidden="true">#</a> 74. 闭包的缺点是什么？闭包的应用场景有哪些？怎么销毁闭包？</h3><blockquote><p>参考答案：</p><p>闭包是指有权访问另外一个函数作用域中的变量的函数。</p><p>因为闭包引用着另一个函数的变量，导致另一个函数已经不使用了也无法销毁，所以<strong>闭包使用过多，会占用较多的内存，这也是一个副作用，内存泄漏。</strong></p><p>如果要销毁一个闭包，可以 把被引用的变量设置为_null_，即手动清除变量，这样下次 <em>js</em> 垃圾回收机制回收时，就会把设为 <em>null</em> 的量给回收了。</p><p>闭包的应用场景：</p><ol><li>匿名自执行函数</li><li>结果缓存</li><li>封装</li><li>实现类和继承</li></ol></blockquote><h3 id="_75-js-的垃圾回收站机制" tabindex="-1"><a class="header-anchor" href="#_75-js-的垃圾回收站机制" aria-hidden="true">#</a> 75. _JS_的垃圾回收站机制</h3><blockquote><p>参考答案：</p><p><em>JS</em> 具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。</p><p><em>JS</em> 常见的垃圾回收方式：标记清除、引用计数方式。</p><p>1、标记清除方式：</p><ul><li>工作原理：当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。</li><li>工作流程：</li><li>垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记；</li><li>去掉环境中的变量以及被环境中的变量引用的变量的标记；</li><li>被加上标记的会被视为准备删除的变量；</li><li>垃圾回收器完成内存清理工作，销毁那些带标记的值并回收他们所占用的内存空间。</li></ul><p>2、引用计数方式：</p><ul><li>工作原理：跟踪记录每个值被引用的次数。</li><li>工作流程：</li><li>声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是 <em>1</em>；</li><li>同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1；</li><li>当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减 <em>1</em>；</li><li>当引用次数变成 <em>0</em> 时，说明没办法访问这个值了；</li><li>当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。</li></ul></blockquote><h3 id="_76-什么是作用域链、原型链" tabindex="-1"><a class="header-anchor" href="#_76-什么是作用域链、原型链" aria-hidden="true">#</a> 76. 什么是作用域链、原型链</h3><blockquote><p>参考答案：</p><p><strong>什么是作用域链?</strong></p><p>当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止,，而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。</p><p><strong>什么原型链?</strong></p><p>每个对象都可以有一个原型__<em>proto</em>__，这个原型还可以有它自己的原型，以此类推，形成一个原型链。查找特定属性的时候，我们先去这个对象里去找，如果没有的话就去它的原型对象里面去，如果还是没有的话再去向原型对象的原型对象里去寻找。这个操作被委托在整个原型链上，这个就是我们说的原型链。</p></blockquote><h3 id="_77-new-一个构造函数发生了什么" tabindex="-1"><a class="header-anchor" href="#_77-new-一个构造函数发生了什么" aria-hidden="true">#</a> 77. <em>new</em> 一个构造函数发生了什么</h3><blockquote><p>参考答案：</p><p><em>new</em> 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。</p><p><em>new</em> 关键字会进行如下的操作：<br> 步骤 <em>1</em>：创建一个空的简单 <em>JavaScript</em> 对象，即 { } ;<br> 步骤 <em>2</em>：链接该对象到另一个对象（即设置该对象的原型对象）；<br> 步骤 <em>3</em>：将步骤 <em>1</em> 新创建的对象作为 <em>this</em> 的上下文；<br> 步骤 <em>4</em>：如果该函数没有返回对象，则返回 <em>this</em>。</p></blockquote><h3 id="_78-对一个构造函数实例化后-它的原型链指向什么" tabindex="-1"><a class="header-anchor" href="#_78-对一个构造函数实例化后-它的原型链指向什么" aria-hidden="true">#</a> 78. 对一个构造函数实例化后. 它的原型链指向什么</h3><blockquote><p>参考答案：</p><p>指向该构造函数实例化出来对象的原型对象。</p><p>对于构造函数来讲，可以通过 <em>prototype</em> 访问到该对象。</p><p>对于实例对象来讲，可以通过隐式属性 <strong><em>proto</em></strong> 来访问到。</p></blockquote><h3 id="_79-什么是变量提升" tabindex="-1"><a class="header-anchor" href="#_79-什么是变量提升" aria-hidden="true">#</a> 79. 什么是变量提升</h3><blockquote><p>参考答案：</p><p>当 <em>JavaScript</em> 编译所有代码时，所有使用 <em>var</em> 的变量声明都被提升到它们的函数/局部作用域的顶部(如果在函数内部声明的话)，或者提升到它们的全局作用域的顶部(如果在函数外部声明的话)，而不管实际的声明是在哪里进行的。这就是我们所说的“提升”。</p><p>请记住，这种“提升”实际上并不发生在你的代码中，而只是一种比喻，与 <em>JavaScript</em> 编译器如何读取你的代码有关。记住当我们想到“提升”的时候，我们可以想象任何被提升的东西都会被移动到顶部，但是实际上你的代码并不会被修改。</p><p>函数声明也会被提升，但是被提升到了最顶端，所以将位于所有变量声明之上。</p><p>在编译阶段变量和函数声明会被放入内存中，但是你在代码中编写它们的位置会保持不变。</p></blockquote><h3 id="_80-和-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_80-和-的区别是什么" aria-hidden="true">#</a> 80. == 和 === 的区别是什么</h3><blockquote><p>参考答案：</p><p>简单来说： == 代表相同， === 代表严格相同（数据类型和值都相等）。</p><p>当进行双等号比较时候，先检查两个操作数数据类型，如果相同，则进行===比较，如果不同，则愿意为你进行一次类型转换，转换成相同类型后再进行比较，而 === 比较时，如果类型不同，直接就是false。</p><p>从这个过程来看，大家也能发现，某些情况下我们使用 === 进行比较效率要高些，因此，没有歧义的情况下，不会影响结果的情况下，在 <em>JS</em> 中首选 === 进行逻辑比较。</p></blockquote>`,22),x={id:"_81-object-is-方法比较的是什么",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_81-object-is-方法比较的是什么","aria-hidden":"true"},"#",-1),k={href:"https://link.juejin.cn/?target=http%3A%2F%2FObject.is",title:"http://Object.is",target:"_blank",rel:"noopener noreferrer"},q=e("p",null,"参考答案：",-1),y={href:"https://link.juejin.cn/?target=http%3A%2F%2FObject.is",title:"http://Object.is",target:"_blank",rel:"noopener noreferrer"},j=e("em",null,"ES6",-1),S=e("ul",null,[e("li",null,"+0 不等于 -0。"),e("li",null,[e("em",null,"NaN"),i(" 等于自身。")])],-1),w={href:"https://link.juejin.cn/?target=http%3A%2F%2FObject.is",title:"http://Object.is",target:"_blank",rel:"noopener noreferrer"},E=n(`<h3 id="_82-基础数据类型和引用数据类型-哪个是保存在栈内存中-哪个是在堆内存中" tabindex="-1"><a class="header-anchor" href="#_82-基础数据类型和引用数据类型-哪个是保存在栈内存中-哪个是在堆内存中" aria-hidden="true">#</a> 82. 基础数据类型和引用数据类型，哪个是保存在栈内存中？哪个是在堆内存中？</h3><blockquote><p>参考答案：</p><p>在 <em>ECMAScript</em> 规范中，共定义了 <em>7</em> 种数据类型，分为 <strong>基本类型</strong> 和 <strong>引用类型</strong> 两大类，如下所示：</p><ul><li><strong>基本类型</strong>：<em>String、Number、Boolean、Symbol、Undefined、Null</em></li><li><strong>引用类型</strong>：<em>Object</em></li></ul><p>基本类型也称为简单类型，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即按值访问。</p><p>引用类型也称为复杂类型，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(<em>heap</em>)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。引用类型除 <em>Object</em> 外，还包括 <em>Function 、Array、RegExp、Date</em> 等等。</p></blockquote><h3 id="_83-箭头函数解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_83-箭头函数解决了什么问题" aria-hidden="true">#</a> 83. 箭头函数解决了什么问题？</h3><blockquote><p>参考答案：</p><p>箭头函数主要解决了 <em>this</em> 的指向问题。</p></blockquote><blockquote><p>解析：</p><p>在 <em>ES5</em> 时代，一旦对象的方法里面又存在函数，则 <em>this</em> 的指向往往会让开发人员抓狂。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//错误案例，this 指向会指向 Windows 或者 undefined
var obj = {
    age: 18,
    getAge: function () {
        var a = this.age; // 18
        var fn = function () {
            return new Date().getFullYear() - this.age; // this 指向 window 或 undefined
        };
        return fn();
    }
};
console.log(obj.getAge()); // NaN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，箭头函数没有 <em>this</em>，箭头函数的 <em>this</em> 是继承父执行上下文里面的 <em>this</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var obj = {
    age: 18,
    getAge: function () {
        var a = this.age; // 18
        var fn = () =&gt; new Date().getFullYear() - this.age; // this 指向 obj 对象
        return fn();
    }
};

console.log(obj.getAge()); // 2003

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_84-new-一个箭头函数后-它的-this-指向什么" tabindex="-1"><a class="header-anchor" href="#_84-new-一个箭头函数后-它的-this-指向什么" aria-hidden="true">#</a> 84. <em>new</em> 一个箭头函数后，它的 <em>this</em> 指向什么？</h3><blockquote><p>参考答案：</p><p>我不知道这道题是出题人写错了还是故意为之。</p><p>箭头函数无法用来充当构造函数，所以是无法 <em>new</em> 一个箭头函数的。</p><p>当然，也有可能是面试官故意挖的一个坑，等着你往里面跳。</p></blockquote><h3 id="_85-promise-的其他方法有用过吗-如-all、race。请说下这两者的区别" tabindex="-1"><a class="header-anchor" href="#_85-promise-的其他方法有用过吗-如-all、race。请说下这两者的区别" aria-hidden="true">#</a> 85. <em>promise</em> 的其他方法有用过吗？如 <em>all、race</em>。请说下这两者的区别</h3><blockquote><p>参考答案：</p><p><em>promise.all</em> 方法参数是一个 <em>promise</em> 的数组,只有当所有的 <em>promise</em> 都完成并返回成功，才会调用 <em>resolve</em>，当有一个失败，都会进_catch_，被捕获错误，<em>promise.all</em> 调用成功返回的结果是每个 <em>promise</em> 单独调用成功之后返回的结果组成的数组,如果调用失败的话，返回的则是第一个 <em>reject</em> 的结果</p><p><em>promise.race</em> 也会调用所有的 <em>promise</em>，返回的结果则是所有 <em>promise</em> 中最先返回的结果，不关心是成功还是失败。</p></blockquote><h3 id="_86-class-是如何实现的" tabindex="-1"><a class="header-anchor" href="#_86-class-是如何实现的" aria-hidden="true">#</a> 86. <em>class</em> 是如何实现的</h3><blockquote><p>参考答案：</p><p><em>class</em> 是 <em>ES6</em> 新推出的关键字，它是一个语法糖，本质上就是基于这个原型实现的。只不过在以前 <em>ES5</em> 原型实现的基础上，添加了一些  __classCallCheck、_defineProperties、_createClass_等方法来做出了一些特殊的处理。</p><p>例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Hello {
   constructor(x) {
       this.x = x;
   }
   greet() {
       console.log(&quot;Hello, &quot; + this.x)
   }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;use strict&quot;;

function _classCallCheck(instance, Constructor) {
     if (!(instance instanceof Constructor)) {
         throw new TypeError(&quot;Cannot call a class as a function&quot;);
     }
}

function _defineProperties(target, props) {
     for (var i = 0; i &lt; props.length; i++) {
         var descriptor = props[i];
         descriptor.enumerable = descriptor.enumerable || false;
         descriptor.configurable = true;
         if (&quot;value&quot; in descriptor)
             descriptor.writable = true;
         Object.defineProperty(target, descriptor.key, descriptor);
     }
}

function _createClass(Constructor, protoProps, staticProps) {
     console.log(&quot;Constructor::&quot;,Constructor);
     console.log(&quot;protoProps::&quot;,protoProps);
     console.log(&quot;staticProps::&quot;,staticProps);
     if (protoProps)
         _defineProperties(Constructor.prototype, protoProps);
     if (staticProps)
         _defineProperties(Constructor, staticProps);
     return Constructor;
}

var Hello = /*#__PURE__*/function () {
   function Hello(x) {
       _classCallCheck(this, Hello);

       this.x = x;
   }

   _createClass(Hello, [{
       key: &quot;greet&quot;,
       value: function greet() {
         console.log(&quot;Hello, &quot; + this.x);
       }
  }]);

  return Hello;
}();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_87-let、const、var-的区别" tabindex="-1"><a class="header-anchor" href="#_87-let、const、var-的区别" aria-hidden="true">#</a> 87. <em>let、const、var</em> 的区别</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>22</em> 题答案。</p></blockquote><h3 id="_88-es6-中模块化导入和导出与-common-js-有什么区别" tabindex="-1"><a class="header-anchor" href="#_88-es6-中模块化导入和导出与-common-js-有什么区别" aria-hidden="true">#</a> 88. <em>ES6</em> 中模块化导入和导出与 <em>common.js</em> 有什么区别</h3><blockquote><p>参考答案：</p><p>CommonJs模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化不会影响到这个值.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// common.js
var count = 1;

var printCount = () =&gt;{ 
  return ++count;
}

module.exports = {
    printCount: printCount,
    count: count
};
// index.js
let v = require(&#39;./common&#39;);
console.log(v.count); // 1
console.log(v.printCount()); // 2
console.log(v.count); // 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以看到明明common.js里面改变了count，但是输出的结果还是原来的。这是因为count是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动的值。将common.js里面的module.exports 改写成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    printCount: printCount,
    get count(){
        return count
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样子的输出结果是 1，2，2</p><p>而在ES6当中，写法是这样的，是利用export 和import导入的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// es6.js
export let count = 1;
export function printCount() {
    ++count;
}
// main1.js
import  { count, printCount } from &#39;./es6&#39;;
console.log(count)
console.log(printCount());
console.log(count)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 模块是动态引用，并且不会缓存，模块里面的变量绑定其所有的模块，而是动态地去加载值，并且不能重新赋值，</p><p>ES6 输入的模块变量，只是一个“符号连接符”，所以这个变量是只读的，对它进行重新赋值会报错。如果是引用类型，变量指向的地址是只读的，但是可以为其添加属性或成员。</p><p>另外还想说一个 <em>export default</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let count = 1;
function printCount() {
    ++count;
} 
export default { count, printCount}
// main3.js
import res form &#39;./main3.js&#39;
console.log(res.count)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>export与export default的区别及联系：</p><ol><li>export与export default均可用于导出常量、函数、文件、模块等</li><li>你可以在其它文件或模块中通过 import + (常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用</li><li>在一个文件或模块中，export、import可以有多个，export default仅有一个</li><li>通过export方式导出，在导入时要加{ }，export default则不需要。</li></ol></blockquote><h3 id="_89-说一下普通函数和箭头函数的区别" tabindex="-1"><a class="header-anchor" href="#_89-说一下普通函数和箭头函数的区别" aria-hidden="true">#</a> 89. 说一下普通函数和箭头函数的区别</h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>8、25、83</em> 题答案。</p></blockquote><h3 id="_90-说一下-promise-和-async-和-await-什么关系" tabindex="-1"><a class="header-anchor" href="#_90-说一下-promise-和-async-和-await-什么关系" aria-hidden="true">#</a> 90. 说一下 <em>promise</em> 和 <em>async</em> 和 <em>await</em> 什么关系</h3><blockquote><p>参考答案：</p><p><em>await</em> 表达式会造成异步函数停止执行并且等待_promise_的解决，当值被_resolved_，异步函数会恢复执行以及返回_resolved_值。如果该值不是一个_promise_，它将会被转换成一个_resolved_后的_promise_。如果_promise_被_rejected_，<em>await</em> 表达式会抛出异常值。</p></blockquote><h3 id="_91-说一下你学习过的有关-es6-的知识点" tabindex="-1"><a class="header-anchor" href="#_91-说一下你学习过的有关-es6-的知识点" aria-hidden="true">#</a> 91. 说一下你学习过的有关 <em>ES6</em> 的知识点</h3><blockquote><p>参考答案：</p><p>这种题目是开放题，可以简单列举一下 <em>ES6</em> 的新增知识点。（ <em>ES6</em> 的新增知识点参阅前面第 <em>44</em> 题）</p><p>然后说一下自己平时开发中用得比较多的是哪些即可。</p><p>一般面试官会针对你所说的内容进行二次提问。例如：你回答平时开发中箭头函数用得比较多，那么面试官极大可能针对箭头函数展开二次提问，询问你箭头函数有哪些特性？箭头函数 <em>this</em> 特点之类的问题。</p></blockquote><h3 id="_92-了解过-js-中-arguments-吗-接收的是实参还是形参" tabindex="-1"><a class="header-anchor" href="#_92-了解过-js-中-arguments-吗-接收的是实参还是形参" aria-hidden="true">#</a> 92. 了解过 <em>js</em> 中 <em>arguments</em> 吗？接收的是实参还是形参？</h3><blockquote><p>参考答案：</p><p><em>JS</em> 中的 <em>arguments</em> 是一个伪数组对象。这个伪数组对象将包含调用函数时传递的所有的实参。</p><p>与之相对的，<em>JS</em> 中的函数还有一个 <em>length</em> 属性，返回的是函数形参的个数。</p></blockquote><h3 id="_93-es6-相比于-es5-有什么变化" tabindex="-1"><a class="header-anchor" href="#_93-es6-相比于-es5-有什么变化" aria-hidden="true">#</a> 93. <em>ES6</em> 相比于 <em>ES5</em> 有什么变化</h3><blockquote><p>参考答案：</p><p><em>ES6</em> 相比 <em>ES5</em> 新增了很多新特性，这里可以自己简述几个。</p><p>具体的新增特性可以参阅前面第 <em>44</em> 题。</p></blockquote><h3 id="_94-强制类型转换方法有哪些" tabindex="-1"><a class="header-anchor" href="#_94-强制类型转换方法有哪些" aria-hidden="true">#</a> 94. 强制类型转换方法有哪些？</h3><blockquote><p>参考答案：</p><p>JavaScript 中的数据类型转换，主要有三种方式：</p><ol><li>转换函数</li></ol><p><em>js</em> 提供了诸如 <em>parseInt</em> 和 <em>parseFloat</em> 这些转换函数，通过这些转换函数可以进行数据类型的转换 。</p><ol start="2"><li>强制类型转换</li></ol><p>还可使用强制类型转换（<em>type casting</em>）处理转换值的类型。</p><p>例如：</p><ul><li><p><em>Boolean</em>(<em>value</em>) 把给定的值转换成 <em>Boolean</em> 型；</p></li><li><p><em>Number</em>(<em>value</em>)——把给定的值转换成数字（可以是整数或浮点数）；</p></li><li><p><em>String</em>(<em>value</em>)——把给定的值转换成字符串。</p></li></ul><ol start="3"><li>利用 <em>js</em> 变量弱类型转换。</li></ol><p>例如：</p><ul><li>转换字符串：直接和一个空字符串拼接，例如：<code>a = &quot;&quot; + 数据</code></li><li>转换布尔：!!数据类型，例如：<code>!!&quot;Hello&quot;</code></li><li>转换数值：数据*1 或 /1，例如：<code>&quot;Hello * 1&quot;</code></li></ul></blockquote><h3 id="_95-纯函数" tabindex="-1"><a class="header-anchor" href="#_95-纯函数" aria-hidden="true">#</a> 95. 纯函数</h3><blockquote><p>参考答案：</p><p>一个函数，如果符合以下两个特点，那么它就可以称之为<strong>纯函数</strong>：</p><ol><li>对于相同的输入，永远得到相同的输出</li><li>没有任何可观察到的副作用</li></ol></blockquote><blockquote><p>解析：</p><p>针对上面的两个特点，我们一个一个来看。</p><ul><li>相同输入得到相同输出</li></ul><p>我们先来看一个不纯的反面典型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let greeting = &#39;Hello&#39;

function greet (name) {
  return greeting + &#39; &#39; + name
}

console.log(greet(&#39;World&#39;)) // Hello World

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，<em>greet(&#39;World&#39;)</em>  是不是永远返回 <em>Hello World</em> ? 显然不是，假如我们修改 <em>greeting</em> 的值，就会影响 <em>greet</em> 函数的输出。即函数 <em>greet</em> 其实是 <strong>依赖外部状态</strong> 的。</p><p>那我们做以下修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function greet (greeting, name) {
  return greeting + &#39; &#39; + name
}

console.log(greet(&#39;Hi&#39;, &#39;Savo&#39;)) // Hi Savo

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <em>greeting</em> 参数也传入，这样对于任何输入参数，都有与之对应的唯一的输出参数了，该函数就符合了第一个特点。</p><ul><li>没有副作用</li></ul><p>副作用的意思是，这个函数的运行，<strong>不会修改外部的状态</strong>。</p><p>下面再看反面典型：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = {
  username: &#39;savokiss&#39;
}

let isValid = false

function validate (user) {
  if (user.username.length &gt; 4) {
    isValid = true
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，执行函数的时候会修改到 <em>isValid</em> 的值（注意：如果你的函数没有任何返回值，那么它很可能就具有副作用！）</p><p>那么我们如何移除这个副作用呢？其实不需要修改外部的 <em>isValid</em> 变量，我们只需要在函数中将验证的结果 <em>return</em> 出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = {
  username: &#39;savokiss&#39;
}

function validate (user) {
  return user.username.length &gt; 4;
}

const isValid = validate(user)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 <em>validate</em> 函数就不会修改任何外部的状态了~</p></blockquote><h3 id="_96-js-模块化" tabindex="-1"><a class="header-anchor" href="#_96-js-模块化" aria-hidden="true">#</a> 96. <em>JS</em> 模块化</h3><blockquote><p>参考答案：</p><p>模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突等。</p><p>模块化的整个发展历史如下：</p><p><strong>IIFE</strong>： 使用自执行函数来编写模块化，特点：<strong>在一个单独的函数作用域中执行代码，避免变量冲突</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(function(){
 return {
 data:[]
 }
})()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AMD</strong>： 使用requireJS 来编写模块化，特点：<strong>依赖必须提前声明好</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define(&#39;./index.js&#39;,function(code){
 // code 就是index.js 返回的内容
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CMD</strong>： 使用seaJS 来编写模块化，特点：<strong>支持动态引入依赖文件</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define(function(require, exports, module) {  
 var indexCode = require(&#39;./index.js&#39;);
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CommonJS</strong>： nodejs 中自带的模块化。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var fs = require(&#39;fs&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UMD</strong>：兼容AMD，CommonJS 模块化语法。</p><p><strong>webpack(require.ensure)</strong> ：webpack 2.x 版本中的代码分割。</p><p><strong>ES Modules</strong>： ES6 引入的模块化，支持import 来引入另一个 js 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import a from &#39;a&#39;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_97-看过-jquery-源码吗" tabindex="-1"><a class="header-anchor" href="#_97-看过-jquery-源码吗" aria-hidden="true">#</a> 97. 看过 <em>jquery</em> 源码吗？</h3><blockquote><p>参考答案：</p><p>开放题，但是需要注意的是，如果看过 <em>jquery</em> 源码，不要简单的回答一个“看过”就完了，应该继续乘胜追击，告诉面试官例如哪个哪个部分是怎么怎么实现的，并针对这部分的源码实现，可以发表一些自己的看法和感想。</p></blockquote><h3 id="_98-说一下-js-中的-this" tabindex="-1"><a class="header-anchor" href="#_98-说一下-js-中的-this" aria-hidden="true">#</a> 98. 说一下 <em>js</em> 中的 <em>this</em></h3><blockquote><p>参考答案：</p><p>请参阅前面第 <em>17</em> 题答案。</p></blockquote><h3 id="_99-apply-call-bind-区别-手写" tabindex="-1"><a class="header-anchor" href="#_99-apply-call-bind-区别-手写" aria-hidden="true">#</a> 99. <em>apply call bind</em> 区别，手写</h3><blockquote><p>参考答案：</p><p>apply call bind 区别 ？</p><p><em>call</em> 和 <em>apply</em> 的功能相同，区别在于传参的方式不一样:</p><ul><li><em>fn.call(obj, arg1, arg2, ...)</em>  调用一个函数, 具有一个指定的 <em>this</em> 值和分别地提供的参数(参数的列表)。</li><li><em>fn.apply(obj, [argsArray])</em>  调用一个函数，具有一个指定的 <em>this</em> 值，以及作为一个数组（或类数组对象）提供的参数。</li></ul><p><em>bind</em> 和 <em>call/apply</em> 有一个很重要的区别，一个函数被 <em>call/apply</em> 的时候，会直接调用，但是 <em>bind</em> 会创建一个新函数。当这个新函数被调用时，<em>bind( )</em>  的第一个参数将作为它运行时的 <em>this</em>，之后的一序列参数将会在传递的实参前传入作为它的参数。</p><p>实现 <em>call</em> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.call2 = function (context) {
   //没传参数或者为 null 是默认是 window
   var context = context || (typeof window !== &#39;undefined&#39; ? window : global)
   // 首先要获取调用 call 的函数，用 this 可以获取
   context.fn = this
   var args = []
   for (var i = 1; i &lt; arguments.length; i++) {
       args.push(&#39;arguments[&#39; + i + &#39;]&#39;)
   }
   eval(&#39;context.fn(&#39; + args + &#39;)&#39;)
   delete context.fn
}

// 测试
var value = 3
var foo = {
   value: 2
}

function bar(name, age) {
   console.log(this.value)
   console.log(name)
   console.log(age)
}
bar.call2(null)
// 浏览器环境： 3 undefinde undefinde   
// Node环境：undefinde undefinde undefinde

bar.call2(foo, &#39;cc&#39;, 18) // 2  cc 18

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现 <em>apply</em> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.apply2 = function (context, arr) {
   var context = context || (typeof window !== &#39;undefined&#39; ? window : global)
   context.fn = this;

   var result;
   if (!arr) {
       result = context.fn();
   }
   else {
       var args = [];
       for (var i = 0, len = arr.length; i &lt; len; i++) {
           args.push(&#39;arr[&#39; + i + &#39;]&#39;);
       }
       result = eval(&#39;context.fn(&#39; + args + &#39;)&#39;)
   }

   delete context.fn
   return result;
}

// 测试：

var value = 3
var foo = {
   value: 2
}

function bar(name, age) {
   console.log(this.value)
   console.log(name)
   console.log(age)
}
bar.apply2(null)
// 浏览器环境： 3 undefinde undefinde   
// Node环境：undefinde undefinde undefinde

bar.apply2(foo, [&#39;cc&#39;, 18]) // 2  cc 18

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现 <em>bind</em> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function.prototype.bind2 = function (oThis) {
   if (typeof this !== &quot;function&quot;) {
       // closest thing possible to the ECMAScript 5 internal IsCallable function
       throw new TypeError(&quot;Function.prototype.bind - what is trying to be bound is not callable&quot;);
   }
   var aArgs = Array.prototype.slice.call(arguments, 1),
       fToBind = this,
       fNOP = function () { },
       fBound = function () {
           return fToBind.apply(this instanceof fNOP &amp;&amp; oThis
               ? this
               : oThis || window,
               aArgs.concat(Array.prototype.slice.call(arguments)));
       };

   fNOP.prototype = this.prototype;
   fBound.prototype = new fNOP();

   return fBound;
}

// 测试
var test = {
   name: &quot;jack&quot;
}
var demo = {
   name: &quot;rose&quot;,
   getName: function () { return this.name; }
}

console.log(demo.getName()); // 输出 rose  这里的 this 指向 demo

// 运用 bind 方法更改 this 指向
var another2 = demo.getName.bind2(test);
console.log(another2()); // 输出 jack  这里 this 指向了 test 对象了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_100-手写-reduce-flat" tabindex="-1"><a class="header-anchor" href="#_100-手写-reduce-flat" aria-hidden="true">#</a> 100. 手写 <em>reduce flat</em></h3><blockquote><p>参考答案：</p><p><em>reduce</em> 实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Array.prototype.my_reduce = function (callback, initialValue) {
    if (!Array.isArray(this) || !this.length || typeof callback !== &#39;function&#39;) {
        return []
    } else {
        // 判断是否有初始值
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue ? initialValue : tihs[0];
        for (let index = hasInitialValue ? 0 : 1; index &lt; this.length; index++) {
            const element = this[index];
            value = callback(value, element, index, this)
        }
        return value
    }
}

let arr = [1, 2, 3, 4, 5]
let res = arr.my_reduce((pre, cur, i, arr) =&gt; {
    console.log(pre, cur, i, arr)
    return pre + cur
}, 10)
console.log(res)//25

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>flat</em> 实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let arr = [1, [2, 3, [4, 5, [12, 3, &quot;zs&quot;], 7, [8, 9, [10, 11, [1, 2, [3, 4]]]]]]];

//万能的类型检测方法
const checkType = (arr) =&gt; {
    return Object.prototype.toString.call(arr).slice(8, -1);
}
//自定义flat方法，注意：不可以使用箭头函数，使用后内部的this会指向window
Array.prototype.myFlat = function (num) {
    //判断第一层数组的类型
    let type = checkType(this);
    //创建一个新数组，用于保存拆分后的数组
    let result = [];
    //若当前对象非数组则返回undefined
    if (!Object.is(type, &quot;Array&quot;)) {
        return;
    }
    //遍历所有子元素并判断类型，若为数组则继续递归，若不为数组则直接加入新数组
    this.forEach((item) =&gt; {
        let cellType = checkType(item);
        if (Object.is(cellType, &quot;Array&quot;)) {
            //形参num，表示当前需要拆分多少层数组，传入Infinity则将多维直接降为一维
            num--;
            if (num &lt; 0) {
                let newArr = result.push(item);
                return newArr;
            }
            //使用三点运算符解构，递归函数返回的数组，并加入新数组
            result.push(...item.myFlat(num));
        } else {
            result.push(item);
        }
    })
    return result;
}
console.time();

console.log(arr.flat(Infinity)); //[1, 2, 3, 4, 5, 12, 3, &quot;zs&quot;, 7, 8, 9, 10, 11, 1, 2, 3, 4];

console.log(arr.myFlat(Infinity)); //[1, 2, 3, 4, 5, 12, 3, &quot;zs&quot;, 7, 8, 9, 10, 11, 1, 2, 3, 4];
//自定义方法和自带的flat返回结果一致!!!!
console.timeEnd();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,40);function P(O,C){const l=m("ExternalLinkIcon");return r(),d("div",null,[o,e("blockquote",null,[c,e("p",null,[u,i("  是 "),v,i(" 的原型方法，调用该方法，默认返回当前对象的 "),e("em",null,[e("a",p,[i("Class"),s(l)])]),i(" 。这是一个内部属性，其格式为  "),b,i("  ，其中 "),h,i(" 就是对象的类型。")]),g]),f,e("h3",x,[_,i(" 81. "),e("em",null,[e("a",k,[i("Object.is"),s(l)])]),i(" 方法比较的是什么")]),e("blockquote",null,[q,e("p",null,[e("em",null,[e("a",y,[i("Object.is"),s(l)])]),i(" 方法是 "),j,i(" 新增的用来比较两个值是否严格相等的方法，与 === (严格相等)的行为基本一致。不过有两处不同：")]),S,e("p",null,[i("所以可以将*"),e("a",w,[i("Object.is"),s(l)]),i("* 方法看作是加强版的严格相等。")])]),E])}const A=a(t,[["render",P],["__file","index.html.vue"]]);export{A as default};
