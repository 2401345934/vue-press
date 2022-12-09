import{_ as n,z as a,A as s,a6 as e}from"./framework.fef63301.js";const t={},i=e(`<h1 id="http-请求跨域问题" tabindex="-1"><a class="header-anchor" href="#http-请求跨域问题" aria-hidden="true">#</a> HTTP 请求跨域问题</h1><h2 id="跨域的原理跨域" tabindex="-1"><a class="header-anchor" href="#跨域的原理跨域" aria-hidden="true">#</a> 跨域的原理跨域</h2><p>是指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的。 同源策略,是浏览器对 JavaScript 实施的安全限制，只要协议、域名、端口有任何一个不同，都被当作是不同的域。</p><h2 id="跨域原理" tabindex="-1"><a class="header-anchor" href="#跨域原理" aria-hidden="true">#</a> 跨域原理</h2><p>即是通过各种方式，避开浏览器的安全限制。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>最初做项目的时候，使用的是jsonp，但存在一些问题，使用get请求不安全，携带数据较小，后来也用过iframe，但只有主域相同才行，也是存在些问题，后来通过了解和学习发现使用代理和proxy代理配合起来使用比较方便，就引导后台按这种方式做下服务器配置，在开发中使用proxy，在服务器上使用nginx代理，这样开发过程中彼此都方便，效率也高；现在h5新特性还有 windows.postMessage()</p><h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3><p>ajax 请求受同源策略影响，不允许进行跨域请求，而 script 标签 src 属性中的链 接却可以访问跨域的 js 脚本，利用这个特性，服务端不再返回 JSON 格式的数据，而是 返回一段调用某个函数的 js 代码，在 src 中进行了调用，这样实现了跨域。</p><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><ul><li>去创建一个script标签</li><li>script的src属性设置接口地址</li><li>接口参数，必须要带一个自定义函数名，要不然后台无法返回数据</li><li>通过定义函数名去接受返回的数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//动态创建 script</span>
<span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置回调函数</span>
<span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//设置 script 的 src 属性，并设置请求地址</span>
script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000/?callback=getData&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 让 script 生效</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>JSONP 的缺点: JSON 只支持 get，因为 script 标签只能使用 get 请求； JSONP 需要后端配合返回指定格式的数据。</li><li>document.domain 基础域名相同 子域名不同</li><li>window.name 利用在一个浏览器窗口内，载入所有的域名都是共享一个window.name</li><li>CORS CORS(Cross-origin resource sharing)跨域资源共享 服务器设置对CORS的支持原理：服务器设置Access-Control-Allow-Origin HTTP响应头之后，浏览器将会允许跨域请求</li><li>proxy代理 目前常用方式,通过服务器设置代理</li><li>window.postMessage() 利用h5新特性window.postMessage()</li></ul><h2 id="跨域问题实际上改的是-http-里面哪个参数" tabindex="-1"><a class="header-anchor" href="#跨域问题实际上改的是-http-里面哪个参数" aria-hidden="true">#</a> 跨域问题实际上改的是 http 里面哪个参数</h2><p>答：Access-Control-Allow-Origin</p>`,15),c=[i];function p(o,l){return a(),s("div",null,c)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
