import{_ as e,z as p,A as o,X as n,C as s,T as t,a6 as l,Q as c}from"./framework.fef63301.js";const i={},u=n("h1",{id:"开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开始","aria-hidden":"true"},"#"),s(" 开始")],-1),r=n("h2",{id:"npm-地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm-地址","aria-hidden":"true"},"#"),s(" npm 地址")],-1),d={href:"https://www.npmjs.com/package/@xiaomh/vue3-alan-vite-component",target:"_blank",rel:"noopener noreferrer"},k=n("h2",{id:"github-地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github-地址","aria-hidden":"true"},"#"),s(" github 地址")],-1),v={href:"https://github.com/2401345934/vue3-alan-vite-component",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="组件下载" tabindex="-1"><a class="header-anchor" href="#组件下载" aria-hidden="true">#</a> 组件下载</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i @xiaomh<span class="token operator">/</span>vue3<span class="token operator">-</span>alan<span class="token operator">-</span>vite<span class="token operator">-</span>component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="全局使用方法" tabindex="-1"><a class="header-anchor" href="#全局使用方法" aria-hidden="true">#</a> 全局使用方法</h2><p>在vue3项目中全局引用的方式</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//main.ts or main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Vue3StarrySky <span class="token keyword">from</span> <span class="token string">&#39;@xiaomh/vue3-alan-vite-component&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@xiaomh/vue3-alan-vite-component/lib/style.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vue3StarrySky<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用ts+vite的方式，需要在env.d.ts中加入最后一句声明，否则ts会检测报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference types=&quot;vite/client&quot; /&gt;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;*.vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types</span>
  <span class="token keyword">const</span> component<span class="token operator">:</span> DefineComponent<span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> component
<span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;@xiaomh/vue3-alan-vite-component&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>starry-sky</span> <span class="token attr-name">:stars-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:distance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="局部引用方法" tabindex="-1"><a class="header-anchor" href="#局部引用方法" aria-hidden="true">#</a> 局部引用方法</h2><h3 id="starrysky-示例" tabindex="-1"><a class="header-anchor" href="#starrysky-示例" aria-hidden="true">#</a> StarrySky 示例</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
import { StarrySky } from &#39;@xiaomh/vue3-alan-vite-component&#39;;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>starry-sky</span> <span class="token attr-name">:stars-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:distance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="digitalscroll-示例" tabindex="-1"><a class="header-anchor" href="#digitalscroll-示例" aria-hidden="true">#</a> DigitalScroll 示例</h3><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
import { DigitalScroll } from &#39;@xiaomh/vue3-alan-vite-component&#39;;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
 </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>digital-scroll</span> <span class="token attr-name">:targetNumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">targetClass</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>digital-scroll</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function g(h,b){const a=c("ExternalLinkIcon");return p(),o("div",null,[u,r,n("p",null,[n("a",d,[s("@xiaomh/vue3-alan-vite-component"),t(a)])]),k,n("p",null,[n("a",v,[s("@xiaomh/vue3-alan-vite-component"),t(a)])]),m])}const x=e(i,[["render",g],["__file","index.html.vue"]]);export{x as default};
