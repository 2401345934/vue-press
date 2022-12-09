import{_ as e,z as i,A as n,a6 as d}from"./framework.fef63301.js";const a={},c=d(`<h1 id="基于-docker-gitlab、gitlab-runner-搭建一整套自动化ci、cd流程-完成从代码提交到自动打包编译到自动部署运行" tabindex="-1"><a class="header-anchor" href="#基于-docker-gitlab、gitlab-runner-搭建一整套自动化ci、cd流程-完成从代码提交到自动打包编译到自动部署运行" aria-hidden="true">#</a> 基于 Docker ( Gitlab、Gitlab Runner ) 搭建一整套自动化CI、CD流程，完成从代码提交到自动打包编译到自动部署运行</h1><h3 id="一、安装-docker" tabindex="-1"><a class="header-anchor" href="#一、安装-docker" aria-hidden="true">#</a> 一、安装 Docker</h3><p><code>linux</code>服务器使用<code>curl</code>下载快速安装的<code>shell</code>脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fsSL get.docker.com -o get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载完成后，可以<code>ls</code>命令查看一下。已经存在的话，使用<code>sh</code>命令执行这个脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sh get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意如果不是<code>root</code>用户，需要使用<code>sudo su</code>获取超级管理员权限。</p><p>安装完成后启动一下<code>Docker Server</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>docker version</code>命令能看到<code>Client</code>和<code>Server</code>就启动成功了。</p><h3 id="二、基于-docker-安装-gitlab" tabindex="-1"><a class="header-anchor" href="#二、基于-docker-安装-gitlab" aria-hidden="true">#</a> 二、基于 Docker 安装 Gitlab</h3><h4 id="_1-一键安装命令" tabindex="-1"><a class="header-anchor" href="#_1-一键安装命令" aria-hidden="true">#</a> 1. 一键安装命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --detach \\
  --hostname localhost \\
  --publish 443:443 --publish 80:80 --publish 222:22 \\
  --name gitlab \\
  --restart always \\
  --volume /home/gitlab/config:/etc/gitlab \\
  --volume /home/gitlab/logs:/var/log/gitlab \\
  --volume /home/gitlab/data:/var/opt/gitlab \\
  gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hostname</code>: 这里改成你自己的域名(域名要设置解析)或服务器ip</p><p><code>publish</code>: 端口映射(服务器端口：容器内端口)</p><p><code>restart</code>: 重启方式</p><p><code>volume</code>: 目录挂载，把容器内目录挂载到服务器本地(服务器本地目录：容器内目录)</p><p><code>gitlab/gitlab-ce:latest</code> 镜像名称</p><h4 id="_2-安装完成后通过域名或服务器ip访问" tabindex="-1"><a class="header-anchor" href="#_2-安装完成后通过域名或服务器ip访问" aria-hidden="true">#</a> 2. 安装完成后通过域名或服务器ip访问</h4><p>通过<code>root</code>用户登陆</p><p><code>root</code>用户默认密码，通过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it gitlab sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>shell命令方式进入容器内，然后</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat /etc/gitlab/initial_root_password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看默认密码，<code>root</code>用户登陆后，记得改默认密码，这个默认密码文件在24小时后会自动删除。</p><h3 id="三、基于-docker-安装-gitlab-runner、" tabindex="-1"><a class="header-anchor" href="#三、基于-docker-安装-gitlab-runner、" aria-hidden="true">#</a> 三、基于 Docker 安装 Gitlab Runner、</h3><p><code>Gitlab Runner</code> 就是提供我们的CI、CD能力的工具。</p><h4 id="_1-一键安装运行-gitlab-runner" tabindex="-1"><a class="header-anchor" href="#_1-一键安装运行-gitlab-runner" aria-hidden="true">#</a> 1. 一键安装运行 Gitlab Runner</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name gitlab-runner --restart always \\
  -v /home/gitlab-runner/config:/etc/gitlab-runner \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  gitlab/gitlab-runner:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-d</code>: 后台运行</p><p><code>--name</code>: 指定运行后的容器名</p><p><code>restart</code>: 重启方式</p><p><code>-v</code>: 目录挂载</p><h4 id="_2-查看gitlab-runner配置信息" tabindex="-1"><a class="header-anchor" href="#_2-查看gitlab-runner配置信息" aria-hidden="true">#</a> 2. 查看Gitlab Runner配置信息</h4><p>安装好<code>Gitlab Runner</code>后，它只是在容器内运行的一个服务，我们需要让它与<code>Gitlab</code>关联起来，此时需要注册<code>Gitlab Runner</code>。</p><p>首先在<code>Gitlab</code>上，通过<code>root</code>用户个人设置页面，<code>overview</code>里面有个<code>Runners</code>的配置项，可以看到<code>token</code>，在注册的时候需要用。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f3a092251f4f89987dab99722d87fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><h4 id="_3-注册gitlab-runner" tabindex="-1"><a class="header-anchor" href="#_3-注册gitlab-runner" aria-hidden="true">#</a> 3. 注册Gitlab Runner</h4><p>运行注册命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --rm -v /home/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register \\
  --non-interactive \\
  --executor &quot;docker&quot; \\
  --docker-image alpine:latest \\
  --url &quot;http://localhost/&quot; \\
  --registration-token &quot;xxxxxx&quot; \\
  --description &quot;runner&quot; \\
  --tag-list &quot;build&quot; \\
  --run-untagged=&quot;true&quot; \\
  --locked=&quot;false&quot; \\
  --access-level=&quot;not_protected&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>* --url</code>: 后面改成刚才你<code>gitlab</code>上的<code>url</code></p><p><code>* registration-token</code>: 后面改成<code>gitlab</code>上查看的<code>token</code></p><p>其他配置项都是些基本信息，如<code>tag</code>、<code>description</code>等。</p><p>注册成功后在<code>gitlab</code>刷新就可以看到</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2c90aed55c74013a0db7a59677f18fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>到这，我们基本的<code>CI、CD</code>能力已经有了，后面就是编写<code>.gitlab-ci.yml</code>来提供给我们<code>gitlab runner</code>相应的配置。它会按照我们编写的这个文件来执行相应的操作。</p><h3 id="四、编写-gitlab-ci-yml-提供ci、cd配置项" tabindex="-1"><a class="header-anchor" href="#四、编写-gitlab-ci-yml-提供ci、cd配置项" aria-hidden="true">#</a> 四、编写 .gitlab-ci.yml 提供CI、CD配置项</h3><h4 id="_1-提供前端编译、构建功能" tabindex="-1"><a class="header-anchor" href="#_1-提供前端编译、构建功能" aria-hidden="true">#</a> 1. 提供前端编译、构建功能</h4><p>在项目根目录下创建一个<code>.gitlab-ci.yml</code>的文件，写入如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>image: node:16.13.2-slim

stages: # 分段
  - install
  - eslint
  - build
  - deploy

cache: # 缓存
  paths:
    - node_modules
    - dist

job_install:
  tags:
    - build
  stage: install
  script:
    - npm install

job_build:
  tags:
    - build
  stage: build
  script:
    - npm run build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>image</code>: 指定基础镜像环境，前端就是<code>node、docker</code>等，后端有<code>java、python、docker</code></p><p><code>stages</code>: 指定执行的阶段有哪些，流水线执行时会按照这个阶段顺序执行</p><p><code>cache</code>: 针对哪些目录启用缓存</p><p><code>job</code>: 指定每个阶段执行的任务，<code>tags</code>就是使用的<code>runner</code>，<code>stage</code>指定阶段，<code>script</code>指定相应执行的<code>shell</code>命令</p><p>代码<code>push</code>之后流水线就会自动根据这个文件执行，执行的情况可以在下图地方查看</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd3e34de75f14b01a6e60c0c48b942ca~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><h4 id="_2-nginx配置文件编写" tabindex="-1"><a class="header-anchor" href="#_2-nginx配置文件编写" aria-hidden="true">#</a> 2. nginx配置文件编写</h4><p>在项目根目录创建<code>nginx.conf</code>文件，把这个文件复制到容器内作为nginx配置文件，写入以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  #端口
  listen 80; 
  server_name localhost;

  #charset koi8-r;
  access_log /var/log/nginx/host.access.log main;
  error_log /var/log/nginx/error.log error;

  #配置 vue 路由 history模式
  location / {
    root /usr/share/nginx/html;
    try_files $uri $uri/ /index.html;
  }

  #error_page 404 /404.html;
  # redirect server error pages to the static page /50x.html
  #
  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /usr/share/nginx/html;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-dockerfile文件编写" tabindex="-1"><a class="header-anchor" href="#_3-dockerfile文件编写" aria-hidden="true">#</a> 3. Dockerfile文件编写</h4><p>在项目根目录下创建<code>Dockerfile</code>文件，<code>runner</code>会根据这个文件创建一个的<code>docker</code>镜像，文件写入以下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-使用docker自动部署前端项目" tabindex="-1"><a class="header-anchor" href="#_4-使用docker自动部署前端项目" aria-hidden="true">#</a> 4. 使用docker自动部署前端项目</h4><p>首先是<code>.gitlab-ci.yml</code>文件编写</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>image: node:16.13.2-slim

stages: # 分段
  - install
  - eslint
  - build
  - deploy

cache: # 缓存
  paths:
    - node_modules
    - dist

job_install:
  tags:
    - build
  stage: install
  script:
    - npm install

job_build:
  tags:
    - build
  stage: build
  script:
    - npm run build

job_deploy:
    image: docker
    stage: deploy
    script:
      - docker build -t appimages .
      - if [ $(docker ps -aq --filter name=app-container) ]; then docker rm -f app-container;fi
      - docker run -d -p 8080:80 --name app-container appimages

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是多了<code>deploy</code>阶段的任务</p><p><code>image</code>: 使用<code>docker</code>镜像</p><p><code>script第一行</code>: 根据我们项目目录下的<code>Dockerfile</code>文件创建一个<code>docker</code>镜像</p><p><code>script第二行</code>: 判断<code>name=app-container</code>这个容器是否在运行，在运行的话就进行销毁</p><p><code>script第三行</code>: 根据我们打包出来的镜像启动一个<code>app-container</code>的容器</p><hr><p>到此部署的配置基本完成，但是部署的时候可能会遇到一个连接错误的问题</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e30c5d8b61df4ad4944686413e84bea5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>通过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /home/gitlab-runner/config/config.toml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>runner</code>的配置项，对相应的<code>runner</code>内容卷这加<code>&quot;/usr/bin/docker:/usr/bin/docker&quot;, &quot;/var/run/docker.sock:/var/run/docker.sock&quot;</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc20c650f7db470193ad296c923d124b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><blockquote><p>到此，所有的流程都已经完成，我们完成了代码提交后，自动去执行打包编译，部署到相应的容器的操作。如果各位伙伴有什么问题可以联系我，也可以评论区交流哦！</p></blockquote>`,78),l=[c];function s(r,o){return i(),n("div",null,l)}const u=e(a,[["render",s],["__file","index.html.vue"]]);export{u as default};
