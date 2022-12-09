import{_ as e,z as n,A as a,a6 as s}from"./framework.fef63301.js";const i={},d=s(`<h1 id="docker-起步" tabindex="-1"><a class="header-anchor" href="#docker-起步" aria-hidden="true">#</a> docker 起步</h1><p>docker 使应用部署更加轻量，可移植，可扩展，更好的环境隔离也更大程度地避免了生产环境与测试环境不一致的巨大尴尬</p><h2 id="认识docker" tabindex="-1"><a class="header-anchor" href="#认识docker" aria-hidden="true">#</a> 认识Docker</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c09275e60e947e4836c7323809cbbec~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h3><p>docker 的架构图如下 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b83f7ef6f44445fbbd960dfd3d656820~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="从图中可以看出几个组成部分" tabindex="-1"><a class="header-anchor" href="#从图中可以看出几个组成部分" aria-hidden="true">#</a> 从图中可以看出几个组成部分</h3><ul><li>docker client: 即 docker 命令行工具</li><li>docker host: 宿主机，docker daemon 的运行环境服务器</li><li>docker daemon: docker 的守护进程，docker client 通过命令行与 docker daemon 交互</li><li>image: 镜像，可以理解为一个容器的模板，通过一个镜像可以创建多个容器</li><li>container: 最小型的一个操作系统环境，可以对各种服务以及应用容器化，是镜像的运行实例</li><li>registry: 镜像仓库，存储大量镜像，可以从镜像仓库拉取和推送镜像</li><li>Docker 技术的三大核心概念，分别是：镜像 Image、容器 Container、仓库 Repository</li></ul><h2 id="安装-docker" tabindex="-1"><a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a> 安装 Docker</h2><h3 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h3><ul><li>在本地安装 docker/docker-compose，通过 Docker Desktop下载 docker 后，双击安装即可。</li><li>如果是个人服务器且为 linux，可参考 安装 docker ,它将 docker 与 docker compose 一并安装。</li></ul><h3 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装" aria-hidden="true">#</a> 命令行安装</h3><ul><li>Homebrew 的 Cask 已经支持 Docker for Mac，因此可以很方便的使用 Homebrew Cask 来进行安装，执行如下命令：</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>brew cask install docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看版本</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用docker启动一个vue项目" tabindex="-1"><a class="header-anchor" href="#使用docker启动一个vue项目" aria-hidden="true">#</a> 使用Docker启动一个vue项目</h2><h3 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目" aria-hidden="true">#</a> 新建项目</h3><p>使用Vue 脚手架构建项目</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给项目起个名字，叫做docker-demo-vue</p><p>然后一路回车。运行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> docker-demo-vue
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目没啥问题，我们对项目进行打包：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建-dockerfile" tabindex="-1"><a class="header-anchor" href="#新建-dockerfile" aria-hidden="true">#</a> 新建 Dockerfile</h3><p>在docker-demo-vue根目录下执行：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>touch Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的项目目录结构是这样的： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cd273772060479ba041a9ce76f3bd4e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="拉取-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#拉取-nginx-镜像" aria-hidden="true">#</a> 拉取 Nginx 镜像</h3><ul><li>首先打开你的Docker，默认会启动。</li><li>控制台拉取 Nginx 镜像：</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker pull nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现下面的信息说明拉取Nginx镜像成功 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acd02c73c8bd4140a7000daef4a1b858~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="在根目录创建-nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#在根目录创建-nginx-配置文件" aria-hidden="true">#</a> 在根目录创建 Nginx 配置文件</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>touch default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写入：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/host.access.log  main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置镜像" tabindex="-1"><a class="header-anchor" href="#配置镜像" aria-hidden="true">#</a> 配置镜像</h3><p>打开Dockerfile文件，写入：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> nginx  </span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/ /usr/share/nginx/html/  </span>
<span class="token instruction"><span class="token keyword">COPY</span> default.conf /etc/nginx/conf.d/default.conf  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FROM nginx 指定该镜像是基于 nginx:latest 镜像而构建的；</li><li>COPY dist/ /usr/share/nginx/html/ 命令的意思是将项目根目录下 dist 文件夹中的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下；</li><li>COPY default.conf /etc/nginx/conf.d/default.conf 将 default.conf 复制到 etc/nginx/conf.d/default.conf，用本地的 default.conf 配置来替换 Nginx 镜像里的默认配置。</li></ul><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h3><p>Docker 通过 build 命令来构建镜像：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker build -t docker-demo-vue .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72205a4bd7d645e8aba8f94f9720974b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"> 出现上面的信息，表示构建成成功了。 参数说明：</p><ul><li>-t 参数给镜像命名 docker-demo-vue</li><li>. 是基于当前目录的 Dockerfile 来构建镜像 运行docker image ls | grep docker-demo-vue查看镜像 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b89dc49a84eb4e3f8c6a1f74f9497206~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"> 可以看到我们构建了一个项目镜像。 在docker中也可以查看生成的镜像 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b32a3e1fa3d41b0a6a2fabc4f78fe2d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></li></ul><h3 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run -d -p 3000:80 --name docker-vue docker-demo-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="参数解释" tabindex="-1"><a class="header-anchor" href="#参数解释" aria-hidden="true">#</a> 参数解释</h4><ul><li>-d 设置容器在后台运行</li><li>-p 表示端口映射，把本机的 3000 端口映射到 container 的 80 端口（这样外网就能通过本机的 3000 端口访问了。</li><li>--name 设置容器名 docker-vue</li><li>docker-demo-vue 是我们上面构建的镜像名字</li></ul><p>可以运行docker ps -a 查看容器id： <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbe6a154009b48218d88c000043695ab~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"> 可以看到我们刚才打印的docker-vue的容器id为b6c49793ad48，跟上面的容器idb6c49793ad48ccfc106fab63f988881a1467ae25b5c4c9cee87ad4f3515f9607对应，默认是取了前12位。 同样的也可以在桌面端看到，正在运行的docker容器 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93e73388cc0c46d0a709be93248a4193~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="访问项目" tabindex="-1"><a class="header-anchor" href="#访问项目" aria-hidden="true">#</a> 访问项目</h3><p>可以在浏览器中看到对应的页面，跟我们前面创建项目的时候看到的界面是一样的 也可以使用curl -v -i localhost:3000 去查看对应的静态文件</p><h3 id="发布镜像" tabindex="-1"><a class="header-anchor" href="#发布镜像" aria-hidden="true">#</a> 发布镜像</h3><ul><li>如果你想为社区贡献力量，那么需要将镜像发布，方便其他开发者使用。</li><li>发布镜像需要如下步骤：</li><li>登陆 dockerhub，注册账号；</li><li>命令行执行 docker login，之后输入我们的账号密码，进行登录；</li><li>推送镜像之前，需要打一个 Tag，执行 docker tag image username repository:tag</li><li>全流程结束，以后我们要使用，再也不需要「搬石头、砍木头、画图纸、盖房子」了，拎包入住。这也是 docker 独特魅力所在。</li><li>以上，就是如何使用docker去运行一个基础项目的示例。</li></ul><h2 id="底层原理简介" tabindex="-1"><a class="header-anchor" href="#底层原理简介" aria-hidden="true">#</a> 底层原理简介</h2><p>docker 底层使用了一些 linux 内核的特性，大概有 namespace，cgroups 和 ufs。</p><h3 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> namespace</h3><p>docker 使用 linux namespace 构建隔离的环境，它由以下 namespace 组成</p><ul><li>pid: 隔离进程</li><li>net: 隔离网络</li><li>ipc: 隔离 IPC</li><li>mnt: 隔离文件系统挂载</li><li>uts: 隔离hostname</li><li>user: 隔离uid/gid</li></ul><h2 id="进阶技巧总结" tabindex="-1"><a class="header-anchor" href="#进阶技巧总结" aria-hidden="true">#</a> 进阶技巧总结</h2><h3 id="镜像仓库与拉取" tabindex="-1"><a class="header-anchor" href="#镜像仓库与拉取" aria-hidden="true">#</a> 镜像仓库与拉取</h3><ul><li>大部分时候，我们不需要自己构建镜像，我们可以在官方镜像仓库 Docker Hub拉取镜像。</li><li>可以简单使用命令 docker pull 拉取镜像。</li><li>拉取镜像后可以使用 docker inspect 查看镜像信息，如配置及环境变量等。</li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 加入拉取一个 node:alpine 的镜像</span>
$ docker pull node:alpine

<span class="token comment"># 查看镜像信息</span>
$ docker inspect node:alpine

<span class="token comment"># 列出所有镜像</span>
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
node                alpine              f20a6d8b6721        13 days ago         105MB
mongo               latest              965553e202a4        2 weeks ago         363MB
centos              latest              9f38484d220f        8 months ago        202MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构建镜像与发布" tabindex="-1"><a class="header-anchor" href="#构建镜像与发布" aria-hidden="true">#</a> 构建镜像与发布</h3><p>但并不是所有的镜像都可以在镜像仓库中找到，另外我们也需要为我们自己的业务应用去构建镜像。 使用 docker build 构建镜像，docker build 会使用当前目录的 Dockerfile 构建镜像，至于 Dockerfile 的配置，参考下节。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># -t node-base:10: 指定镜像以及版本号</span>
<span class="token comment"># .: 指当前路径</span>
$ docker build -t node-base:10 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><p>在使用 docker 部署自己应用时，往往需要独立构建镜像。 docker 使用 Dockerfile 作为配置文件构建镜像，简单看一个 node 应用构建的 dockerfile。 Dockerfile 的各个指令可参考 Dockerfile Reference。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:alpine</span>

<span class="token instruction"><span class="token keyword">ADD</span> package.json package-lock.json /code/</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm install --production</span>

<span class="token instruction"><span class="token keyword">ADD</span> . /code</span>

<span class="token instruction"><span class="token keyword">CMD</span> npm start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="from" tabindex="-1"><a class="header-anchor" href="#from" aria-hidden="true">#</a> FROM</h3><p>基于一个旧有的基础镜像，格式如下。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> &lt;image&gt; [AS &lt;name&gt;]</span>

<span class="token comment"># 在多阶段构建时会用到</span>
<span class="token instruction"><span class="token keyword">FROM</span> &lt;image&gt;[:&lt;tag&gt;] [AS &lt;name&gt;]</span>

<span class="token instruction"><span class="token keyword">FROM</span> node:16-alpine</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:alpine</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> ADD</h3><p>把宿主机的文件或目录加入到镜像的文件系统中。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">ADD</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;src&gt;... &lt;dest&gt;</span>

<span class="token instruction"><span class="token keyword">ADD</span> . /code</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> RUN</h3><p>在镜像中执行命令，由于 ufs 的文件系统，它会在当前镜像的顶层新增一层。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">RUN</span> &lt;command&gt;</span>

<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd" aria-hidden="true">#</a> CMD</h3><p>指定容器如何启动。</p><p>一个 Dockerfile 中只允许有一个 CMD</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># exec form, this is the preferred form</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;executable&quot;</span>,<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>] </span>

<span class="token comment"># as default parameters to ENTRYPOINT</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;param1&quot;</span>,<span class="token string">&quot;param2&quot;</span>]</span>

<span class="token comment"># shell form</span>
<span class="token instruction"><span class="token keyword">CMD</span> command param1 param2</span>

<span class="token instruction"><span class="token keyword">CMD</span> npm start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h3><p>镜像与容器的关系，类似于代码与进程的关系。</p><ul><li>docker run 创建容器</li><li>docker stop 停止容器</li><li>docker rm 删除容器</li></ul><h3 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h3><p>基于 nginx 镜像创建一个最简单的容器：启动一个最简单的 http 服务 使用 docker run 来启动容器，docker ps 查看容器启动状态</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 启动 nginx 容器，并在本地 8888 端口进行访问</span>
$ docker run --rm -it --name nginx -p 8888:80 nginx:alpine

$ docker ps -l
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                    NAMES
404e88f0d90c        nginx:alpine         &quot;nginx -g &#39;daemon of…&quot;   4 minutes ago       Up 4 minutes        0.0.0.0:8888-&gt;80/tcp     nginx
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                    NAMES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中:</p><ul><li>--rm：当停止容器时自动清楚容器</li><li>-it：可交互式、赋予 tty 的方式</li><li>--name：为容器指定名称</li><li>-p host-port:container-port：宿主机与容器端口映射，方便容器对外提供服务</li><li>nginx:alpine：基于该基础镜像创建容器</li></ul><p>此时在宿主机使用 curl 测试容器提供的服务是否正常</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ curl localhost:8888
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Welcome to nginx!&lt;/title&gt;
&lt;style&gt;
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;
&lt;p&gt;If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.&lt;/p&gt;

&lt;p&gt;For online documentation and support please refer to
&lt;a href=&quot;http://nginx.org/&quot;&gt;nginx.org&lt;/a&gt;.&lt;br/&gt;
Commercial support is available at
&lt;a href=&quot;http://nginx.com/&quot;&gt;nginx.com&lt;/a&gt;.&lt;/p&gt;

&lt;p&gt;&lt;em&gt;Thank you for using nginx.&lt;/em&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那如果要进入容器环境中呢？使用 docker exec -it container-name 命令</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker exec -it nginx sh
/ #
/ #
/ #
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器管理" tabindex="-1"><a class="header-anchor" href="#容器管理" aria-hidden="true">#</a> 容器管理</h3><p>docker ps 列出所有容器</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker ps
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                    NAMES
404e88f0d90c        nginx:alpine         &quot;nginx -g &#39;daemon of…&quot;   4 minutes ago       Up 4 minutes        0.0.0.0:8888-&gt;80/tcp     nginx
498e7d74fb4f        nginx:alpine         &quot;nginx -g &#39;daemon of…&quot;   7 minutes ago       Up 7 minutes        80/tcp                   lucid_mirzakhani
2ce10556dc8f        redis:4.0.6-alpine   &quot;docker-entrypoint.s…&quot;   2 months ago        Up 2 months         0.0.0.0:6379-&gt;6379/tcp   apolloserverstarter_redis_1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker port 查看容器端口映射</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker port nginx
80/tcp -&gt; 0.0.0.0:8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>docker stats 查看容器资源占用</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker stats nginx
CONTAINER ID        NAME                CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
404e88f0d90c        nginx               0.00%               1.395MiB / 1.796GiB   0.08%               632B / 1.27kB       0B / 0B             2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器测试" tabindex="-1"><a class="header-anchor" href="#容器测试" aria-hidden="true">#</a> 容器测试</h3><p>如果某时某个容器出现问题，可直接进入容器内部进行调试。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker exec -it &lt;container_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker compose</h3><p>在 docker compose v2 中，使用了 docker compose 命令去替代了 docker-compose 命令，可以通过 docker compose version 查看版本号。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>$ docker compose version
Docker Compose version v2.6.0

<span class="token comment"># 如果是 v1 版本，则需要通过 docker-compose 查看命令</span>
$ docker-compose version
docker-compose version 1.29.2, build 5becea4c
docker-py version: 5.0.0
CPython version: 3.7.10
OpenSSL version: OpenSSL 1.1.0l  10 Sep 2019
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在当前目录，新建配置文件为 docker-compose.yaml，内容如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;nginx:alpine&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8000<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时可通过 docker compose up 启动容器。</p>`,111),l=[d];function c(r,o){return n(),a("div",null,l)}const p=e(i,[["render",c],["__file","index.html.vue"]]);export{p as default};
