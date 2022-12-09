import{_ as d,z as l,A as c,X as e,C as i,T as t,a6 as s,Q as a}from"./framework.fef63301.js";const r={},o=s(`<h1 id="代码同步-github-和-gitee" tabindex="-1"><a class="header-anchor" href="#代码同步-github-和-gitee" aria-hidden="true">#</a> 代码同步 Github 和 Gitee</h1><h2 id="gitee-导入仓库" tabindex="-1"><a class="header-anchor" href="#gitee-导入仓库" aria-hidden="true">#</a> Gitee 导入仓库</h2><p>上篇我们已经在 Github 创建了博客仓库，现在我们在 Gitee 绑定 Github 账号后，选择仓库导入：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31df2053180041808e8c57a2c65c3acd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>仓库建立后，问题也来了，即我们一份本地仓库，如何保证 Github 和 Gitee 仓库代码的同步呢？</p><h2 id="_1-手动同步" tabindex="-1"><a class="header-anchor" href="#_1-手动同步" aria-hidden="true">#</a> 1. 手动同步</h2><p>在 Gitee 的项目主页，提供了同步的按钮，你只用点一下，即可与 Github 同步更新，但是注意这里的同步功能默认是强制同步。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ff8fca7e13445eb8b3f16f906e14029~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>有点麻烦的是，我们需要在推送到 Github 后，再到 Gitee 项目主页手动点击一下。</p><h2 id="_2-推送两个仓库" tabindex="-1"><a class="header-anchor" href="#_2-推送两个仓库" aria-hidden="true">#</a> 2. 推送两个仓库</h2><p>除此之外，我们也可以在 sh 脚本文件里，直接推送到两个仓库地址上，我们修改一下上篇的脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m &#39;deploy&#39;
# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:mqyqingfeng/learn-typescript.git master:gh-pages
git push -f git@gitee.com:mqyqingfeng/learn-typescript.git master:gh-pages

cd -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行 <code>sh deploy.sh</code> 的时候，就会自动往两个仓库里推送。</p><h2 id="_3-github-actions-自动同步" tabindex="-1"><a class="header-anchor" href="#_3-github-actions-自动同步" aria-hidden="true">#</a> 3. Github Actions 自动同步</h2><p>我们也可以利用 Github Actions，写一个工作流，在发现 Github 博客仓库的 gh-pages 分支代码更新后，自动同步当前代码到 Gitee 上。</p>`,15),u={href:"https://link.juejin.cn/?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2019%2F09%2Fgetting-started-with-github-actions.html",title:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FYikun%2Fhub-mirror-action",title:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>steps:
- name: Mirror the Github organization repos to Gitee.
  uses: Yikun/hub-mirror-action@master
  with:
    src: github/kunpengcompute
    dst: gitee/kunpengcompute
    dst_key: \${{ secrets.GITEE_PRIVATE_KEY }}
    dst_token: \${{ secrets.GITEE_TOKEN }}
    account_type: org

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中有四个必填项：</p><ul><li><code>src</code> 表示需要被同步的源端账户名，即我们 Github 的账户名，因为我的 Github ID 是 mqyqingfeng，所以这里我应该改成 <code>github/mqyqingfeng</code>。</li><li><code>dst</code> 表示需要同步到的目的端账户名，即我们 Gitee 的账户名，因为我的 Gitee ID 也是 mqyqingfeng，所以这里我应该改成 <code>gitee/mqyqingfeng</code>。</li><li><code>dst_key</code> 表示用于在目的端上传代码的私钥，然后将其保存在 Secrets 中。</li></ul><p>具体的操作步骤如下：</p><p>获取私钥：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat ~/.ssh/id_rsa

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>复制私钥内容，然后在要同步的 Github 仓库中，选择 &quot;Setting&quot; -&gt; &quot;Secrets&quot; -&gt; &quot;New repository secret&quot;</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/169b90d76f984e91b559db0526b6093f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p>`,8),b={href:"https://link.juejin.cn/?target=https%3A%2F%2Flovelijunyi.gitee.io%2Fposts%2F6b66.html",title:"https://lovelijunyi.gitee.io/posts/6b66.html",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,[e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd7c9a36422a47a1a93f1155c5fceee9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image",alt:""})],-1),g=e("p",null,[i("然后点击 "),e("code",null,"Add secret"),i(" 即可。")],-1),h={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgitee.com%2Fprofile%2Fpersonal_access_tokens",title:"https://gitee.com/profile/personal_access_tokens",target:"_blank",rel:"noopener noreferrer"},f=s(`<p>那么我们就可以在仓库建立的根目录下，建立目录 <code>.github/workflows</code> ，然后创建一个名为<code>syncToGitee.yml</code> 的文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>name: syncToGitee
on:
  push:
    branches:
      - gh-pages
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Mirror the Github organization repos to Gitee.
        uses: Yikun/hub-mirror-action@master
        with:
          src: &#39;github/mqyqingfeng&#39;
          dst: &#39;gitee/mqyqingfeng&#39;
          dst_key: \${{ secrets.GITEE_PRIVATE_KEY }}
          dst_token:  \${{ secrets.GITEE_TOKEN }}
          static_list: &quot;learn-typescript&quot;
          force_update: true
          debug: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>static_list</code> 表示单一仓库同步，<code>force_update</code> 为 <code>true</code> 表示启用 <code>git push -f</code> 强制同步，<code>debug</code> 为 <code>true</code> 表示启用 <code>debug</code> 开关，会显示所有执行命令。</p><p>当我们把这样的文件提交到 Github，Github 会自动检测并运行该脚本。但是现在还有几个问题要注意：</p><ol><li>因为我们是提交到 Github 的 gh-pages 分支上，这个文件和目录需要写在 gh-pages 分支</li><li>观察我们的脚本代码，我们就会发现，每次我们 <code>sh deploy.sh</code> 的时候，都是编译代码到 dist 目录，然后重新 git init ，最后强制提交。所以我们在项目的根目录建立 <code>.github/workflows/syncToGitee.yml</code> 并没有什么用，一来提交的是 dist 目录里的代码，二是每次还都会清空重新编译生成代码提交。</li></ol><p>为此，我们可以在脚本里添加代码，每次编译完后，再拷贝外层的 <code>.github/workflows/syncToGitee.yml</code> 到 dist 目录里，再提交到 Github 上。</p><p>所以我们依然在项目根目录添加目录和文件，此时的文件结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ .github
│  └─ workflows
│   └─ syncToGitee.yml
└─ package.json
└─ deploy.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本文件代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 拷贝目录和文件
cp -r ../../../.github ./

git init
git add -A
git commit -m &#39;deploy&#39;
# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:mqyqingfeng/learn-typescript.git master:gh-pages

cd -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们再运行 <code>sh deploy.sh</code> 代码提交到 Github，就可以在仓库的 Actions 中看到运行记录：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26191fae032f4d4cb6968432d808246c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt=""></p><p>执行时间大概一分钟左右，Gitee 的代码就会自动同步。</p><p>至此，我们实现了 Github 与 Gitee 代码仓库的同步。</p>`,14);function _(G,k){const n=a("ExternalLinkIcon");return l(),c("div",null,[o,e("p",null,[i("关于 Github Actions 的介绍，可以参考阮一峰老师的 "),e("a",u,[i("《GitHub Actions 入门教程》"),t(n)]),i("。")]),e("p",null,[i("为了实现 Gitee 和 Github 的同步，我们需要借助一个 action，还好业界已经有现成的实现了，这里我采用的是 "),e("a",v,[i("Hub Mirror Action"),t(n)]),i("，我们可以看到使用的示例代码：")]),m,e("p",null,[i('填入 Secret 内容，Name 命名为 "GITEE_PRIVATE_KEY"，Value 为复制的内容'),e("a",b,[t(n)])]),p,g,e("ul",null,[e("li",null,[i("dst_token 创建仓库的API tokens， 用于自动创建不存在的仓库。这里我们从 Gitee 上获取，具体地址为 "),e("a",h,[i("gitee.com/profile/per…"),t(n)]),i('。生成并复制 Token，然后同样的步骤，保存在 Github 的 Secrets 中，Name 为 "GITEE_TOKEN"')])]),f])}const x=d(r,[["render",_],["__file","index.html.vue"]]);export{x as default};
