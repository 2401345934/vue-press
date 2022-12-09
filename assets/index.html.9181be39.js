import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const i={},l=e(`<h1 id="gitlab-cicd" tabindex="-1"><a class="header-anchor" href="#gitlab-cicd" aria-hidden="true">#</a> gitlab CiCd</h1><h2 id="gitlabci" tabindex="-1"><a class="header-anchor" href="#gitlabci" aria-hidden="true">#</a> GitLabCI</h2><ul><li>轻量级，不需要复杂的安装手段。</li><li>配置简单，与gitlab可直接适配。</li><li>实时构建日志十分清晰，UI交互体验很好</li><li>使用 YAMIL，进行配置，任何人都可以很方便的使用。</li><li>没有统一的管理界面，无法统筹管理所有项目 ·</li><li>配置依赖于代码仓库，耦合度没有Jenkins低</li></ul><h2 id="ci-持续集成" tabindex="-1"><a class="header-anchor" href="#ci-持续集成" aria-hidden="true">#</a> CI 持续集成</h2><ul><li>合并开发人员正在开发编写的所有代码一种做法</li><li>一天之内多次合并提交代码</li><li>从存储库货生产环境中进行构建和自动化测试 保证没有问题 和低级错误</li></ul><h2 id="cd-连续交付" tabindex="-1"><a class="header-anchor" href="#cd-连续交付" aria-hidden="true">#</a> CD 连续交付</h2><ul><li>通常可以自动将更改自动推送到 发布系统 随时软件发布到生产环境</li><li>持续部署 会更进一步 并自动将更改推送到生产中。</li></ul><p>会在开始的</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>stages：
  // 在此处定义阶段  就是 每次我们打tag 和打版本都会显示几个圆圈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">stages</span><span class="token punctuation">:</span>  <span class="token comment"># 定义了两个阶段  一个 build  一个 test</span>

* build
* test

<span class="token key atrule">build-code-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build  <span class="token comment"># 第一个阶段的第一个事情 开始build</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;Check the ruby version<span class="token punctuation">,</span> then build some Ruby project files<span class="token punctuation">:</span>&quot;
    <span class="token punctuation">-</span> ruby <span class="token punctuation">-</span>v
    <span class="token punctuation">-</span> rake

<span class="token key atrule">test-code-job1</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test  <span class="token comment"># 第二个阶段的第一个事情 开始test</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;If the files are built successfully<span class="token punctuation">,</span> test some files with one command<span class="token punctuation">:</span>&quot;
    <span class="token punctuation">-</span> rake test1

<span class="token key atrule">test-code-job2</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test  <span class="token comment"># 第二个阶段的第二个事情 开始test</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;If the files are built successfully<span class="token punctuation">,</span> test other files with a different command<span class="token punctuation">:</span>&quot;
    <span class="token punctuation">-</span> rake test2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大致可以分为几个阶段" tabindex="-1"><a class="header-anchor" href="#大致可以分为几个阶段" aria-hidden="true">#</a> 大致可以分为几个阶段</h3><ul><li>第一阶段 编译阶段 <ul><li>一般都会先build 开始编译</li><li>代码测试 单元测试</li><li>可以在本阶段进行 打包 在第二阶段直接用 但是要通过缓存 cache</li></ul></li><li>第二阶段 打包 <ul><li>jar 报</li></ul></li><li>第三阶段 发布</li></ul><p>每个阶段之间的数据是可以放到缓存里面共享的 但是每个事情之间 的数据是不能共享的 阶段与阶段之前 一定 是 串行的 （前端叫做同步） 每个阶段的事情是 并行的 （前端叫做异步）</p>`,13),t=[l];function c(u,d){return s(),a("div",null,t)}const o=n(i,[["render",c],["__file","index.html.vue"]]);export{o as default};
