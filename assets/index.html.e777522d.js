import{_ as t,z as a,A as s,X as i,C as e,T as l,a6 as d,Q as r}from"./framework.fef63301.js";const u={},o=d(`<h1 id="_30-道-vue-面试题" tabindex="-1"><a class="header-anchor" href="#_30-道-vue-面试题" aria-hidden="true">#</a> 30 道 Vue 面试题</h1><h2 id="_1、说说你对-spa-单页面的理解-它的优缺点分别是什么" tabindex="-1"><a class="header-anchor" href="#_1、说说你对-spa-单页面的理解-它的优缺点分别是什么" aria-hidden="true">#</a> 1、说说你对 SPA 单页面的理解，它的优缺点分别是什么？</h2><p>SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。</p><p><strong>优点：</strong></p><ul><li>用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；</li><li>基于上面一点，SPA 相对对服务器压力小；</li><li>前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；</li></ul><p><strong>缺点：</strong></p><ul><li>初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；</li><li>前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；</li><li>SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。</li></ul><h2 id="_2、v-show-与-v-if-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2、v-show-与-v-if-有什么区别" aria-hidden="true">#</a> 2、v-show 与 v-if 有什么区别？</h2><p><strong>v-if</strong> 是<strong>真正</strong>的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是<strong>惰性的</strong>：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</p><p><strong>v-show</strong> 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。</p><p>所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。</p><h2 id="_3、class-与-style-如何动态绑定" tabindex="-1"><a class="header-anchor" href="#_3、class-与-style-如何动态绑定" aria-hidden="true">#</a> 3、Class 与 Style 如何动态绑定？</h2><p>Class 可以通过对象语法和数组语法进行动态绑定：</p><ul><li>对象语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;&gt;&lt;/div&gt;

data: {
  isActive: true,
  hasError: false
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:class=&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;&gt;&lt;/div&gt;

data: {
  activeClass: &#39;active&#39;,
  errorClass: &#39;text-danger&#39;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Style 也可以通过对象语法和数组语法进行动态绑定：</p><ul><li>对象语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:style=&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;&gt;&lt;/div&gt;

data: {
  activeColor: &#39;red&#39;,
  fontSize: 30
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组语法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div v-bind:style=&quot;[styleColor, styleSize]&quot;&gt;&lt;/div&gt;

data: {
  styleColor: {
     color: &#39;red&#39;
   },
  styleSize:{
     fontSize:&#39;23px&#39;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、怎样理解-vue-的单向数据流" tabindex="-1"><a class="header-anchor" href="#_4、怎样理解-vue-的单向数据流" aria-hidden="true">#</a> 4、怎样理解 Vue 的单向数据流？</h2><p>所有的 prop 都使得其父子 prop 之间形成了一个<strong>单向下行绑定</strong>：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。</p><p>额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。</p><p>有两种常见的试图改变一个 prop 的情形 :</p><ul><li><strong>这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。</strong> 在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: [&#39;initialCounter&#39;],
data: function () {
  return {
    counter: this.initialCounter
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>这个 prop 以一种原始的值传入且需要进行转换。</strong> 在这种情况下，最好使用这个 prop 的值来定义一个计算属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>props: [&#39;size&#39;],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、computed-和-watch-的区别和运用的场景" tabindex="-1"><a class="header-anchor" href="#_5、computed-和-watch-的区别和运用的场景" aria-hidden="true">#</a> 5、computed 和 watch 的区别和运用的场景？</h2><p><strong>computed：</strong> 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值；</p><p><strong>watch：</strong> 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；</p><p><strong>运用场景：</strong></p><ul><li><p>当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；</p></li><li><p>当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</p></li></ul><h2 id="_6、直接给一个数组项赋值-vue-能检测到变化吗" tabindex="-1"><a class="header-anchor" href="#_6、直接给一个数组项赋值-vue-能检测到变化吗" aria-hidden="true">#</a> 6、直接给一个数组项赋值，Vue 能检测到变化吗？</h2><p>由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：</p><ul><li>当你利用索引直接设置一个数组项时，例如：<code>vm.items[indexOfItem] = newValue</code></li><li>当你修改数组的长度时，例如：<code>vm.items.length = newLength</code></li></ul><p>为了解决第一个问题，Vue 提供了以下操作方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决第二个问题，Vue 提供了以下操作方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Array.prototype.splice
vm.items.splice(newLength)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、谈谈你对-vue-生命周期的理解" tabindex="-1"><a class="header-anchor" href="#_7、谈谈你对-vue-生命周期的理解" aria-hidden="true">#</a> 7、谈谈你对 Vue 生命周期的理解？</h2><p><strong>（1）生命周期是什么？</strong></p><p>Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -&gt; 渲染、更新 -&gt; 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。</p><p><strong>（2）各个生命周期的作用</strong></p><table><thead><tr><th>生命周期</th><th>描述</th></tr></thead><tbody><tr><td>beforeCreate</td><td>组件实例被创建之初，组件的属性生效之前</td></tr><tr><td>created</td><td>组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用</td></tr><tr><td>beforeMount</td><td>在挂载开始之前被调用：相关的 render 函数首次被调用</td></tr><tr><td>mounted</td><td>el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子</td></tr><tr><td>beforeUpdate</td><td>组件数据更新之前调用，发生在虚拟 DOM 打补丁之前</td></tr><tr><td>update</td><td>组件数据更新之后</td></tr><tr><td>activited</td><td>keep-alive 专属，组件被激活时调用</td></tr><tr><td>deactivated</td><td>keep-alive 专属，组件被销毁时调用</td></tr><tr><td>beforeDestory</td><td>组件销毁前调用</td></tr><tr><td>destoryed</td><td>组件销毁后调用</td></tr></tbody></table><p><strong>（3）生命周期示意图</strong></p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca74f183827f46~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="1.png"></p><h2 id="_8、vue-的父组件和子组件生命周期钩子函数执行顺序" tabindex="-1"><a class="header-anchor" href="#_8、vue-的父组件和子组件生命周期钩子函数执行顺序" aria-hidden="true">#</a> 8、Vue 的父组件和子组件生命周期钩子函数执行顺序？</h2><p>Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：</p><ul><li><p>加载渲染过程</p><p>父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate -&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted</p></li><li><p>子组件更新过程</p><p>父 beforeUpdate -&gt; 子 beforeUpdate -&gt; 子 updated -&gt; 父 updated</p></li><li><p>父组件更新过程</p><p>父 beforeUpdate -&gt; 父 updated</p></li><li><p>销毁过程</p><p>父 beforeDestroy -&gt; 子 beforeDestroy -&gt; 子 destroyed -&gt; 父 destroyed</p></li></ul><h2 id="_9、在哪个生命周期内调用异步请求" tabindex="-1"><a class="header-anchor" href="#_9、在哪个生命周期内调用异步请求" aria-hidden="true">#</a> 9、在哪个生命周期内调用异步请求？</h2><p>可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：</p><ul><li>能更快获取到服务端数据，减少页面 loading 时间；</li><li>ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；</li></ul><h2 id="_10、在什么阶段才能访问操作dom" tabindex="-1"><a class="header-anchor" href="#_10、在什么阶段才能访问操作dom" aria-hidden="true">#</a> 10、在什么阶段才能访问操作DOM？</h2><p>在钩子函数 mounted 被调用前，Vue 已经将编译好的模板挂载到页面上，所以在 mounted 中可以访问操作 DOM。vue 具体的生命周期示意图可以参见如下，理解了整个生命周期各个阶段的操作，关于生命周期相关的面试题就难不倒你了。</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca74f183827f46~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="1.png"></p><h2 id="_11、父组件可以监听到子组件的生命周期吗" tabindex="-1"><a class="header-anchor" href="#_11、父组件可以监听到子组件的生命周期吗" aria-hidden="true">#</a> 11、父组件可以监听到子组件的生命周期吗？</h2><p>比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Parent.vue
&lt;Child @mounted=&quot;doSomething&quot;/&gt;
    
// Child.vue
mounted() {
  this.$emit(&quot;mounted&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  Parent.vue
&lt;Child @hook:mounted=&quot;doSomething&quot; &gt;&lt;/Child&gt;

doSomething() {
   console.log(&#39;父组件监听到 mounted 钩子函数 ...&#39;);
},
    
//  Child.vue
mounted(){
   console.log(&#39;子组件触发 mounted 钩子函数 ...&#39;);
},    
    
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...     

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。</p><h2 id="_12、谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#_12、谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 12、谈谈你对 keep-alive 的了解？</h2><p>keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：</p><ul><li>一般结合路由和动态组件一起使用，用于缓存组件；</li><li>提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；</li><li>对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。</li></ul><h2 id="_13、组件中-data-为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#_13、组件中-data-为什么是一个函数" aria-hidden="true">#</a> 13、组件中 data 为什么是一个函数？</h2><blockquote><p>为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// data
data() {
  return {
 message: &quot;子组件&quot;,
 childName:this.name
  }
}

// new Vue
new Vue({
  el: &#39;#app&#39;,
  router,
  template: &#39;&lt;App/&gt;&#39;,
  components: {App}
})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。</p><h2 id="_14、v-model-的原理" tabindex="-1"><a class="header-anchor" href="#_14、v-model-的原理" aria-hidden="true">#</a> 14、v-model 的原理？</h2><p>我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：</p><ul><li>text 和 textarea 元素使用 value 属性和 input 事件；</li><li>checkbox 和 radio 使用 checked 属性和 change 事件；</li><li>select 字段将 value 作为 prop 并将 change 作为事件。</li></ul><p>以 input 表单元素为例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input v-model=&#39;something&#39;&gt;
    
相当于

&lt;input v-bind:value=&quot;something&quot; v-on:input=&quot;something = $event.target.value&quot;&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件：
&lt;ModelChild v-model=&quot;message&quot;&gt;&lt;/ModelChild&gt;

子组件：
&lt;div&gt;{{value}}&lt;/div&gt;

props:{
    value: String
},
methods: {
  test1(){
     this.$emit(&#39;input&#39;, &#39;小红&#39;)
  },
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15、vue-组件间通信有哪几种方式" tabindex="-1"><a class="header-anchor" href="#_15、vue-组件间通信有哪几种方式" aria-hidden="true">#</a> 15、Vue 组件间通信有哪几种方式？</h2><p>Vue 组件间通信是面试常考的知识点之一，这题有点类似于开放题，你回答出越多方法当然越加分，表明你对 Vue 掌握的越熟练。Vue 组件间通信只要指以下 3 类通信：父子组件通信、隔代组件通信、兄弟组件通信，下面我们分别介绍每种通信方式且会说明此种方法可适用于哪类组件间通信。</p><p><strong>（1）<code>props / $emit</code> 适用 父子组件通信</strong></p><p>这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。</p><p><strong>（2）<code>ref</code> 与 <code>$parent / $children</code> 适用 父子组件通信</strong></p><ul><li><code>ref</code>：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</li><li><code>$parent</code> / <code>$children</code>：访问父 / 子实例</li></ul><p><strong>（3）<code>EventBus （$emit / $on）</code> 适用于 父子、隔代、兄弟组件通信</strong></p><p>这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。</p><p><strong>（4）<code>$attrs</code>/<code>$listeners</code> 适用于 隔代组件通信</strong></p><ul><li><code>$attrs</code>：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 <code>v-bind=&quot;$attrs&quot;</code> 传入内部组件。通常配合 inheritAttrs 选项一起使用。</li><li><code>$listeners</code>：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 <code>v-on=&quot;$listeners&quot;</code> 传入内部组件</li></ul><p><strong>（5）<code>provide / inject</code> 适用于 隔代组件通信</strong></p><p>祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。</p><p><strong>（6）Vuex 适用于 父子、隔代、兄弟组件通信</strong></p><p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。</p><ul><li>Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</li><li>改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。</li></ul><h2 id="_16、你使用过-vuex-吗" tabindex="-1"><a class="header-anchor" href="#_16、你使用过-vuex-吗" aria-hidden="true">#</a> 16、你使用过 Vuex 吗？</h2><p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。</p><p>（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p><p>（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。</p><p>主要包括以下几个模块：</p><ul><li>State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。</li><li>Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。</li><li>Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。</li><li>Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。</li><li>Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。</li></ul><h2 id="_17、使用过-vue-ssr-吗-说说-ssr" tabindex="-1"><a class="header-anchor" href="#_17、使用过-vue-ssr-吗-说说-ssr" aria-hidden="true">#</a> 17、使用过 Vue SSR 吗？说说 SSR？</h2><blockquote><p>Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记&quot;激活&quot;为客户端上完全可交互的应用程序。</p><p>即：SSR大致的意思就是vue在客户端将标签渲染成的整个 html 片段的工作在服务端完成，服务端形成的html 片段直接返回给客户端这个过程就叫做服务端渲染。</p></blockquote><p><strong>服务端渲染 SSR 的优缺点如下：</strong></p><p><strong>（1）服务端渲染的优点：</strong></p><ul><li>更好的 SEO： 因为 SPA 页面的内容是通过 Ajax 获取，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取页面内容，所以在 SPA 中是抓取不到页面通过 Ajax 获取到的内容；而 SSR 是直接由服务端返回已经渲染好的页面（数据已经包含在页面中），所以搜索引擎爬取工具可以抓取渲染好的页面；</li><li>更快的内容到达时间（首屏加载更快）： SPA 会等待所有 Vue 编译后的 js 文件都下载完成后，才开始进行页面的渲染，文件下载等需要一定的时间等，所以首屏渲染需要一定的时间；SSR 直接由服务端渲染好页面直接返回显示，无需等待下载 js 文件及再去渲染等，所以 SSR 有更快的内容到达时间；</li></ul><p><strong>（2) 服务端渲染的缺点：</strong></p><ul><li>更多的开发条件限制： 例如服务端渲染只支持 beforCreate 和 created 两个钩子函数，这会导致一些外部扩展库需要特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；</li><li>更多的服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 ( high traffic ) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。</li></ul>`,106),v={href:"https://juejin.cn/post/6844903824956588040",title:"https://juejin.cn/post/6844903824956588040",target:"_blank",rel:"noopener noreferrer"},c=d(`<h2 id="_18、vue-router-路由模式有几种" tabindex="-1"><a class="header-anchor" href="#_18、vue-router-路由模式有几种" aria-hidden="true">#</a> 18、vue-router 路由模式有几种？</h2><p>vue-router 有 3 种路由模式：hash、history、abstract，对应的源码如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch (mode) {
  case &#39;history&#39;:
 this.history = new HTML5History(this, options.base)
 break
  case &#39;hash&#39;:
 this.history = new HashHistory(this, options.base, this.fallback)
 break
  case &#39;abstract&#39;:
 this.history = new AbstractHistory(this, options.base)
 break
  default:
 if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39;) {
   assert(false, \`invalid mode: \${mode}\`)
 }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，3 种路由模式的说明如下：</p><ul><li><p>hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；</p></li><li><p>history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；</p></li><li><p>abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.</p></li></ul><h2 id="_19、能说下-vue-router-中常用的-hash-和-history-路由模式实现原理吗" tabindex="-1"><a class="header-anchor" href="#_19、能说下-vue-router-中常用的-hash-和-history-路由模式实现原理吗" aria-hidden="true">#</a> 19、能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？</h2><p><strong>（1）hash 模式的实现原理</strong></p><p>早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 &#39;#search&#39;：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.word.com#search

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hash 路由模式的实现主要是基于下面几个特性：</p><ul><li>URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；</li><li>hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；</li><li>可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；</li><li>我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。</li></ul><p><strong>（2）history 模式的实现原理</strong></p><p>HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>history 路由模式的实现主要基于存在下面几个特性：</p><ul><li>pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；</li><li>我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；</li><li>history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。</li></ul><h2 id="_20、什么是-mvvm" tabindex="-1"><a class="header-anchor" href="#_20、什么是-mvvm" aria-hidden="true">#</a> 20、什么是 MVVM？</h2><p>Model–View–ViewModel （MVVM） 是一个软件架构设计模式，由微软 WPF 和 Silverlight 的架构师 Ken Cooper 和 Ted Peters 开发，是一种简化用户界面的事件驱动编程方式。由 John Gossman（同样也是 WPF 和 Silverlight 的架构师）于2005年在他的博客上发表</p><p>MVVM 源自于经典的 Model–View–Controller（MVC）模式 ，MVVM 的出现促进了前端开发与后端业务逻辑的分离，极大地提高了前端开发效率，MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。如下图所示：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca75871ec53fba~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="1.png"></p><p>（1）View 层</p><p>View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。</p><p>（2）Model 层</p><p>Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。</p><p>（3）ViewModel 层</p><p>ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。</p><p>MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。</p><p>我们以下通过一个 Vue 实例来说明 MVVM 的具体实现，有 Vue 开发经验的同学应该一目了然：</p><p>（1）View 层</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div id=&quot;app&quot;&gt;
    &lt;p&gt;{{message}}&lt;/p&gt;
    &lt;button v-on:click=&quot;showMessage()&quot;&gt;Click me&lt;/button&gt;
&lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）ViewModel 层</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var app = new Vue({
    el: &#39;#app&#39;,
    data: {  // 用于描述视图状态   
        message: &#39;Hello Vue!&#39;, 
    },
    methods: {  // 用于描述视图行为  
        showMessage(){
            let vm = this;
            alert(vm.message);
        }
    },
    created(){
        let vm = this;
        // Ajax 获取 Model 层的数据
        ajax({
            url: &#39;/your/server/data/api&#39;,
            success(res){
                vm.message = res;
            }
        });
    }
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3） Model 层</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;url&quot;: &quot;/your/server/data/api&quot;,
    &quot;res&quot;: {
        &quot;success&quot;: true,
        &quot;name&quot;: &quot;IoveC&quot;,
        &quot;domain&quot;: &quot;www.cnblogs.com&quot;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21、vue-是如何实现数据双向绑定的" tabindex="-1"><a class="header-anchor" href="#_21、vue-是如何实现数据双向绑定的" aria-hidden="true">#</a> 21、Vue 是如何实现数据双向绑定的？</h2><p>Vue 数据双向绑定主要是指：数据变化更新视图，视图变化更新数据，如下图所示：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca75871f2e5f80~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="1.png"></p><p>即：</p><ul><li>输入框内容变化时，Data 中的数据同步变化。即 View =&gt; Data 的变化。</li><li>Data 中的数据变化时，文本节点的内容同步变化。即 Data =&gt; View 的变化。</li></ul><p>其中，View 变化更新 Data ，可以通过事件监听的方式来实现，所以 Vue 的数据双向绑定的工作主要是如何根据 Data 变化更新 View。</p><p>Vue 主要通过以下 4 个步骤来实现数据双向绑定的：</p><p>实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。</p><p>实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。</p><p>实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。</p><p>实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。</p>`,45),p={href:"https://juejin.cn/post/6844903903822086151",title:"https://juejin.cn/post/6844903903822086151",target:"_blank",rel:"noopener noreferrer"},m=d(`<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/19/16ca75871f729d89~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="1.png"></p><h2 id="_22、vue-框架怎么实现对象和数组的监听" tabindex="-1"><a class="header-anchor" href="#_22、vue-框架怎么实现对象和数组的监听" aria-hidden="true">#</a> 22、Vue 框架怎么实现对象和数组的监听？</h2><p>如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object.defineProperty() 对数据进行劫持，但是 Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，那它是怎么实现的呢？我们查看相关代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array&lt;any&gt;) {
    for (let i = 0, l = items.length; i &lt; l; i++) {
      observe(items[i])  // observe 功能为监测数据的变化
    }
  }

  /**
   * 对属性进行递归遍历
   */
  let childOb = !shallow &amp;&amp; observe(val) // observe 功能为监测数据的变化


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。</p><h2 id="_23、proxy-与-object-defineproperty-优劣对比" tabindex="-1"><a class="header-anchor" href="#_23、proxy-与-object-defineproperty-优劣对比" aria-hidden="true">#</a> 23、Proxy 与 Object.defineProperty 优劣对比</h2><p><strong>Proxy 的优势如下:</strong></p><ul><li>Proxy 可以直接监听对象而非属性；</li><li>Proxy 可以直接监听数组的变化；</li><li>Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；</li><li>Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；</li><li>Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；</li></ul><p><strong>Object.defineProperty 的优势如下:</strong></p><ul><li>兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。</li></ul><h2 id="_24、vue-怎么用-vm-set-解决对象新增属性不能响应的问题" tabindex="-1"><a class="header-anchor" href="#_24、vue-怎么用-vm-set-解决对象新增属性不能响应的问题" aria-hidden="true">#</a> 24、Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？</h2><p>受现代 JavaScript 的限制 ，Vue <strong>无法检测到对象属性的添加或删除</strong>。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。但是 Vue 提供了 <code>Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value)</code> 来实现为对象添加响应式属性，那框架本身是如何实现的呢？</p><p>我们查看对应的 Vue 源码：<code>vue/src/core/instance/index.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export function set (target: Array&lt;any&gt; | Object, key: any, val: any): any {
  // target 为数组  
  if (Array.isArray(target) &amp;&amp; isValidArrayIndex(key)) {
    // 修改数组的长度, 避免索引&gt;数组长度导致splcie()执行有误
    target.length = Math.max(target.length, key)
    // 利用数组的splice变异方法触发响应式  
    target.splice(key, 1, val)
    return val
  }
  // key 已经存在，直接修改属性值  
  if (key in target &amp;&amp; !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  // target 本身就不是响应式数据, 直接赋值
  if (!ob) {
    target[key] = val
    return val
  }
  // 对属性进行响应式处理
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们阅读以上源码可知，vm.$set 的实现原理是：</p><ul><li><p>如果目标是数组，直接使用数组的 splice 方法触发相应式；</p></li><li><p>如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法）</p></li></ul><h2 id="_25、虚拟-dom-的优缺点" tabindex="-1"><a class="header-anchor" href="#_25、虚拟-dom-的优缺点" aria-hidden="true">#</a> 25、虚拟 DOM 的优缺点？</h2><p><strong>优点：</strong></p><ul><li><strong>保证性能下限：</strong> 框架的虚拟 DOM 需要适配任何上层 API 可能产生的操作，它的一些 DOM 操作的实现必须是普适的，所以它的性能并不是最优的；但是比起粗暴的 DOM 操作性能要好很多，因此框架的虚拟 DOM 至少可以保证在你不需要手动优化的情况下，依然可以提供还不错的性能，即保证性能的下限；</li><li><strong>无需手动操作 DOM：</strong> 我们不再需要手动去操作 DOM，只需要写好 View-Model 的代码逻辑，框架会根据虚拟 DOM 和 数据双向绑定，帮我们以可预期的方式更新视图，极大提高我们的开发效率；</li><li><strong>跨平台：</strong> 虚拟 DOM 本质上是 JavaScript 对象,而 DOM 与平台强相关，相比之下虚拟 DOM 可以进行更方便地跨平台操作，例如服务器渲染、weex 开发等等。</li></ul><p><strong>缺点:</strong></p><ul><li><strong>无法进行极致优化：</strong> 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。</li></ul><h2 id="_26、虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#_26、虚拟-dom-实现原理" aria-hidden="true">#</a> 26、虚拟 DOM 实现原理？</h2><p>虚拟 DOM 的实现原理主要包括以下 3 部分：</p><ul><li>用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象；</li><li>diff 算法 — 比较两棵虚拟 DOM 树的差异；</li><li>pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。</li></ul>`,24),h={href:"https://juejin.cn/post/6844903895467032589#heading-14",title:"https://juejin.cn/post/6844903895467032589#heading-14",target:"_blank",rel:"noopener noreferrer"},b=i("h2",{id:"_27、vue-中的-key-有什么作用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_27、vue-中的-key-有什么作用","aria-hidden":"true"},"#"),e(" 27、Vue 中的 key 有什么作用？")],-1),g={href:"https://juejin.cn/post/6844903895467032589#heading-14",title:"https://juejin.cn/post/6844903895467032589#heading-14",target:"_blank",rel:"noopener noreferrer"},x=d(`<p>所以 Vue 中 key 的作用是：key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速</p><p><strong>更准确</strong>：因为带 key 就不是就地复用了，在 sameNode 函数 <code>a.key === b.key</code> 对比中可以避免就地复用的情况。所以会更加准确。</p><p><strong>更快速</strong>：利用 key 的唯一性生成 map 对象来获取对应节点，比遍历方式更快，源码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function createKeyToOldIdx (children, beginIdx, endIdx) {
  let i, key
  const map = {}
  for (i = beginIdx; i &lt;= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_28、你有对-vue-项目进行哪些优化" tabindex="-1"><a class="header-anchor" href="#_28、你有对-vue-项目进行哪些优化" aria-hidden="true">#</a> 28、你有对 Vue 项目进行哪些优化？</h2>`,5),V={href:"https://juejin.cn/post/6844903913410314247",title:"https://juejin.cn/post/6844903913410314247",target:"_blank",rel:"noopener noreferrer"},f=d('<p><strong>（1）代码层面的优化</strong></p><ul><li>v-if 和 v-show 区分使用场景</li><li>computed 和 watch 区分使用场景</li><li>v-for 遍历必须为 item 添加 key，且避免同时使用 v-if</li><li>长列表性能优化</li><li>事件的销毁</li><li>图片资源懒加载</li><li>路由懒加载</li><li>第三方插件的按需引入</li><li>优化无限列表性能</li><li>服务端渲染 SSR or 预渲染</li></ul><p><strong>（2）Webpack 层面的优化</strong></p><ul><li>Webpack 对图片进行压缩</li><li>减少 ES6 转为 ES5 的冗余代码</li><li>提取公共代码</li><li>模板预编译</li><li>提取组件的 CSS</li><li>优化 SourceMap</li><li>构建结果输出分析</li><li>Vue 项目的编译优化</li></ul><p><strong>（3）基础的 Web 技术的优化</strong></p><ul><li><p>开启 gzip 压缩</p></li><li><p>浏览器缓存</p></li><li><p>CDN 的使用</p></li><li><p>使用 Chrome Performance 查找性能瓶颈</p></li></ul><h2 id="_29、对于即将到来的-vue3-0-特性你有什么了解的吗" tabindex="-1"><a class="header-anchor" href="#_29、对于即将到来的-vue3-0-特性你有什么了解的吗" aria-hidden="true">#</a> 29、对于即将到来的 vue3.0 特性你有什么了解的吗？</h2><p>Vue 3.0 正走在发布的路上，Vue 3.0 的目标是让 Vue 核心变得更小、更快、更强大，因此 Vue 3.0 增加以下这些新特性：</p><p><strong>（1）监测机制的改变</strong></p><p>3.0 将带来基于代理 Proxy 的 observer 实现，提供全语言覆盖的反应性跟踪。这消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制：</p><ul><li><p>只能监测属性，不能监测对象</p></li><li><p>检测属性的添加和删除；</p></li><li><p>检测数组索引和长度的变更；</p></li><li><p>支持 Map、Set、WeakMap 和 WeakSet。</p></li></ul><p>新的 observer 还提供了以下特性：</p><ul><li>用于创建 observable 的公开 API。这为中小规模场景提供了简单轻量级的跨组件状态管理解决方案。</li><li>默认采用惰性观察。在 2.x 中，不管反应式数据有多大，都会在启动时被观察到。如果你的数据集很大，这可能会在应用启动时带来明显的开销。在 3.x 中，只观察用于渲染应用程序最初可见部分的数据。</li><li>更精确的变更通知。在 2.x 中，通过 Vue.set 强制添加新属性将导致依赖于该对象的 watcher 收到变更通知。在 3.x 中，只有依赖于特定属性的 watcher 才会收到通知。</li><li>不可变的 observable：我们可以创建值的“不可变”版本（即使是嵌套属性），除非系统在内部暂时将其“解禁”。这个机制可用于冻结 prop 传递或 Vuex 状态树以外的变化。</li><li>更好的调试功能：我们可以使用新的 renderTracked 和 renderTriggered 钩子精确地跟踪组件在什么时候以及为什么重新渲染。</li></ul><p><strong>（2）模板</strong></p><p>模板方面没有大的变更，只改了作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。</p><p>同时，对于 render 函数的方面，vue3.0 也会进行一系列更改来方便习惯直接使用 api 来生成 vdom 。</p><p><strong>（3）对象式的组件声明方式</strong></p><p>vue2.x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。3.0 修改了组件的声明方式，改成了类式的写法，这样使得和 TypeScript 的结合变得很容易。</p><p>此外，vue 的源码也改用了 TypeScript 来写。其实当代码的功能复杂之后，必须有一个静态类型系统来做一些辅助管理。现在 vue3.0 也全面改用 TypeScript 来重写了，更是使得对外暴露的 api 更容易结合 TypeScript。静态类型系统对于复杂代码的维护确实很有必要。</p><p><strong>（4）其它方面的更改</strong></p><p>vue3.0 的改变是全面的，上面只涉及到主要的 3 个方面，还有一些其他的更改：</p><ul><li>支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。</li><li>支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。</li><li>基于 treeshaking 优化，提供了更多的内置功能。</li></ul><h2 id="_30、说说你使用-vue-框架踩过最大的坑是什么-怎么解决的" tabindex="-1"><a class="header-anchor" href="#_30、说说你使用-vue-框架踩过最大的坑是什么-怎么解决的" aria-hidden="true">#</a> 30、说说你使用 Vue 框架踩过最大的坑是什么？怎么解决的？</h2>',23);function y(_,M){const n=r("ExternalLinkIcon");return a(),s("div",null,[o,i("p",null,[e("如果没有 SSR 开发经验的同学，可以参考本文作者的另一篇 SSR 的实践文章"),i("a",v,[e("《Vue SSR 踩坑之旅》"),l(n)]),e("，里面 SSR 项目搭建以及附有项目源码。")]),c,i("p",null,[e("以上四个步骤的流程图表示如下，如果有同学理解不大清晰的，可以查看作者专门介绍数据双向绑定的文章"),i("a",p,[e("《0 到 1 掌握：Vue 核心之数据双向绑定》"),l(n)]),e("，有进行详细的讲解、以及代码 demo 示例。")]),m,i("p",null,[e("如果对以上 3 个部分还不是很了解的同学，可以查看本文作者写的另一篇详解虚拟 DOM 的文章《"),i("a",h,[e("深入剖析：Vue核心之虚拟DOM"),l(n)]),e("》")]),b,i("p",null,[e("key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速。Vue 的 diff 过程可以概括为：oldCh 和 newCh 各有两个头尾的变量 oldStartIndex、oldEndIndex 和 newStartIndex、newEndIndex，它们会新节点和旧节点会进行两两对比，即一共有4种比较方式：newStartIndex 和oldStartIndex 、newEndIndex 和 oldEndIndex 、newStartIndex 和 oldEndIndex 、newEndIndex 和 oldStartIndex，如果以上 4 种比较都没匹配，如果设置了key，就会用 key 再进行比较，在比较的过程中，遍历会往中间靠，一旦 StartIdx > EndIdx 表明 oldCh 和 newCh 至少有一个已经遍历完了，就会结束比较。具体有无 key 的 diff 过程，可以查看作者写的另一篇详解虚拟 DOM 的文章《"),i("a",g,[e("深入剖析：Vue核心之虚拟DOM"),l(n)]),e("》")]),x,i("p",null,[e("如果没有对 Vue 项目没有进行过优化总结的同学，可以参考本文作者的另一篇文章"),i("a",V,[e("《 Vue 项目性能优化 — 实践指南 》"),l(n)]),e("，文章主要介绍从 3 个大方面，22 个小方面详细讲解如何进行 Vue 项目的优化。")]),f])}const w=t(u,[["render",y],["__file","index.html.vue"]]);export{w as default};
