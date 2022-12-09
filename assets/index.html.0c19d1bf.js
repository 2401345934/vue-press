import{_ as i,z as p,A as l,X as n,C as s,T as e,a6 as t,Q as o}from"./framework.fef63301.js";const c={},r=n("h1",{id:"从0搭建-vite-3-vue-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从0搭建-vite-3-vue-3","aria-hidden":"true"},"#"),s(" 从0搭建 Vite 3 + Vue 3")],-1),d=n("ul",null,[n("li",null,"基础搭建"),n("li",null,"代码规范"),n("li",null,"提交规范"),n("li",null,"自动部署")],-1),u=n("h2",{id:"技术栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#技术栈","aria-hidden":"true"},"#"),s(" 技术栈")],-1),v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcn.vitejs.dev",title:"https://cn.vitejs.dev",target:"_blank",rel:"noopener noreferrer"},m={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcn.vuejs.org",title:"https://cn.vuejs.org",target:"_blank",rel:"noopener noreferrer"},k={href:"https://link.juejin.cn/?target=https%3A%2F%2Frouter.vuejs.org%2Fzh",title:"https://router.vuejs.org/zh",target:"_blank",rel:"noopener noreferrer"},b={href:"https://link.juejin.cn/?target=https%3A%2F%2Fpinia.vuejs.org%2Fzh",title:"https://pinia.vuejs.org/zh",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.juejin.cn/?target=https%3A%2F%2Ftdesign.tencent.com%2Fvue-next%2Fgetting-started",title:"https://tdesign.tencent.com/vue-next/getting-started",target:"_blank",rel:"noopener noreferrer"},g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fless.bootcss.com%2F",title:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://link.juejin.cn/?target=https%3A%2F%2Faxios-http.com%2Fzh%2F",title:"https://axios-http.com/zh/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://link.juejin.cn/?target=https%3A%2F%2Ftypicode.github.io%2Fhusky%2F%23%2F",title:"https://typicode.github.io/husky/#/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fokonet%2Flint-staged",title:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},j={href:"https://link.juejin.cn/?target=http%3A%2F%2Feditorconfig.org",title:"http://editorconfig.org",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.juejin.cn/?target=http%3A%2F%2Feslint.cn",title:"http://eslint.cn",target:"_blank",rel:"noopener noreferrer"},F={href:"https://link.juejin.cn/?target=https%3A%2F%2Fprettier.cn",title:"https://prettier.cn",target:"_blank",rel:"noopener noreferrer"},w={href:"https://link.juejin.cn/?target=https%3A%2F%2Fstylelint.cn",title:"https://stylelint.cn",target:"_blank",rel:"noopener noreferrer"},S={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcz-git.qbb.sh%2Fzh",title:"https://cz-git.qbb.sh/zh",target:"_blank",rel:"noopener noreferrer"},A={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcommitlint.js.org",title:"https://commitlint.js.org",target:"_blank",rel:"noopener noreferrer"},q={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.github.com%2Fcn%2Factions%2Flearn-github-actions",title:"https://docs.github.com/cn/actions/learn-github-actions",target:"_blank",rel:"noopener noreferrer"},E=n("h2",{id:"基础搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础搭建","aria-hidden":"true"},"#"),s(" 基础搭建")],-1),C=n("h2",{id:"构建项目雏形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建项目雏形","aria-hidden":"true"},"#"),s(" 构建项目雏形")],-1),z={href:"https://link.juejin.cn/?target=https%3A%2F%2Fnodejs.org%2F",title:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},L=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># npm <span class="token number">6</span><span class="token punctuation">.</span>x
npm create vite@latest vite<span class="token operator">-</span>vue<span class="token operator">-</span>js<span class="token operator">-</span>template <span class="token operator">--</span>template vue

# npm <span class="token number">7</span><span class="token operator">+</span><span class="token punctuation">,</span> extra double<span class="token operator">-</span>dash is needed<span class="token operator">:</span>
npm create vite@latest vite<span class="token operator">-</span>vue<span class="token operator">-</span>js<span class="token operator">-</span>template <span class="token operator">--</span> <span class="token operator">--</span>template vue

# yarn
yarn create vite vite<span class="token operator">-</span>vue<span class="token operator">-</span>js<span class="token operator">-</span>template <span class="token operator">--</span>template vue

# pnpm
pnpm create vite vite<span class="token operator">-</span>vue<span class="token operator">-</span>js<span class="token operator">-</span>template <span class="token operator">--</span>template vue

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvitejs%2Fvite%2Ftree%2Fmain%2Fpackages%2Fcreate-vite",title:"https://github.com/vitejs/vite/tree/main/packages/create-vite",target:"_blank",rel:"noopener noreferrer"},P=t(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be38346077c94795825caabf915ab287~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="初始化项目"></p><p>在项目被创建后，通过以下步骤安装依赖并启动开发服务器：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 打开项目
cd <span class="token operator">&lt;</span>your<span class="token operator">-</span>project<span class="token operator">-</span>name<span class="token operator">&gt;</span>

# 安装依赖
npm install

