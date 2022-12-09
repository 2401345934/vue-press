import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const p={},t=e(`<h1 id="interface-和-type-的区别" tabindex="-1"><a class="header-anchor" href="#interface-和-type-的区别" aria-hidden="true">#</a> interface 和 type 的区别</h1><h2 id="type和interface的相同点" tabindex="-1"><a class="header-anchor" href="#type和interface的相同点" aria-hidden="true">#</a> type和interface的相同点</h2><h3 id="都是用来定义-对象-或者-函数-的形状" tabindex="-1"><a class="header-anchor" href="#都是用来定义-对象-或者-函数-的形状" aria-hidden="true">#</a> 都是用来定义 对象 或者 函数 的形状</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>   <span class="token keyword">interface</span> <span class="token class-name">example</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">exampleFunc</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">type</span> <span class="token class-name">example</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">type</span> <span class="token class-name">example</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它俩也支持 继承，并且不是独立的，而是可以 互相 继承，只是具体的形式稍有差别 对于interface来说，继承是通过 extends 实现的，而type的话是通过 &amp; 来实现的，也可以叫做 交叉类型</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>   <span class="token keyword">type</span> <span class="token class-name">exampleType1</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
       name<span class="token operator">:</span> <span class="token builtin">string</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">interface</span> <span class="token class-name">exampleInterface1</span> <span class="token punctuation">{</span>
       name<span class="token operator">:</span> <span class="token builtin">string</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">type</span> <span class="token class-name">exampleType2</span> <span class="token operator">=</span> exampleType1 <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
       age<span class="token operator">:</span> <span class="token builtin">number</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">type</span> <span class="token class-name">exampleType2</span> <span class="token operator">=</span> exampleInterface1 <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
       age<span class="token operator">:</span> <span class="token builtin">number</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">interface</span> <span class="token class-name">exampleInterface2</span> <span class="token keyword">extends</span> <span class="token class-name">exampleType1</span> <span class="token punctuation">{</span>
       age<span class="token operator">:</span> <span class="token builtin">number</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">interface</span> <span class="token class-name">exampleInterface2</span> <span class="token keyword">extends</span> <span class="token class-name">exampleInterface1</span> <span class="token punctuation">{</span>
       age<span class="token operator">:</span> <span class="token builtin">number</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type和interface的不同点" tabindex="-1"><a class="header-anchor" href="#type和interface的不同点" aria-hidden="true">#</a> type和interface的不同点</h2><h3 id="首先聊聊type可以做到-但interface不能做到的事情" tabindex="-1"><a class="header-anchor" href="#首先聊聊type可以做到-但interface不能做到的事情" aria-hidden="true">#</a> 首先聊聊type可以做到，但interface不能做到的事情</h3><ul><li>type可以定义 基本类型的别名，如 type myString = string</li><li>type可以通过 typeof 操作符来定义，如 type myType = typeof someObj</li><li>type可以申明 联合类型，如 type unionType = myType1 | myType2</li><li>type可以申明 元组类型，如 type yuanzu = [myType1, myType2]</li></ul><h3 id="接下来聊聊interface可以做到-但是type不可以做到的事情" tabindex="-1"><a class="header-anchor" href="#接下来聊聊interface可以做到-但是type不可以做到的事情" aria-hidden="true">#</a> 接下来聊聊interface可以做到，但是type不可以做到的事情</h3><p>interface可以 声明合并，示例如下 如果是type的话，就会是 覆盖 的效果，始终只有最后一个type生效</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>    <span class="token keyword">interface</span> <span class="token class-name">test</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">interface</span> <span class="token class-name">test</span> <span class="token punctuation">{</span>
        age<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
        test实际为 {
            name: string
            age: number
        }
    */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[t];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","index.html.vue"]]);export{d as default};
