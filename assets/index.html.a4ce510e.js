import{_ as a,z as l,A as t,X as e,C as n,T as s,a6 as d,Q as r}from"./framework.fef63301.js";const c={},o=e("h1",{id:"github-pages部署报错-javascript-heap-out-of-memory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-pages部署报错-javascript-heap-out-of-memory","aria-hidden":"true"},"#"),n(" GitHub Pages部署报错：JavaScript heap out of memory")],-1),m=e("p",null,[e("img",{src:"https://img-blog.csdnimg.cn/img_convert/98473f83bb173a1f3f7b0c7c540b123b.png",alt:"image-20220309180119580"})],-1),u=e("p",null,"经过百度，发现原因是node使用的堆内存超出了V8引擎允许的最大值。",-1),v={id:"分析和解决过程",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#分析和解决过程","aria-hidden":"true"},"#",-1),b={href:"https://blog.csdn.net/qq_42937522/article/details/123387368",target:"_blank",rel:"noopener noreferrer"},_=d(`<p>经过搜索常常得出了两种解决方案。</p><p><strong>1、使用 increase-memory-limit 插件</strong></p><p>TypeScript 和 webpack 时的常见问题，项目过大时，使用 increase-memory-limit，增加node服务器内存限制。</p><p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g increase-memory-limit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>进入工程目录执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>increase-memory-limit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在执行上述操作后，然后执行<code>npm run build</code> 后，会报错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;&quot;node --max-old-space-size=4096&quot;&#39; 不是内部或外部命令，也不是可运行的程序

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在高版本中移除了<code>node</code>命令，所以也不能解决。</p><p><strong>2、修改cmd文件</strong></p><p>在目录<code>node_modules/.bin</code>下打开<code>ng.cmd</code>和<code>ngc.cmd</code>文件，添加 <code>--max_old_space_size=4096</code></p><p><strong>但是因为最终部署在GitHub Pages，没有办法直接修改 node_modules 的文件，所以这种方法不行。</strong></p>`,13),h={id:"解决方案",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#解决方案","aria-hidden":"true"},"#",-1),x={href:"https://blog.csdn.net/qq_42937522/article/details/123387368",target:"_blank",rel:"noopener noreferrer"},f=d(`<p>Node.js v8.0 开始，可以使用<code>NODE_OPTIONS</code> 环境变量来全局设置 max_old_space_size 来增加内存限制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export NODE_OPTIONS=--max_old_space_size=4096

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>increase-memory-limit</strong> 将附加 <code>--max-old-space-size=4096</code> 到文件中的所有 <code>node</code> 调用中<code>node_modules/.bin/*</code>。</p><p>注意：如果在windows系统，可以使用命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set NODE_OPTIONS=--max_old_space_size=4096

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code>export</code>是linux命令。</p>`,6),N={id:"扩展",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#扩展","aria-hidden":"true"},"#",-1),y={href:"https://blog.csdn.net/qq_42937522/article/details/123387368",target:"_blank",rel:"noopener noreferrer"},E=d(`<p>修改原来的github部署脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: Deploy GitHub Pages

# 触发条件：在 push 到 master 分支后
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 生成静态文件
      - name: Build
        run: npm install &amp;&amp; export NODE_OPTIONS=--max_old_space_size=4096 &amp;&amp;npm run build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: docs/.vuepress/dist


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function S(k,T){const i=r("ExternalLinkIcon");return l(),t("div",null,[o,m,u,e("h2",v,[p,n(),e("a",b,[s(i)]),n("分析和解决过程")]),_,e("h2",h,[g,n(),e("a",x,[s(i)]),n("解决方案")]),f,e("h2",N,[O,n(),e("a",y,[s(i)]),n("扩展")]),E])}const z=a(c,[["render",S],["__file","index.html.vue"]]);export{z as default};