# 启动项目
npm run dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e366d4bdf71d43af89da642069ac0485~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="启动项目"></p><h2 id="vite-基础配置" tabindex="-1"><a class="header-anchor" href="#vite-基础配置" aria-hidden="true">#</a> Vite 基础配置</h2><p>Vite 配置文件 <code>vite.config.js</code> 位于项目根目录下，项目启动时会自动读取。</p><p>本项目针对公共基础路径、自定义路径别名、服务器选项、构建选项等做了如下基础配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 是否开启 https</span>
      <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">// 端口号</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
      <span class="token comment">// 监听所有地址</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 服务启动时是否自动打开浏览器</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 允许跨域</span>
      <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 自定义代理规则</span>
      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置最终构建的浏览器兼容目标</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;es2015&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 构建后是否生成 source map 文件</span>
      <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token comment">//  chunk 大小警告的限制（以 kbs 为单位）</span>
      <span class="token literal-property property">chunkSizeWarningLimit</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
      <span class="token comment">// 启用/禁用 gzip 压缩大小报告</span>
      <span class="token literal-property property">reportCompressedSize</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),I={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcn.vitejs.dev%2Fconfig%2F",title:"https://cn.vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},D=t(`<h2 id="规范目录结构" tabindex="-1"><a class="header-anchor" href="#规范目录结构" aria-hidden="true">#</a> 规范目录结构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>├── dist<span class="token operator">/</span>
└── src<span class="token operator">/</span>
    ├── api<span class="token operator">/</span>                       <span class="token comment">// 接口请求目录</span>
    ├── assets<span class="token operator">/</span>                    <span class="token comment">// 静态资源目录</span>
    ├── common<span class="token operator">/</span>                    <span class="token comment">// 通用类库目录</span>
    ├── components<span class="token operator">/</span>                <span class="token comment">// 公共组件目录</span>
    ├── router<span class="token operator">/</span>                    <span class="token comment">// 路由配置目录</span>
    ├── store<span class="token operator">/</span>                     <span class="token comment">// 状态管理目录</span>
    ├── style<span class="token operator">/</span>                     <span class="token comment">// 通用样式目录</span>
    ├── utils<span class="token operator">/</span>                     <span class="token comment">// 工具函数目录</span>
    ├── views<span class="token operator">/</span>                     <span class="token comment">// 页面组件目录</span>
    ├── App<span class="token punctuation">.</span>vue
    ├── main<span class="token punctuation">.</span>js
├── tests<span class="token operator">/</span>                         <span class="token comment">// 单元测试目录</span>
├── index<span class="token punctuation">.</span>html
├── jsconfig<span class="token punctuation">.</span>json                  <span class="token comment">// JavaScript 配置文件</span>
├── vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js                 <span class="token comment">// Vite 配置文件</span>
└── <span class="token keyword">package</span><span class="token punctuation">.</span>json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-vue-router-路由工具" tabindex="-1"><a class="header-anchor" href="#集成-vue-router-路由工具" aria-hidden="true">#</a> 集成 Vue Router 路由工具</h2><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i vue<span class="token operator">-</span>router@<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建路由配置文件" tabindex="-1"><a class="header-anchor" href="#创建路由配置文件" aria-hidden="true">#</a> 创建路由配置文件</h3><p>在 <code>src/router</code> 目录下新建 <code>index.js</code> 文件与 <code>modules</code> 文件夹</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── src/
    ├── router/
     ├── modules/  // 路由模块
        ├── index.js  // 路由配置文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于路由表，建议根据功能的不同来拆分到 <code>modules</code> 文件夹中，好处是：</p><ul><li><p>方便后期维护</p></li><li><p>减少 Git 合并代码冲突可能性</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/HomeView.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/AboutView.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> baseRouters <span class="token keyword">from</span> <span class="token string">&#39;./modules/base&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>baseRouters<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&#39;smooth&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据路由配置的实际情况，需要在 <code>src</code> 下创建 <code>views</code> 目录，用来存储页面组件。</p><h3 id="挂载路由配置" tabindex="-1"><a class="header-anchor" href="#挂载路由配置" aria-hidden="true">#</a> 挂载路由配置</h3><p>在 <code>main.js</code> 文件中挂载路由配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-pinia-全局状态管理工具" tabindex="-1"><a class="header-anchor" href="#集成-pinia-全局状态管理工具" aria-hidden="true">#</a> 集成 Pinia 全局状态管理工具</h2><h3 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建仓库配置文件" tabindex="-1"><a class="header-anchor" href="#创建仓库配置文件" aria-hidden="true">#</a> 创建仓库配置文件</h3><p>在 <code>src/store</code> 目录下新建 <code>index.js</code> 文件与 <code>modules</code> 文件夹</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>└── src<span class="token operator">/</span>
    ├── store<span class="token operator">/</span>
     ├── modules<span class="token operator">/</span>  <span class="token comment">// 仓库模块</span>
        ├── index<span class="token punctuation">.</span>js  <span class="token comment">// 仓库配置文件</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">accumulate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./modules/counter&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发中需要将不同功能所对应的状态，拆分到不同的 <code>modules</code>，好处如同路由模块一样。</p><h3 id="挂载-pinia-配置" tabindex="-1"><a class="header-anchor" href="#挂载-pinia-配置" aria-hidden="true">#</a> 挂载 Pinia 配置</h3><p>在 <code>main.js</code> 文件中挂载 <code>Vuex</code> 配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-tdesign-vue-next-组件库" tabindex="-1"><a class="header-anchor" href="#集成-tdesign-vue-next-组件库" aria-hidden="true">#</a> 集成 TDesign Vue Next 组件库</h2><h3 id="安装依赖-2" tabindex="-1"><a class="header-anchor" href="#安装依赖-2" aria-hidden="true">#</a> 安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i tdesign<span class="token operator">-</span>vue<span class="token operator">-</span>next

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> TDesign <span class="token keyword">from</span> <span class="token string">&#39;tdesign-vue-next&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 引入组件库全局样式资源</span>
<span class="token keyword">import</span> <span class="token string">&#39;tdesign-vue-next/es/style/index.css&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>TDesign<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按需引入" tabindex="-1"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h3><p>使用 <code>unplugin-vue-components</code> 和 <code>unplugin-auto-import</code> 来实现自动导入：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install unplugin<span class="token operator">-</span>vue<span class="token operator">-</span>components unplugin<span class="token operator">-</span>auto<span class="token operator">-</span><span class="token keyword">import</span> <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Vite 对应的配置文件 <code>vite.config.js</code> 添加上述插件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TDesignResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">TDesignResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;vue-next&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">TDesignResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&#39;vue-next&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-axios-http-工具" tabindex="-1"><a class="header-anchor" href="#集成-axios-http-工具" aria-hidden="true">#</a> 集成 Axios HTTP 工具</h2><h3 id="安装依赖-3" tabindex="-1"><a class="header-anchor" href="#安装依赖-3" aria-hidden="true">#</a> 安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i axios

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h3><p>在 <code>utils</code> 目录下创建 <code>request.js</code> 文件，配置好适合自己业务的请求拦截和响应拦截：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── src/
 ├── api  // 接口
    ├── utils/
        ├── request.js  // axios 请求库二次封装

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建请求实例</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 指定请求超时的毫秒数</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token comment">// 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 前置拦截器（发起请求之前的拦截）</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) <span class="token punctuation">{</span>
     *  config.headers.token = token
     * <span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 后置拦截器（获取到响应时的拦截）</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 导出常用函数</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">data</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;put&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">url</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">params</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">_delete</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后在 <code>api</code> 文件夹中以业务模型对接口进行拆分，举个例子，将所有跟用户相关接口封装在 <code>User</code> 类中，此类称作用户模型。</p><p>在 <code>User</code> 类中比如有登录、注册、获取用户信息等方法，如果有业务逻辑变动，只需要修改相关方法即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/request&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 登录
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">username</span> 用户名
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">password</span> 密码
   * <span class="token keyword">@returns</span>
   */</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      username<span class="token punctuation">,</span>
      password<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把每个业务模型独立成一个 js 文件，声明一个类通过其属性和方法来实现这个模型相关的数据获取，这样可以大大提升代码的可读性与可维护性。</p><h3 id="模拟演示" tabindex="-1"><a class="header-anchor" href="#模拟演示" aria-hidden="true">#</a> 模拟演示</h3><p>在需要使用接口的地方，引入对应的业务模型文件，参考如下：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;@/api/user&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-css-预处理器-less" tabindex="-1"><a class="header-anchor" href="#集成-css-预处理器-less" aria-hidden="true">#</a> 集成 CSS 预处理器 Less</h2><p>本项目使用 CSS 预处理器 Less，直接安装为开发依赖即可。</p><p>Vite 内部已帮我们集成了相关的 <code>loader</code>，不需要额外配置。</p><h3 id="安装依赖-4" tabindex="-1"><a class="header-anchor" href="#安装依赖-4" aria-hidden="true">#</a> 安装依赖</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i less <span class="token operator">-</span><span class="token constant">D</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>在 <code>&lt;style&gt;&lt;/style&gt;</code> 样式标签中引用 <code>lang=&quot;less&quot;</code> 即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;less&quot;&gt;&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,60),H=n("p",null,"CSS 命名规范推荐 BEM 命名规范",-1),T={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FTencent%2Ftmt-workflow%2Fwiki%2F%25E2%2592%259B-%255B%25E8%25A7%2584%25E8%258C%2583%255D--CSS-BEM-%25E4%25B9%25A6%25E5%2586%2599%25E8%25A7%2584%25E8%258C%2583",title:"https://github.com/Tencent/tmt-workflow/wiki/%E2%92%9B-%5B%E8%A7%84%E8%8C%83%5D--CSS-BEM-%E4%B9%A6%E5%86%99%E8%A7%84%E8%8C%83",target:"_blank",rel:"noopener noreferrer"},B=t(`<h3 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式" aria-hidden="true">#</a> 全局样式</h3><p>在 <code>src/style</code> 目录下创建 <code>variables.less</code> 全局样式文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── src/
    ├── style/
        ├── variables.less  // 全局样式文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>vite.config.js</code> 配置文件中新增CSS 预处理器相关配置即可实现 less 全局样式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">modifyVars</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">hack</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true; @import (reference) &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/style/variables.less&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">math</span><span class="token operator">:</span> <span class="token string">&#39;strict&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式穿透" tabindex="-1"><a class="header-anchor" href="#样式穿透" aria-hidden="true">#</a> 样式穿透</h3>`,6),G={href:"https://link.juejin.cn/?target=https%3A%2F%2Fvuejs.org%2Fapi%2Fsfc-css-features.html%23scoped-css",title:"https://vuejs.org/api/sfc-css-features.html#scoped-css",target:"_blank",rel:"noopener noreferrer"},J=t(`<p>在 Vue3 中，改变了以往样式穿透的语法，如果继续使用 <code>::v-deep</code>、<code>/deep/</code>、<code>&gt;&gt;&gt;</code> 等语法的话，会出现一个警告，下面是新的语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 深度选择器 */</span>
<span class="token selector">:deep(selector)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 插槽选择器 */</span>
<span class="token selector">:slotted(selector)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 全局选择器 */</span>
<span class="token selector">:global(selector)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，一个基于 JavaScript + Vite3 + Vue3 + Vue Router + Pinia + Axios + Less 的前端项目开发环境搭建完毕。</p>`,3),O={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FElanYoung%2Fvite-vue-js-starter-template",title:"https://github.com/ElanYoung/vite-vue-js-starter-template",target:"_blank",rel:"noopener noreferrer"},Y=t('<p>接下来增加代码规范约束、提交规范约束、单元测试、自动部署等，让其更完善、更健壮。</p><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h2><p>随着前端应用逐渐变得大型化和复杂化，在同一个项目中有多个人员参与时，每个人的前端能力程度不等，他们往往会用不同的编码风格和习惯在项目中写代码，长此下去，势必会让项目的健壮性越来越差。解决这些问题，理论上讲，口头约定和代码审查都可以，但是这种方式无法实时反馈，而且沟通成本过高，不够灵活，更关键的是无法把控。不以规矩，不能成方圆，我们不得不在项目使用一些工具来约束代码规范。</p><p>本文讲解如何使用 <strong>EditorConfig + ESLint + Prettier + Stylelint</strong> 组合来实现代码规范化。</p><p>这样做带来好处：</p><ul><li>解决团队之间代码不规范导致的可读性差和可维护性差的问题。</li><li>解决团队成员不同编辑器导致的编码规范不统一问题。</li><li>提前发现代码风格问题，给出对应规范提示，及时修复。</li><li>减少代码审查过程中反反复复的修改过程，节约时间。</li><li>自动格式化，统一编码风格，从此和脏乱差的代码说再见。</li></ul><h2 id="集成-editorconfig-配置" tabindex="-1"><a class="header-anchor" href="#集成-editorconfig-配置" aria-hidden="true">#</a> 集成 EditorConfig 配置</h2>',7),N={href:"https://link.juejin.cn/?target=https%3A%2F%2Feditorconfig.org%2F",title:"https://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"},R=t(`<p>在项目根目录下添加 <code>.editorconfig</code> 文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 表示是最顶层的 EditorConfig 配置文件
root <span class="token operator">=</span> <span class="token boolean">true</span>

# 表示所有文件适用
<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">]</span>
# 缩进风格（tab <span class="token operator">|</span> space）
indent_style <span class="token operator">=</span> space
# <span class="token function">控制换行类型</span><span class="token punctuation">(</span>lf <span class="token operator">|</span> cr <span class="token operator">|</span> crlf<span class="token punctuation">)</span>
end_of_line <span class="token operator">=</span> lf
# 设置文件字符集为 utf<span class="token operator">-</span><span class="token number">8</span>
charset <span class="token operator">=</span> utf<span class="token operator">-</span><span class="token number">8</span>
# 去除行首的任意空白字符
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">true</span>
# 始终在文件末尾插入一个新行
insert_final_newline <span class="token operator">=</span> <span class="token boolean">true</span>

# 表示仅 md 文件适用以下规则
<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">.</span>md<span class="token punctuation">]</span>
max_line_length <span class="token operator">=</span> off
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">false</span>

# 表示仅 ts、js、vue、css 文件适用以下规则
<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token punctuation">{</span>ts<span class="token punctuation">,</span>js<span class="token punctuation">,</span>vue<span class="token punctuation">,</span>css<span class="token punctuation">}</span><span class="token punctuation">]</span>
indent_size <span class="token operator">=</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>很多 IDE 中会默认支持此配置，但是也有些不支持，如：VSCode、Atom、Sublime Text 等。</p><p>具体列表可以参考官网，如果在 VSCode 中使用需要安装 <code>EditorConfig for VS Code</code> 插件。</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/667956e2c9e44b9c85d2e0128a7921dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="EditorConfig for VS Code"></p><h2 id="集成-eslint-配置" tabindex="-1"><a class="header-anchor" href="#集成-eslint-配置" aria-hidden="true">#</a> 集成 ESLint 配置</h2>`,5),W={href:"https://link.juejin.cn/?target=http%3A%2F%2Feslint.cn%2F",title:"http://eslint.cn/",target:"_blank",rel:"noopener noreferrer"},U=n("p",null,"由此我们就可以借助于 ESLint 强大的功能来统一团队的编码规范。",-1),M=n("h3",{id:"安装依赖-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖-5","aria-hidden":"true"},"#"),s(" 安装依赖")],-1),$={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Feslint%2Feslint",title:"https://github.com/eslint/eslint",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FShinigami92%2Feslint-define-config",title:"https://github.com/Shinigami92/eslint-define-config",target:"_blank",rel:"noopener noreferrer"},K={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Feslint-plugin-vue",title:"https://github.com/vuejs/eslint-plugin-vue",target:"_blank",rel:"noopener noreferrer"},X={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fairbnb%2Fjavascript%2Ftree%2Fmaster%2Fpackages%2Feslint-config-airbnb-base",title:"https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fimport-js%2Feslint-plugin-import",title:"https://github.com/import-js/eslint-plugin-import",target:"_blank",rel:"noopener noreferrer"},nn=n("code",null,"eslint-config-airbnb-base",-1),sn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-eslint-parser",title:"https://github.com/vuejs/vue-eslint-parser",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"eslint-plugin-vue",-1),en=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm i eslint eslint<span class="token operator">-</span>define<span class="token operator">-</span>config eslint<span class="token operator">-</span>config<span class="token operator">-</span>airbnb<span class="token operator">-</span>base eslint<span class="token operator">-</span>plugin<span class="token operator">-</span><span class="token keyword">import</span> eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>vue vue<span class="token operator">-</span>eslint<span class="token operator">-</span>parser <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>Visual Studio Code 编辑器使用 <code>ESLint</code> 配置需要下载插件 <strong>ESLint</strong> 。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90f4ff512ca24962a95645c56dc7834b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="ESLint"></p><p>JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件。</p><h3 id="创建-eslint-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-eslint-配置文件" aria-hidden="true">#</a> 创建 ESLint 配置文件</h3><p>在项目根目录创建 <code>.eslintrc.js</code> 文件，并填入以下内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;eslint-define-config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">jest</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">es6</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowImportExportEverywhere</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">ecmaFeatures</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;airbnb-base&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 禁止使用多余的包</span>
    <span class="token string-property property">&#39;import/no-extraneous-dependencies&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 确保在导入路径内一致使用文件扩展名</span>
    <span class="token string-property property">&#39;import/extensions&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 确保导入指向可以解析的文件/模块</span>
    <span class="token string-property property">&#39;import/no-unresolved&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 首选默认导出导入/首选默认导出</span>
    <span class="token string-property property">&#39;import/prefer-default-export&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求使用 let 或 const 而不是 var</span>
    <span class="token string-property property">&#39;no-var&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止使用 new 以避免产生副作用</span>
    <span class="token string-property property">&#39;no-new&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止变量声明与外层作用域的变量同名</span>
    <span class="token string-property property">&#39;no-shadow&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用 console</span>
    <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止标识符中有悬空下划线</span>
    <span class="token string-property property">&#39;no-underscore-dangle&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在可能与比较操作符相混淆的地方使用箭头函数</span>
    <span class="token string-property property">&#39;no-confusing-arrow&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用一元操作符 ++ 和 --</span>
    <span class="token string-property property">&#39;no-plusplus&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止对 function 的参数进行重新赋值</span>
    <span class="token string-property property">&#39;no-param-reassign&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁用特定的语法</span>
    <span class="token string-property property">&#39;no-restricted-syntax&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在变量定义之前使用它们</span>
    <span class="token string-property property">&#39;no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止直接调用 Object.prototypes 的内置属性</span>
    <span class="token string-property property">&#39;no-prototype-builtins&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止可以在有更简单的可替代的表达式时使用三元操作符</span>
    <span class="token string-property property">&#39;no-unneeded-ternary&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止重复模块导入</span>
    <span class="token string-property property">&#39;no-duplicate-imports&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 禁止在对象中使用不必要的计算属性</span>
    <span class="token string-property property">&#39;no-useless-computed-key&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用一致的缩进</span>
    <span class="token literal-property property">indent</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制使用骆驼拼写法命名约定</span>
    <span class="token literal-property property">camelcase</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制类方法使用 this</span>
    <span class="token string-property property">&#39;class-methods-use-this&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求构造函数首字母大写</span>
    <span class="token string-property property">&#39;new-cap&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制一致地使用 function 声明或表达式</span>
    <span class="token string-property property">&#39;func-style&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制一行的最大长度</span>
    <span class="token string-property property">&#39;max-len&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求 return 语句要么总是指定返回的值，要么不指定</span>
    <span class="token string-property property">&#39;consistent-return&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制switch要有default分支</span>
    <span class="token string-property property">&#39;default-case&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制剩余和扩展运算符及其表达式之间有空格</span>
    <span class="token string-property property">&#39;rest-spread-spacing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 要求使用 const 声明那些声明后不再被修改的变量</span>
    <span class="token string-property property">&#39;prefer-const&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 强制箭头函数的箭头前后使用一致的空格</span>
    <span class="token string-property property">&#39;arrow-spacing&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 要求组件名称总是多个单词</span>
        <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://link.juejin.cn/?target=http%3A%2F%2Feslint.cn%2Fdocs%2Fuser-guide%2Fconfiguring" alt="ESLint-Configuring" title="http://eslint.cn/docs/user-guide/configuring"></p><h3 id="创建-eslint-过滤规则" tabindex="-1"><a class="header-anchor" href="#创建-eslint-过滤规则" aria-hidden="true">#</a> 创建 ESLint 过滤规则</h3><p>在项目根目录添加一个 <code>.eslintignore</code> 文件，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dist
node_modules
!.prettierrc.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-prettier-配置" tabindex="-1"><a class="header-anchor" href="#集成-prettier-配置" aria-hidden="true">#</a> 集成 Prettier 配置</h2>`,13),tn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io",title:"https://prettier.io",target:"_blank",rel:"noopener noreferrer"},pn=t(`<h3 id="安装依赖-6" tabindex="-1"><a class="header-anchor" href="#安装依赖-6" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装插件-1" tabindex="-1"><a class="header-anchor" href="#安装插件-1" aria-hidden="true">#</a> 安装插件</h3><p>Visual Studio Code 编辑器使用 <code>Prettier</code> 配置需要下载插件 <strong>Prettier - Code formatter</strong> 。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53c405a237e7466fa48eda44a58499b8~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="Prettier - Code formatter"></p><p>JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件，可直接使用 <code>Prettier</code> 配置。</p><h3 id="创建-prettier-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-prettier-配置文件" aria-hidden="true">#</a> 创建 Prettier 配置文件</h3>`,7),ln={href:"https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Fconfiguration.html",title:"https://prettier.io/docs/en/configuration.html",target:"_blank",rel:"noopener noreferrer"},on=n("code",null,".json",-1),cn=n("code",null,".yml",-1),rn=n("code",null,".yaml",-1),dn=n("code",null,".js",-1),un=t(`<p>在项目根目录创建 <code>.prettierrc.js</code> 文件，并填入以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  // 一行最多 120 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: &#39;as-needed&#39;,
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾需要有逗号
  trailingComma: &#39;all&#39;,
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: &#39;always&#39;,
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: &#39;preserve&#39;,
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: &#39;css&#39;,
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: &#39;lf&#39;,
  // 格式化嵌入的内容
  embeddedLanguageFormatting: &#39;auto&#39;,
  // html, vue, jsx 中每个属性占一行
  singleAttributePerLine: false,
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),vn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Foptions.html",title:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"},mn=t(`<h3 id="创建-prettier-过滤规则" tabindex="-1"><a class="header-anchor" href="#创建-prettier-过滤规则" aria-hidden="true">#</a> 创建 Prettier 过滤规则</h3><p>在项目根目录添加一个 <code>.prettierignore</code> 文件，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## OS
.DS_Store
.idea
.editorconfig
pnpm-lock.yaml
.npmrc
# Ignored suffix
*.log
*.md
*.svg
*.png
*.ico
*ignore
## Local
.husky
## Built-files
.cache
dist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决-prettier-和-eslint-冲突" tabindex="-1"><a class="header-anchor" href="#解决-prettier-和-eslint-冲突" aria-hidden="true">#</a> 解决 Prettier 和 ESLint 冲突</h2><p>本项目中的 ESLint 配置使用了 Airbnb JavaScript 风格指南校验，其规则之一是_代码结束后面要加分号_，而在 Prettier 配置文件中加了_代码结束后面不加分号_配置项，从而冲突了。</p><p>解决两者冲突问题，需要用到 <strong>eslint-plugin-prettier</strong> 和 <strong>eslint-config-prettier</strong>。</p><ul><li><code>eslint-plugin-prettier</code> 将 Prettier 的规则设置到 ESLint 的规则中</li><li><code>eslint-config-prettier</code> 关闭 ESLint 中与 Prettier 中会发生冲突的规则</li></ul><p>最后形成优先级：<code>Prettier 配置规则</code> &gt; <code>ESLint 配置规则</code></p><h3 id="安装依赖-7" tabindex="-1"><a class="header-anchor" href="#安装依赖-7" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i eslint-plugin-prettier eslint-config-prettier -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-eslint-配置文件" tabindex="-1"><a class="header-anchor" href="#修改-eslint-配置文件" aria-hidden="true">#</a> 修改 ESLint 配置文件</h3><p>修改 <code>.eslintrc.js</code> 文件，在 <code>extends</code> 中添加 <code>plugin:prettier/recommended</code> 规则（此规则一定要加在最后）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  extends: [
    &#39;airbnb-base&#39;,
    &#39;eslint:recommended&#39;,
    &#39;plugin:vue/vue3-essential&#39;,
    &#39;plugin:vue/vue3-recommended&#39;,
    &#39;plugin:prettier/recommended&#39;
  ],
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动格式化代码" tabindex="-1"><a class="header-anchor" href="#自动格式化代码" aria-hidden="true">#</a> 自动格式化代码</h2><p>Visual Studio Code 在 <code>settings.json</code> 设置文件中，增加以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;editor.codeActionsOnSave&quot;: {
    &quot;source.fixAll&quot;: true,
    &quot;source.fixAll.eslint&quot;: true
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>WebStorm 打开设置窗口，按如下操作，最后点击 <code>Apply</code> -&gt; <code>OK</code>：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1313ca0777a348a6a438cbcea3ce096b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="WebStorm"></p><h2 id="集成-stylelint-配置" tabindex="-1"><a class="header-anchor" href="#集成-stylelint-配置" aria-hidden="true">#</a> 集成 Stylelint 配置</h2><p>Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。</p><h3 id="安装依赖-8" tabindex="-1"><a class="header-anchor" href="#安装依赖-8" aria-hidden="true">#</a> 安装依赖</h3>`,21),kn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fstylelint.io%2F",title:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"},bn=n("code",null,"Stylelint",-1),hn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fprettier%2Fstylelint-config-prettier",title:"https://github.com/prettier/stylelint-config-prettier",target:"_blank",rel:"noopener noreferrer"},gn=n("code",null,"stylelint-config-prettier",-1),fn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fstylelint%2Fstylelint-config-standard",title:"https://github.com/stylelint/stylelint-config-standard",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"stylelint-config-standard",-1),xn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fota-meshi%2Fstylelint-config-recommended-vue",title:"https://github.com/ota-meshi/stylelint-config-recommended-vue",target:"_blank",rel:"noopener noreferrer"},jn=n("code",null,"stylelint-config-recommended-vue",-1),_n={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fhudochenkov%2Fstylelint-order",title:"https://github.com/hudochenkov/stylelint-order",target:"_blank",rel:"noopener noreferrer"},Fn=n("code",null,"stylelint-order",-1),wn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-recommended-vue stylelint-order -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装插件-2" tabindex="-1"><a class="header-anchor" href="#安装插件-2" aria-hidden="true">#</a> 安装插件</h3><p>Visual Studio Code 编辑器使用 <code>Stylelint</code> 配置需要下载插件 <strong>Stylelint</strong> 。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f07053b53264fe4b2df3d5fecea82e6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="Stylelint"></p><p>JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）则不用额外安装插件。</p><h3 id="创建-stylelint-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-stylelint-配置文件" aria-hidden="true">#</a> 创建 Stylelint 配置文件</h3><p>在项目根目录创建 <code>.stylelintrc.js</code> 文件，并填入以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  root: true,
  defaultSeverity: &#39;error&#39;,
  extends: [
    &#39;stylelint-config-standard&#39;,
    &#39;stylelint-config-prettier&#39;
  ],
  plugins: [&#39;stylelint-order&#39;],
  rules: {
    // 不允许未知函数
    &#39;function-no-unknown&#39;: null,
    // 指定类选择器的模式
    &#39;selector-class-pattern&#39;: null,
    // 禁止空源码
    &#39;no-empty-source&#39;: null,
    // 指定字符串使用单引号
    &#39;string-quotes&#39;: &#39;single&#39;,
    // 禁止未知的@规则
    &#39;at-rule-no-unknown&#39;: [
      true,
      {
        ignoreAtRules: [
          &#39;tailwind&#39;,
          &#39;apply&#39;,
          &#39;variants&#39;,
          &#39;responsive&#39;,
          &#39;screen&#39;,
          &#39;function&#39;,
          &#39;if&#39;,
          &#39;each&#39;,
          &#39;include&#39;,
          &#39;mixin&#39;,
        ],
      },
    ],
    // 指定@规则名的大小写
    &#39;at-rule-name-case&#39;: &#39;lower&#39;,
    // 指定缩进
    indentation: [
      2,
      {
        severity: &#39;warning&#39;,
      },
    ],
    // 禁止未知的伪类选择器
    &#39;selector-pseudo-class-no-unknown&#39;: [
      true,
      {
        ignorePseudoClasses: [&#39;global&#39;],
      },
    ],
    // 禁止未知的伪元素选择器
    &#39;selector-pseudo-element-no-unknown&#39;: [
      true,
      {
        ignorePseudoElements: [&#39;v-deep&#39;],
      },
    ],
    &#39;order/properties-order&#39;: [
      &#39;position&#39;,
      &#39;top&#39;,
      &#39;right&#39;,
      &#39;bottom&#39;,
      &#39;left&#39;,
      &#39;z-index&#39;,
      &#39;display&#39;,
      &#39;justify-content&#39;,
      &#39;align-items&#39;,
      &#39;float&#39;,
      &#39;clear&#39;,
      &#39;overflow&#39;,
      &#39;overflow-x&#39;,
      &#39;overflow-y&#39;,
      &#39;margin&#39;,
      &#39;margin-top&#39;,
      &#39;margin-right&#39;,
      &#39;margin-bottom&#39;,
      &#39;margin-left&#39;,
      &#39;padding&#39;,
      &#39;padding-top&#39;,
      &#39;padding-right&#39;,
      &#39;padding-bottom&#39;,
      &#39;padding-left&#39;,
      &#39;width&#39;,
      &#39;min-width&#39;,
      &#39;max-width&#39;,
      &#39;height&#39;,
      &#39;min-height&#39;,
      &#39;max-height&#39;,
      &#39;font-size&#39;,
      &#39;font-family&#39;,
      &#39;font-weight&#39;,
      &#39;border&#39;,
      &#39;border-style&#39;,
      &#39;border-width&#39;,
      &#39;border-color&#39;,
      &#39;border-top&#39;,
      &#39;border-top-style&#39;,
      &#39;border-top-width&#39;,
      &#39;border-top-color&#39;,
      &#39;border-right&#39;,
      &#39;border-right-style&#39;,
      &#39;border-right-width&#39;,
      &#39;border-right-color&#39;,
      &#39;border-bottom&#39;,
      &#39;border-bottom-style&#39;,
      &#39;border-bottom-width&#39;,
      &#39;border-bottom-color&#39;,
      &#39;border-left&#39;,
      &#39;border-left-style&#39;,
      &#39;border-left-width&#39;,
      &#39;border-left-color&#39;,
      &#39;border-radius&#39;,
      &#39;text-align&#39;,
      &#39;text-justify&#39;,
      &#39;text-indent&#39;,
      &#39;text-overflow&#39;,
      &#39;text-decoration&#39;,
      &#39;white-space&#39;,
      &#39;color&#39;,
      &#39;background&#39;,
      &#39;background-position&#39;,
      &#39;background-repeat&#39;,
      &#39;background-size&#39;,
      &#39;background-color&#39;,
      &#39;background-clip&#39;,
      &#39;opacity&#39;,
      &#39;filter&#39;,
      &#39;list-style&#39;,
      &#39;outline&#39;,
      &#39;visibility&#39;,
      &#39;box-shadow&#39;,
      &#39;text-shadow&#39;,
      &#39;resize&#39;,
      &#39;transition&#39;,
    ],
  },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-stylelint-过滤规则" tabindex="-1"><a class="header-anchor" href="#创建-stylelint-过滤规则" aria-hidden="true">#</a> 创建 Stylelint 过滤规则</h3><p>在项目根目录添加一个 <code>.stylelintignore</code> 文件，内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .stylelintignore
