import{_ as a,z as e,A as n,a6 as s}from"./framework.fef63301.js";const r={},i=s(`<h1 id="link-创建软链" tabindex="-1"><a class="header-anchor" href="#link-创建软链" aria-hidden="true">#</a> link 创建软链</h1><h3 id="使用软链-npm-link" tabindex="-1"><a class="header-anchor" href="#使用软链-npm-link" aria-hidden="true">#</a> 使用软链 npm link</h3><p>主要是平时开发时，有npm包需要在本地调试好了再发布。发一版测一版，或者把代码复制粘贴到项目文件夹里去调试，很不优雅。软链就变得极为有用了，特别是需要调试的npm包不止一个，且彼此之间需要联调。</p><h3 id="_1-什么是软链" tabindex="-1"><a class="header-anchor" href="#_1-什么是软链" aria-hidden="true">#</a> 1. 什么是软链？</h3><p>简单说就是为开发的模块(待发布的npm包)创造一个全局链接，在主项目里链接这个依赖的模块，进行测试。</p><h3 id="_2-如何创建、使用、去除软链" tabindex="-1"><a class="header-anchor" href="#_2-如何创建、使用、去除软链" aria-hidden="true">#</a> 2. 如何创建、使用、去除软链？</h3><h4 id="_2-1-先在对应npm包的文件创建一个全局的链接" tabindex="-1"><a class="header-anchor" href="#_2-1-先在对应npm包的文件创建一个全局的链接" aria-hidden="true">#</a> 2.1 先在对应npm包的文件创建一个全局的链接</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cd <span class="token operator">~</span><span class="token operator">/</span>projects<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">-</span>project npm link
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-2-然后再想要使用该包的项目里使用这个软链" tabindex="-1"><a class="header-anchor" href="#_2-2-然后再想要使用该包的项目里使用这个软链" aria-hidden="true">#</a> 2.2 然后再想要使用该包的项目里使用这个软链</h4><p>Tips: 注意这里的packageName一定要对应你的npm包package.json里的name字段值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cd <span class="token operator">~</span><span class="token operator">/</span>projects<span class="token operator">/</span><span class="token keyword">package</span><span class="token operator">-</span>project npm link packageName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>好啦，通过上边两步，我们已经可以在主项目里使用位于本地的npm包了😊。</p><h4 id="_2-3-用完了如何去除软链呢" tabindex="-1"><a class="header-anchor" href="#_2-3-用完了如何去除软链呢" aria-hidden="true">#</a> 2.3 用完了如何去除软链呢？</h4><p>下边两步的顺序，我自己试了下，颠倒顺序其实也没报错。但是既然有同学提出来了，我觉得逻辑上先unlink包再删掉全局link可能更合理些。</p><h4 id="_2-31-先在使用npm包的项目的文件目录下解除特定的链接" tabindex="-1"><a class="header-anchor" href="#_2-31-先在使用npm包的项目的文件目录下解除特定的链接" aria-hidden="true">#</a> 2.31 先在使用npm包的项目的文件目录下解除特定的链接</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm unlink packageName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-32-再在npm包所在的文件目录下去除全局链接" tabindex="-1"><a class="header-anchor" href="#_2-32-再在npm包所在的文件目录下去除全局链接" aria-hidden="true">#</a> 2.32 再在npm包所在的文件目录下去除全局链接</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm unlink
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>到这里其实就OK了</p><h4 id="_2-33-强制解除创建的某个特定全局链接" tabindex="-1"><a class="header-anchor" href="#_2-33-强制解除创建的某个特定全局链接" aria-hidden="true">#</a> 2.33 强制解除创建的某个特定全局链接</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>sudo npm rm <span class="token operator">--</span>global packageName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-34-查看所有创建的全局链接名称" tabindex="-1"><a class="header-anchor" href="#_2-34-查看所有创建的全局链接名称" aria-hidden="true">#</a> 2.34 查看所有创建的全局链接名称</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm ls <span class="token operator">--</span>global <span class="token operator">--</span>depth <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),d=[i];function p(c,l){return e(),n("div",null,d)}const o=a(r,[["render",p],["__file","index.html.vue"]]);export{o as default};
