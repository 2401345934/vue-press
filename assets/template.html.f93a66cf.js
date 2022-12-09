import{_ as n,z as e,A as s,T as r,a6 as t,Q as l}from"./framework.fef63301.js";const c={},i=t('<h1 id="starrysky-星空背景" tabindex="-1"><a class="header-anchor" href="#starrysky-星空背景" aria-hidden="true">#</a> StarrySky 星空背景</h1><h2 id="何时使用" tabindex="-1"><a class="header-anchor" href="#何时使用" aria-hidden="true">#</a> 何时使用</h2><p>用于让背景拥有星空效果</p><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>',4),d=t(`<div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
import { StarrySky } from &quot;@xiaomh/vue3-alan-vite-component&quot;

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>starry-sky</span> <span class="token attr-name">:stars-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:distance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明" aria-hidden="true">#</a> 属性说明</h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">stars-count</td><td style="text-align:center;">星星总数</td><td style="text-align:center;">number</td><td style="text-align:center;">800</td><td style="text-align:center;">1.0.0</td></tr><tr><td style="text-align:center;">distance</td><td style="text-align:center;">偏移量</td><td style="text-align:center;">number</td><td style="text-align:center;">800</td><td style="text-align:center;">1.0.0</td></tr></tbody></table>`,4);function o(p,u){const a=l("starry-sky");return e(),s("div",null,[i,r(a,{"stars-count":1e3,distance:1e3}),d])}const k=n(c,[["render",o],["__file","template.html.vue"]]);export{k as default};