# 旧的不需打包的样式库
*.min.css

# 其他类型文件
*.js
*.jpg
*.woff

# 测试和打包目录
/test/
/dist/*
/public/*
public/*
/node_modules/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启用-vue-文件支持" tabindex="-1"><a class="header-anchor" href="#启用-vue-文件支持" aria-hidden="true">#</a> 启用 Vue 文件支持</h3>`,12),Sn=n("code",null,"Stylelint",-1),An={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fstylelint%2Fstylelint%2Fblob%2Fmain%2Fdocs%2Fmigration-guide%2Fto-14.md",title:"https://github.com/stylelint/stylelint/blob/main/docs/migration-guide/to-14.md",target:"_blank",rel:"noopener noreferrer"},qn=n("h4",{id:"安装依赖-9",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装依赖-9","aria-hidden":"true"},"#"),s(" 安装依赖")],-1),En={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fota-meshi%2Fstylelint-config-html",title:"https://github.com/ota-meshi/stylelint-config-html",target:"_blank",rel:"noopener noreferrer"},Cn=n("code",null,"stylelint-config-html",-1),zn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fota-meshi%2Fpostcss-html",title:"https://github.com/ota-meshi/postcss-html",target:"_blank",rel:"noopener noreferrer"},Ln=n("code",null,"postcss-html",-1),Vn=n("code",null,"stylelint-config-html",-1),Pn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fshellscape%2Fpostcss-less",title:"https://github.com/shellscape/postcss-less",target:"_blank",rel:"noopener noreferrer"},In=n("code",null,"postcss-less",-1),Dn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i stylelint-config-html postcss-html postcss-less -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-stylelint-配置文件" tabindex="-1"><a class="header-anchor" href="#修改-stylelint-配置文件" aria-hidden="true">#</a> 修改 Stylelint 配置文件</h4><p>修改 <code>.stylelintrc.js</code> 文件，添加如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  overrides: [
    {
      files: [&#39;*.vue&#39;, &#39;**/*.vue&#39;, &#39;*.html&#39;, &#39;**/*.html&#39;],
      extends: [&#39;stylelint-config-html&#39;],
      rules: {
        // 指定关键帧名称的模式
        &#39;keyframes-name-pattern&#39;: null,
        // 禁止未知的伪类选择器
        &#39;selector-pseudo-class-no-unknown&#39;: [
          true,
          {
            ignorePseudoClasses: [&#39;deep&#39;, &#39;global&#39;],
          },
        ],
        // 禁止未知的伪元素选择器
        &#39;selector-pseudo-element-no-unknown&#39;: [
          true,
          {
            ignorePseudoElements: [&#39;v-deep&#39;, &#39;v-global&#39;, &#39;v-slotted&#39;],
          },
        ],
      },
    },
    {
      files: [&#39;*.less&#39;, &#39;**/*.less&#39;],
      customSyntax: &#39;postcss-less&#39;,
      extends: [&#39;stylelint-config-standard&#39;, &#39;stylelint-config-recommended-vue&#39;],
    },
  ],
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-visual-studio-code-工作区配置" tabindex="-1"><a class="header-anchor" href="#修改-visual-studio-code-工作区配置" aria-hidden="true">#</a> 修改 Visual Studio Code 工作区配置</h4><p>Visual Studio Code 在 <code>settings.json</code> 设置文件中，增加以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;stylelint.validate&quot;: [&quot;css&quot;, &quot;less&quot;, &quot;postcss&quot;, &quot;scss&quot;, &quot;vue&quot;, &quot;sass&quot;]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集成-husky-和-lint-staged" tabindex="-1"><a class="header-anchor" href="#集成-husky-和-lint-staged" aria-hidden="true">#</a> 集成 husky 和 lint-staged</h2><p>在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对代码进行实时校验，在一定程度上能有效规范所写代码，但有些人可能觉得这些限制很麻烦，从而选择视“提示”而不见，依旧按自己编程风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。</p><p>所以，还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。</p><p>为了解决这个问题，需要用到 Git Hook，在本地执行 <code>git commit</code> 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 <code>eslint --fix</code>），如果这些代码没通过 ESLint 规则校验，则禁止提交。</p>`,11),Hn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Ftypicode%2Fhusky",title:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fokonet%2Flint-staged",title:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},Bn=n("h3",{id:"配置-husky",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置-husky","aria-hidden":"true"},"#"),s(" 配置 husky")],-1),Gn={href:"https://link.juejin.cn/?target=https%3A%2F%2Ftypicode.github.io%2Fhusky%2F%23%2F%3Fid%3Dusage",title:"https://typicode.github.io/husky/#/?id=usage",target:"_blank",rel:"noopener noreferrer"},Jn=t(`<p>使用 <code>husky-init</code> 命令快速在项目初始化 <code>husky</code> 配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 初始化仓库
git init

# 初始化
npx husky-init

# 安装依赖
npm install

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>husky 包含很多 <code>hook</code>（钩子），常用有：<code>pre-commit</code>、<code>commit-msg</code>。</p><p>使用 <code>pre-commit</code> 来触发 ESLint 命令，修改 <code>.husky/pre-commit</code> 文件触发命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eslint --fix ./src --ext .vue,.js,.ts

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>pre-commit</code> hook 文件作用是：当执行 <code>git commit -m &quot;xxx&quot;</code> 时，会先对 <code>src</code> 目录下所有的 <code>.vue</code>、<code>.js</code>、<code>.ts</code> 文件执行 <code>eslint --fix</code> 命令，如果 ESLint 通过，成功 <code>commit</code>，否则终止 <code>commit</code>。</p><p>但是又存在一个问题：有时候明明只改动了一两个文件，却要对所有的文件执行 <code>eslint --fix</code>。</p><p>假如这是一个历史项目，在中途配置了 ESLint 规则，那么在提交代码时，也会对其他未修改的“历史”文件都进行检查，可能会造成大量文件出现 ESLint 错误，显然这不是我们想要的结果。</p><p>所以只需要用 ESLint 修复此次写的代码，而不去影响其他的代码，此时需要借助 <strong>lint-staged</strong> 工具。</p><h3 id="配置-lint-staged" tabindex="-1"><a class="header-anchor" href="#配置-lint-staged" aria-hidden="true">#</a> 配置 lint-staged</h3><p>lint-staged 一般结合 husky 来使用，它可以让 husky 的 <code>hook</code> 触发的命令只作用于 <code>git</code> 暂存区的文件，而不会影响到其他文件。</p><h4 id="安装依赖-10" tabindex="-1"><a class="header-anchor" href="#安装依赖-10" aria-hidden="true">#</a> 安装依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i lint-staged -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新增配置" tabindex="-1"><a class="header-anchor" href="#新增配置" aria-hidden="true">#</a> 新增配置</h4><p>在 <code>package.json</code> 里增加 <code>lint-staged</code> 配置项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;lint-staged&quot;: {
    &quot;*.{js,jsx,ts,tsx}&quot;: [
      &quot;prettier --write&quot;,
      &quot;eslint --fix&quot;
    ],
    &quot;*.vue&quot;: [
      &quot;prettier --write&quot;,
      &quot;eslint --fix&quot;,
      &quot;stylelint --fix&quot;
    ],
    &quot;*.{html,vue,vss,sass,less}&quot;: [
      &quot;prettier --write&quot;,
      &quot;stylelint --fix&quot;
    ],
    &quot;package.json&quot;: [
      &quot;prettier --write&quot;
    ],
    &quot;*.md&quot;: [
      &quot;prettier --write&quot;
    ]
  },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改触发命令" tabindex="-1"><a class="header-anchor" href="#修改触发命令" aria-hidden="true">#</a> 修改触发命令</h4><p>修改 <code>.husky/pre-commit</code> 文件触发命令为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx lint-staged

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f71e208ff34b48eda618ec44c2a53776~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="pre-commit"></p><p>经过以上配置之后，就可以在每次提交之前对所有代码进行格式化，保证线上代码的规范性。</p><h2 id="提交规范" tabindex="-1"><a class="header-anchor" href="#提交规范" aria-hidden="true">#</a> 提交规范</h2><p>多人协作项目中，在提交代码环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。</p><p>如果 <code>git commit</code> 的描述信息精准，在后期维护和 Bug 处理时会变得有据可查，项目开发周期内还可以根据规范的提交信息快速生成开发日志，从而方便我们追踪项目和把控进度。</p>`,24),On={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fangular",title:"https://github.com/angular",target:"_blank",rel:"noopener noreferrer"},Yn=n("p",null,[n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08e334007edf4bfaad0f5ed4d9e82c2a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image",alt:"Angular 团队提交规范"})],-1),Nn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgist.github.com%2Fstephenparish%2F9941e89d80e2bc58a153",title:"https://gist.github.com/stephenparish/9941e89d80e2bc58a153",target:"_blank",rel:"noopener noreferrer"},Rn=t(`<h2 id="commit-message-格式规范" tabindex="-1"><a class="header-anchor" href="#commit-message-格式规范" aria-hidden="true">#</a> Commit Message 格式规范</h2><p><code>commit message</code> 由 Header、Body、Footer 组成。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Header&gt;

