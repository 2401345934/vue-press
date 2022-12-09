import{_ as a,z as e,A as s,T as l,a6 as t,Q as i}from"./framework.fef63301.js";const c={},d=t('<h1 id="dynamiccard-卡片组件" tabindex="-1"><a class="header-anchor" href="#dynamiccard-卡片组件" aria-hidden="true">#</a> DynamicCard 卡片组件</h1><h2 id="何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用" aria-hidden="true">#</a> 何时使用</h2><p>用于让卡片动画的场景</p><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>',4),r=t(`<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
import { DynamicCard } from &#39;@xiaomh/vue3-alan-vite-component&#39;;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dynamic-card</span> <span class="token attr-name">:cardList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
  {
    text:&#39;哈喽哈喽哈喽哈喽1&#39;
  },
  {
    text:&#39;哈喽哈喽哈喽哈喽2&#39;
  },
  {
    text:&#39;哈喽哈喽哈喽哈喽21&#39;
  },
  {
    text:&#39;哈喽哈喽哈喽哈喽31&#39;
  },
]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dynamic-card</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明" aria-hidden="true">#</a> 属性说明</h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">cardList</td><td style="text-align:center;">卡片list</td><td style="text-align:center;">Array</td><td style="text-align:center;">[]</td><td style="text-align:center;">1.0.27</td></tr><tr><td style="text-align:center;">shape</td><td style="text-align:center;">卡片排序 0：列表 1:乱序扇形 2:正序扇形</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td><td style="text-align:center;">1.0.25</td></tr><tr><td style="text-align:center;">isKeyboardControl</td><td style="text-align:center;">是否需要键盘控制 开启后可以 通过 上下左右箭头控制</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">1.0.25</td></tr></tbody></table><h4 id="cardlist-属性说明" tabindex="-1"><a class="header-anchor" href="#cardlist-属性说明" aria-hidden="true">#</a> cardList 属性说明</h4><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">text</td><td style="text-align:center;">卡片文本</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td><td style="text-align:center;">1.0.27</td></tr></tbody></table>`,6);function p(o,u){const n=i("dynamic-card");return e(),s("div",null,[d,l(n,{cardList:[{text:"哈喽哈喽哈喽哈喽1"},{text:"哈喽哈喽哈喽哈喽2"},{text:"哈喽哈喽哈喽哈喽21"},{text:"哈喽哈喽哈喽哈喽31"}]}),r])}const g=a(c,[["render",p],["__file","index.html.vue"]]);export{g as default};