&lt;Body&gt;

&lt;Footer&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>Header 部分包括三个字段 type（必需）、scope（可选）和 subject（必需）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>type</strong></p><p>type 用于说明 commit 的提交类型（必须是以下几种之一）。</p><table><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>feat</td><td>新增功能</td></tr><tr><td>fix</td><td>修复问题</td></tr><tr><td>docs</td><td>文档变更</td></tr><tr><td>style</td><td>代码格式（不影响功能，例如空格、分号等格式修正）</td></tr><tr><td>refactor</td><td>代码重构</td></tr><tr><td>perf</td><td>改善性能</td></tr><tr><td>test</td><td>测试</td></tr><tr><td>build</td><td>变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td></tr><tr><td>ci</td><td>更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td></tr><tr><td>chore</td><td>变更构建流程或辅助工具</td></tr><tr><td>revert</td><td>代码回退</td></tr></tbody></table><p><strong>scope</strong></p><p>scope 用于指定本次 commit 影响的范围。</p><p>scope 依据项目而定，例如在业务项目中可以依据菜单或者功能模块划分，如果是组件库开发，则可以依据组件划分。</p><p><strong>subject</strong></p><p>subject 是本次 commit 的简洁描述，长度约定在 50 个字符以内，通常遵循以下几个规范：</p><ul><li>用动词开头，第一人称现在时表述，例如：change 代替 changed 或 changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><h3 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> Body</h3><p>body 是对本次 commit 的详细描述，可以分成多行。</p><p>跟 subject 类似，用动词开头，body 应该说明修改的原因和更改前后的行为对比。</p><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> Footer</h3><p>如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略。</p><ul><li><p>突破性的变更</p><p>当前代码与上一个版本有突破性改变，则 Footer 以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动的理由。</p></li><li><p>关闭缺陷</p><p>如果当前提交是针对特定的 issue，那么可以在 Footer 部分填写需要关闭的单个 issue 或一系列 issues。</p></li></ul><h3 id="参考例子" tabindex="-1"><a class="header-anchor" href="#参考例子" aria-hidden="true">#</a> 参考例子</h3><ul><li><p>feat</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>feat(browser): onUrlChange event (popstate/hashchange/polling)

Added new event to browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>fix</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fix(compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>style</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>style(location): add couple of missing semi colons

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>chore</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chore(release): v3.4.2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="集成-cz-git-实现规范提交" tabindex="-1"><a class="header-anchor" href="#集成-cz-git-实现规范提交" aria-hidden="true">#</a> 集成 cz-git 实现规范提交</h2>`,24),Wn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcommitizen%2Fcz-cli",title:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},Un={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcz-git.qbb.sh%2Fzh%2F",title:"https://cz-git.qbb.sh/zh/",target:"_blank",rel:"noopener noreferrer"},Mn=t(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12d9e35b52304043a0ee99b1d0bde6b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="cz-git"></p><h3 id="安装依赖-11" tabindex="-1"><a class="header-anchor" href="#安装依赖-11" aria-hidden="true">#</a> 安装依赖</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D cz-git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定适配器" tabindex="-1"><a class="header-anchor" href="#指定适配器" aria-hidden="true">#</a> 指定适配器</h3><p>修改 <code>package.json</code> 文件，添加 <code>config</code> 指定使用的适配器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {},
  &quot;config&quot;: {
    &quot;commitizen&quot;: {
      &quot;path&quot;: &quot;node_modules/cz-git&quot;
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义配置-可选" tabindex="-1"><a class="header-anchor" href="#自定义配置-可选" aria-hidden="true">#</a> 自定义配置（可选）</h3>`,7),$n={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint",title:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint%23config",title:"https://github.com/conventional-changelog/commitlint#config",target:"_blank",rel:"noopener noreferrer"},Kn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcz-git.qbb.sh%2Fzh%2Fconfig%2F",title:"https://cz-git.qbb.sh/zh/config/",target:"_blank",rel:"noopener noreferrer"},Xn=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prompt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">useEmoji</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">emojiAlign</span><span class="token operator">:</span> <span class="token string">&#39;center&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowCustomIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowEmptyIssuePrefixs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Zn={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FElanYoung%2Fvite-vue-js-starter-template%2Fblob%2Fmaster%2Fcommitlint.config.js",title:"https://github.com/ElanYoung/vite-vue-js-starter-template/blob/master/commitlint.config.js",target:"_blank",rel:"noopener noreferrer"},ns=t(`<h3 id="全局使用" tabindex="-1"><a class="header-anchor" href="#全局使用" aria-hidden="true">#</a> 全局使用</h3><blockquote><p>全局安装的好处在于：在任何项目下都可以利用 <code>cz</code> 或 <code>git cz</code> 命令启动命令行工具，生成标准化 commit message</p></blockquote><h4 id="安装全局依赖" tabindex="-1"><a class="header-anchor" href="#安装全局依赖" aria-hidden="true">#</a> 安装全局依赖</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g cz-git commitizen

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局配置适配器类型" tabindex="-1"><a class="header-anchor" href="#全局配置适配器类型" aria-hidden="true">#</a> 全局配置适配器类型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;{ &quot;path&quot;: &quot;cz-git&quot; }&#39; &gt; ~/.czrc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义配置-可选-1" tabindex="-1"><a class="header-anchor" href="#自定义配置-可选-1" aria-hidden="true">#</a> 自定义配置（可选）</h4><p><strong>方式一：</strong> 编辑 <code>~/.czrc</code> 文件以 <strong>json</strong> 形式添加配置，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;path&quot;: &quot;cz-git&quot;,
  &quot;useEmoji&quot;: true
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),ss={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint",title:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},as=n("code",null,"$HOME",-1),es={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcz-git.qbb.sh%2Fzh%2Fconfig%2F",title:"https://cz-git.qbb.sh/zh/config/",target:"_blank",rel:"noopener noreferrer"},ts=t('<h2 id="集成-commitlint-验证规范提交" tabindex="-1"><a class="header-anchor" href="#集成-commitlint-验证规范提交" aria-hidden="true">#</a> 集成 commitlint 验证规范提交</h2><p>在“代码规范”章节中提到，尽管制定了规范，但在多人协作的项目中，总有些人依旧我行我素。</p><p>因此提交代码这个环节，也增加一个限制：<strong>只让符合 Angular 规范的 commit message 通过</strong>。</p><p>此功能需借助 <code>@commitlint/config-conventional</code> 和 <code>@commitlint/cli</code> 工具来实现。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',5),is={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcommitlint.js.org",title:"https://commitlint.js.org",target:"_blank",rel:"noopener noreferrer"},ps=n("code",null,"@commitlint/cli",-1),ls={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint",title:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"},os=n("code",null,"@commitlint/config-conventional",-1),cs=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i @commitlint/cli @commitlint/config-conventional -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>在项目根目录创建 <code>commitlint.config.js</code> 文件，并填入以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  extends: [&#39;@commitlint/config-conventional&#39;]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 husky 命令在 <code>.husky</code> 目录下创建 <code>commit-msg</code> 文件，并在此执行验证命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx husky add .husky/commit-msg &quot;npx --no-install commitlint --edit $1&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e93e8fcd5324b0f8c01ffc2760c1a25~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="commit-msg"></p>`,7),rs={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FElanYoung%2Fvite-vue-js-starter-template",title:"https://github.com/ElanYoung/vite-vue-js-starter-template",target:"_blank",rel:"noopener noreferrer"},ds=n("h2",{id:"自动部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自动部署","aria-hidden":"true"},"#"),s(" 自动部署")],-1),us=n("p",null,"本章节将介绍如何使用 CI（Continuous Integration 持续集成）服务来完成项目部署工作。",-1),vs=n("p",null,"常见的 CI 工具有 GitHub Actions、GitLab CI、Travis CI、Circle CI 等。",-1),ms=n("p",null,[s("本项目使用 "),n("code",null,"GitHub Actions"),s(" 来完成这一操作。")],-1),ks={href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2019%2F09%2Fgetting-started-with-github-actions.html",title:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},bs=n("h2",{id:"创建-github-仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建-github-仓库","aria-hidden":"true"},"#"),s(" 创建 GitHub 仓库")],-1),hs={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fnew",title:"https://github.com/new",target:"_blank",rel:"noopener noreferrer"},gs=n("p",null,[n("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0db35e7ca2974a5bba03dae06bb5f92a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image",alt:"创建 GitHub 仓库"})],-1),fs=n("ul",null,[n("li",null,[n("code",null,"master"),s(" 分支存储项目源代码")]),n("li",null,[n("code",null,"gh-pages"),s(" 分支存储打包后的静态文件")])],-1),ys=n("h2",{id:"创建-github-token",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建-github-token","aria-hidden":"true"},"#"),s(" 创建 GitHub Token")],-1),xs=n("strong",null,"repo",-1),js=n("strong",null,"workflow",-1),_s={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fsettings%2Ftokens%2Fnew",title:"https://github.com/settings/tokens/new",target:"_blank",rel:"noopener noreferrer"},Fs=t('<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/faff3548df1f4cf78f8842cf4ae0c7ee~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="创建 GitHub Token"></p><blockquote><p>注意：新生成的 Token 只会显示一次。</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/70e367490ae848d8a4e3e47570febe8b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="Token"></p><h2 id="添加-actions-secret" tabindex="-1"><a class="header-anchor" href="#添加-actions-secret" aria-hidden="true">#</a> 添加 Actions secret</h2><p>将上述创建的 Token 添加到 GitHub 仓库中的 <code>Secrets</code> 里，并将这个新增的 <code>secret</code> 命名为 <code>VITE_VUE_DEPLOY</code> 。</p><p>步骤：仓库 -&gt; <code>Settings</code> -&gt; <code>Secrets</code> -&gt; <code>Actions</code> -&gt; <code>New repository secret</code>。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e5df14de9bd4605a70b654e7d936282~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="New secret"></p><blockquote><p>注意：新创建的 secret <code>VITE_VUE_DEPLOY</code> 在 Actions 配置文件中要用到，两个地方需保持一致！</p></blockquote><h2 id="修改-package-json" tabindex="-1"><a class="header-anchor" href="#修改-package-json" aria-hidden="true">#</a> 修改 package.json</h2>',9),ws=n("code",null,"package.json",-1),Ss=n("code",null,"homepage",-1),As={href:"https://link.juejin.cn/?target=https%3A%2F%2Fcreate-react-app.dev%2Fdocs%2Fdeployment%23building-for-relative-paths",title:"https://create-react-app.dev/docs/deployment#building-for-relative-paths",target:"_blank",rel:"noopener noreferrer"},qs=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://[username].github.io/github-actions-demo&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),Es=n("code",null,"[username]",-1),Cs={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FElanYoung%2Fvite-vue-js-starter-template%2Fblob%2Fmaster%2Fpackage.json%23L11",title:"https://github.com/ElanYoung/vite-vue-js-starter-template/blob/master/package.json#L11",target:"_blank",rel:"noopener noreferrer"},zs=t(`<h2 id="创建-actions-配置文件" tabindex="-1"><a class="header-anchor" href="#创建-actions-配置文件" aria-hidden="true">#</a> 创建 Actions 配置文件</h2><p>（1）在项目根目录下创建 <code>.github</code> 目录。</p><p>（2）在 <code>.github</code> 目录下创建 <code>workflows</code> 目录。</p><p>（3）在 <code>workflows</code> 目录下创建 <code>deploy.yml</code> 文件。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01ca2c1f76fa4162971a46297c270a9e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=".github/workflows/deploy.yml"></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Vite Vue Deploy

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token comment"># master 分支有 push 时触发</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token comment"># 指定虚拟机环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>14.x<span class="token punctuation">,</span> 16.x<span class="token punctuation">]</span>

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token comment"># 拉取 GitHub 仓库代码</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token comment"># 设定 Node.js 环境</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.node<span class="token punctuation">-</span>version <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install
        <span class="token comment"># 安装依赖</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token comment"># 打包</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署打包目录</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist
          <span class="token comment"># 密钥名</span>
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.VITE_VUE_DEPLOY <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 分支</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),Ls={href:"https://link.juejin.cn/?target=https%3A%2F%2FElanYoung.github.io%2Fvite-vue-js-starter-template",title:"https://ElanYoung.github.io/vite-vue-js-starter-template",target:"_blank",rel:"noopener noreferrer"};function Vs(Ps,Is){const a=o("ExternalLinkIcon");return p(),l("div",null,[r,d,u,n("ul",null,[n("li",null,[s("⚡️ "),n("a",v,[s("Vite 3"),e(a)]),s(" - 构建工具（就是快！）")]),n("li",null,[s("🖖 "),n("a",m,[s("Vue 3"),e(a)]),s(" - 渐进式 JavaScript 框架")]),n("li",null,[s("🚦 "),n("a",k,[s("Vue Router"),e(a)]),s(" - 官方路由管理器")]),n("li",null,[s("📦 "),n("a",b,[s("Pinia"),e(a)]),s(" - 值得你喜欢的 Vue Store")]),n("li",null,[s("💻 "),n("a",h,[s("TDesign"),e(a)]),s(" - TDesign 适配桌面端的组件库")]),n("li",null,[s("🎨 "),n("a",g,[s("Less"),e(a)]),s(" - CSS 预处理器")]),n("li",null,[s("🔗 "),n("a",f,[s("Axios"),e(a)]),s(" - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js")]),n("li",null,[s("🧰 "),n("a",y,[s("Husky"),e(a)]),s(" + "),n("a",x,[s("Lint-Staged"),e(a)]),s(" - Git Hook 工具")]),n("li",null,[s("🛡️ "),n("a",j,[s("EditorConfig"),e(a)]),s(" + "),n("a",_,[s("ESLint"),e(a)]),s(" + "),n("a",F,[s("Prettier"),e(a)]),s(" + "),n("a",w,[s("Stylelint"),e(a)]),s(" - 代码规范")]),n("li",null,[s("🔨 "),n("a",S,[s("Commitizen"),e(a)]),s(" + "),n("a",A,[s("Commitlint"),e(a)]),s(" - 提交规范")]),n("li",null,[s("💡 "),n("a",q,[s("GitHub Actions"),e(a)]),s(" - 自动部署")])]),E,C,n("p",null,[s("确保你安装了最新版本的 "),n("a",z,[s("Node.js"),e(a)]),s("，然后在命令行中运行以下命令：")]),L,n("p",null,[s("这一指令将会安装并执行 "),n("a",V,[s("create-vite"),e(a)]),s("，它是一个基本模板快速启动项目工具。")]),P,n("p",null,[s("关于 Vite 更多配置项及用法，请查看 Vite 官网 "),n("a",I,[s("vitejs.dev/config/"),e(a)]),s(" 。")]),D,n("blockquote",null,[H,n("p",null,[s("参考链接："),n("a",T,[s("CSS BEM 书写规范"),e(a)])])]),B,n("p",null,[n("a",G,[s("官方文档"),e(a)])]),J,n("p",null,[s("项目托管在 "),n("a",O,[s("GitHub 仓库"),e(a)]),s("，需要的同学可以去下载下来，参考学习。")]),Y,n("p",null,[n("a",N,[s("EditorConfig"),e(a)]),s(" 主要用于统一不同 IDE 编辑器的编码风格。")]),R,n("p",null,[n("a",W,[s("ESLint"),e(a)]),s(" 是针对 EScript 的一款代码检测工具，它可以检测项目中编写不规范的代码，如果写出不符合规范的代码会被警告。")]),U,M,n("ul",null,[n("li",null,[n("a",$,[s("图片"),e(a)]),s(" - ESLint 本体")]),n("li",null,[n("a",Q,[s("图片"),e(a)]),s(" - 改善 ESLint 规范编写体验")]),n("li",null,[n("a",K,[s("图片"),e(a)]),s(" - 适用于 Vue 文件的 ESLint 插件")]),n("li",null,[n("a",X,[s("图片"),e(a)]),s(" - Airbnb JavaScript 风格指南")]),n("li",null,[n("a",Z,[s("图片"),e(a)]),s(" - 使用 "),nn,s(" 时必须安装的前置插件")]),n("li",null,[n("a",sn,[s("图片"),e(a)]),s(" - 使用 "),an,s(" 时必须安装的 ESLint 解析器")])]),en,n("p",null,[n("a",tn,[s("Prettier"),e(a)]),s(" 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。")]),pn,n("p",null,[s("Prettier 支持多种格式的"),n("a",ln,[s("配置文件"),e(a)]),s("，比如 "),on,s("、"),cn,s("、"),rn,s("、"),dn,s("等。")]),un,n("blockquote",null,[n("p",null,[s("关于更多配置项信息，请前往 Prettier 官网查看 "),n("a",vn,[s("Prettier-Options"),e(a)])])]),mn,n("ul",null,[n("li",null,[n("a",kn,[bn,e(a)]),s(" - Stylelint 本体")]),n("li",null,[n("a",hn,[gn,e(a)]),s(" - 关闭 Stylelint 中与 Prettier 中会发生冲突的规则")]),n("li",null,[n("a",fn,[yn,e(a)]),s(" - Stylelint 官方推荐规则")]),n("li",null,[n("a",xn,[jn,e(a)]),s(" - 检验 vue 文件中的样式")]),n("li",null,[n("a",_n,[Fn,e(a)]),s(" - CSS 属性顺序规则插件")])]),wn,n("p",null,[Sn,s(" v14 版本默认不支持 vue 文件中的 style 代码自动检测，详情查看"),n("a",An,[s("官方迁移指南"),e(a)])]),qn,n("ul",null,[n("li",null,[n("a",En,[Cn,e(a)]),s(" - 解析 vue 文件")]),n("li",null,[n("a",zn,[Ln,e(a)]),s(" - 使用 "),Vn,s(" 依赖的模块")]),n("li",null,[n("a",Pn,[In,e(a)]),s(" - 对 less 文件进行解析")])]),Dn,n("p",null,[s("实现这一功能，需要借助 "),n("a",Hn,[s("husky"),e(a)]),s(" + "),n("a",Tn,[s("lint-staged"),e(a)]),s(" 。")]),Bn,n("blockquote",null,[n("p",null,[s("注意：本项目使用 husky 6.x 版本，6.x 版本配置方式跟之前版本有较大差异，当发现配置方法不一致时，一切以 "),n("a",Gn,[s("husky 官网"),e(a)]),s("为准。")])]),Jn,n("p",null,[s("社区最流行、最知名、最受认可的 "),n("a",On,[s("Angular"),e(a)]),s(" 团队提交规范：")]),Yn,n("p",null,[s("参考链接： "),n("a",Nn,[s("Angular Style Commit Message Conventions"),e(a)])]),Rn,n("blockquote",null,[n("p",null,[s("一款工程性更强，轻量级，高度自定义，标准输出格式的 "),n("a",Wn,[s("commitizen"),e(a)]),s(" 适配器")]),n("p",null,[s("官方网站："),n("a",Un,[s("cz-git"),e(a)])])]),Mn,n("p",null,[n("strong",null,[s("cz-git 与 "),n("a",$n,[s("commitlint"),e(a)]),s(" 进行联动给予校验信息")]),s("，所以可以编写于 "),n("a",Qn,[s("commitlint"),e(a)]),s(" 配置文件之中。")]),n("p",null,[s("例如：("),n("a",Kn,[s("⇒ 配置模板"),e(a)]),s(")")]),Xn,n("p",null,[s("本项目配置文件可参考："),n("a",Zn,[s("commitlint.config.js"),e(a)])]),ns,n("p",null,[n("strong",null,[s("方式二：与 "),n("a",ss,[s("commitlint"),e(a)]),s(" 配合")]),s("，在 "),as,s(" 路径下创建配置文件 ("),n("a",es,[s("↓ 配置模板"),e(a)]),s(")")]),ts,n("ul",null,[n("li",null,[n("a",is,[ps,e(a)]),s(" - Commitlint 本体")]),n("li",null,[n("a",ls,[os,e(a)]),s(" - 通用提交规范")])]),cs,n("blockquote",null,[n("p",null,[s("本项目完整代码托管在 "),n("a",rs,[s("GitHub 仓库"),e(a)]),s("，欢迎点亮小星星 🌟🌟")])]),ds,us,vs,ms,n("p",null,[s("🔗 参考链接："),n("a",ks,[s("GitHub Actions 入门教程"),e(a)])]),bs,n("p",null,[s("因为 GitHub Actions 只对 GitHub 仓库有效，所以"),n("a",hs,[s("创建 GitHub 仓库"),e(a)]),s("来托管项目代码。")]),gs,fs,ys,n("p",null,[s("创建一个有 "),xs,s(" 和 "),js,s(" 权限的 "),n("a",_s,[s("GitHub Token"),e(a)])]),Fs,n("p",null,[s("打开 "),ws,s(" 文件，新增 "),Ss,s(" 字段，表示该应用发布后的根目录（参见"),n("a",As,[s("官方文档"),e(a)]),s("）。")]),qs,n("p",null,[s("上面代码中，将 "),Es,s(" 替换成你的 GitHub 用户名，参见"),n("a",Cs,[s("范例"),e(a)]),s("。")]),zs,n("blockquote",null,[n("p",null,[s("🔗 通过此链接 "),n("a",Ls,[s("ElanYoung.github.io/vite-vue-js…"),e(a)]),s(" 即可访问本项目")])])])}const Hs=i(c,[["render",Vs],["__file","index.html.vue"]]);export{Hs as default};
