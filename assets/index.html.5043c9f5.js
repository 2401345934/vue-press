import{_ as r,z as t,A as l,X as e,T as s,C as n,a6 as i,Q as o}from"./framework.fef63301.js";const d={},c=e("h1",{id:"基于gitlab-docker的前端自动化构建部署-ci-cd-流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基于gitlab-docker的前端自动化构建部署-ci-cd-流程","aria-hidden":"true"},"#"),n(" 基于GitLab+docker的前端自动化构建部署(CI/CD)流程")],-1),u={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"什么是ci-cd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是ci-cd","aria-hidden":"true"},"#"),n(" 什么是CI/CD？")],-1),h={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},b=e("h4",{id:"持续集成-ci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#持续集成-ci","aria-hidden":"true"},"#"),n(" 持续集成：CI")],-1),v={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},g=e("h4",{id:"持续部署-cd",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#持续部署-cd","aria-hidden":"true"},"#"),n(" 持续部署：CD")],-1),m=e("br",null,null,-1),_={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"实现原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实现原理","aria-hidden":"true"},"#"),n(" 实现原理")],-1),f=e("strong",null,"rsync",-1),x={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"流程图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),n(" 流程图")],-1),y=e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf006e8565a5~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:""},null,-1),C={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"实现步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实现步骤","aria-hidden":"true"},"#"),n(" 实现步骤")],-1),E=e("p",null,[n("1.首先用docker+nginx部署项目"),e("br"),n(" 2.在gitlab新建的项目的CI/CD配置中填写需要发布到服务器的相关信息"),e("br"),n(" 3.将你所需要发布的项目下新建一个.gitlab-ci.yml文件，让gitlab去执行自动化流程"),e("br"),n(" 4.打包构建，提交代码，触发钩子执行自动化构建发布")],-1),I={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},q=i(`<h3 id="_1-首先用docker-nginx部署项目" tabindex="-1"><a class="header-anchor" href="#_1-首先用docker-nginx部署项目" aria-hidden="true">#</a> 1.首先用docker+nginx部署项目</h3><p>docker下配置nginx部署vue项目步骤：<br> 1.docker pull nginx 下载nginx<br> 2.在/data /nginx（这里的/data /nginx就是服务器上前端静态资源的文件夹）路径下创建html，conf，conf.d三个文件夹，html下放npm run build打包后的静态文件<br> 3.conf下放nginx.conf,conf.d下放default.conf，nginx.conf和default.conf需要自己配置<br> 下面是nginx 模板文件 可以自己根据需要修改<br> nginx default.conf配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen       80;
  server_name  localhost;

  #charset koi8-r;
  #access_log  /var/log/nginx/host.access.log  main;

  location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
  }

}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx nginx.conf配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
  worker_connections  1024;
}
http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;

  log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

  access_log  /var/log/nginx/access.log  main;

  sendfile        on;
  #tcp_nopush     on;

  keepalive_timeout  65;
        gzip on;
        gzip_disable &quot;msie6&quot;;
        gzip_vary on;
        gzip_proxied any;
        gzip_comp_level 1;
        gzip_buffers 16 8k;
        gzip_http_version 1.0;
        gzip_min_length 256;
        gzip_types text/plain text/css
                   application/json application/x-javascript text/xml
                   application/xml application/xml+rss text/javascript application/javascript
                   application/vnd.ms-fontobject application/x-font-ttf font/opentype         image/svg+xml image/x-icon
                   image/jpeg image/gif image/png;


  include /etc/nginx/conf.d/*.conf;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.所有文件创建好之后，执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name *容器名称*
-p 8088:80 -v /data/nginx/html:/usr/share/nginx/html -v
/data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v
/data/nginx/log:/var/log/nginx -d nginx:1.13（镜像名称）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用docker指令操作：<br> --name命名容器，<br> -p映射端口比如8088:80，<br> -v映射当前文件夹到镜像中的文件夹,<br> -d后台运行容器，<br> docker ps -a 查看容器，<br> docker images -a 查看所有镜像，<br> docker rm 容器id 删除容器，<br> docker rmi 镜像id 删除镜像，<br> docker start 容器id 运行容器，<br> docker stop 容器id 停止容器</p>`,8),z=e("strong",null,"到这一步，就先完成了docker+nginx部署前端项目了，接下来是配置自动化构建发布",-1),R={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},S=e("h3",{id:"_2-在gitlab新建的项目的ci-cd配置中填写需要发布到服务器的相关信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-在gitlab新建的项目的ci-cd配置中填写需要发布到服务器的相关信息","aria-hidden":"true"},"#"),n(" 2.在gitlab新建的项目的CI/CD配置中填写需要发布到服务器的相关信息")],-1),P={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},$=e("h4",{id:"_2-1gitlab上项目中ci-cd中的variables变量配置-用在-yml里的-防止代码中泄露服务器信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-1gitlab上项目中ci-cd中的variables变量配置-用在-yml里的-防止代码中泄露服务器信息","aria-hidden":"true"},"#"),n(" 2.1Gitlab上项目中CI/CD中的variables变量配置（用在.yml里的，防止代码中泄露服务器信息）")],-1),O=e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcfea555c7278~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:""},null,-1),w={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},H=i(`<h4 id="_2-2接下来在服务器上操作-配置免密登录" tabindex="-1"><a class="header-anchor" href="#_2-2接下来在服务器上操作-配置免密登录" aria-hidden="true">#</a> 2.2接下来在服务器上操作，配置免密登录</h4><p>生产密钥对: ssh-keygen -t rsa，配置让gitlab服务器和前端代码服务器之间可以免密登录具体免密登录操作如下：<br> 登录服务器，cd .ssh 执行 ssh-keygen -t rsa命令，会生成id_rsa（秘钥）和id_rsa.pub（公钥）两个文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>cd <span class="token punctuation">.</span>ssh
ssh<span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf0070a64b74~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p>`,4),V={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},M=i(`<h4 id="_2-3服务器上用docker安装gitlab-runner" tabindex="-1"><a class="header-anchor" href="#_2-3服务器上用docker安装gitlab-runner" aria-hidden="true">#</a> 2.3服务器上用docker安装gitlab-runner</h4><p>用docker安装gitlab-runner:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker pull gitlab<span class="token operator">/</span>gitlab<span class="token operator">-</span>runner<span class="token operator">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止并删除现有容器：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker stop gitlab<span class="token operator">-</span>runner <span class="token operator">&amp;&amp;</span> docker rm gitlab<span class="token operator">-</span>runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建启动容器：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>docker run <span class="token operator">-</span>d <span class="token operator">--</span>name gitlab<span class="token operator">-</span>runner <span class="token operator">--</span>restart always \\ <span class="token operator">-</span>v <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token punctuation">.</span>sock<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>run<span class="token operator">/</span>docker<span class="token punctuation">.</span>sock \\ <span class="token operator">-</span>v <span class="token operator">/</span>srv<span class="token operator">/</span>gitlab<span class="token operator">-</span>runner<span class="token operator">/</span>config<span class="token operator">:</span><span class="token operator">/</span>etc<span class="token operator">/</span>gitlab<span class="token operator">-</span>runner \\ gitlab<span class="token operator">/</span>gitlab<span class="token operator">-</span>runner<span class="token operator">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs gitlab-runner

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),T={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},A=i(`<h4 id="_2-4服务器上用docker注册gitlab-runner" tabindex="-1"><a class="header-anchor" href="#_2-4服务器上用docker注册gitlab-runner" aria-hidden="true">#</a> 2.4服务器上用docker注册gitlab-runner</h4><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcfbf827653ce~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt=""> docker注册runner</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --rm -t -i -v /srv/gitlab-runner/config:/etc/gitlab-runner gitlab/gitlab-runner register

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),L=e("br",null,null,-1),G={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgitlab.com",title:"https://gitlab.com",target:"_blank",rel:"noopener noreferrer"},U={href:"https://link.juejin.cn/?target=https%3A%2F%2Fgitlab.com",title:"https://gitlab.com",target:"_blank",rel:"noopener noreferrer"},B=e("br",null,null,-1),K=e("br",null,null,-1),N=e("br",null,null,-1),F=e("br",null,null,-1),Y=e("br",null,null,-1),J=e("br",null,null,-1),Q=e("br",null,null,-1),X=e("br",null,null,-1),W=e("br",null,null,-1),Z=e("br",null,null,-1),ee=e("br",null,null,-1),ne=e("strong",null,"到这一步服务器上就配置完成了",-1),ae=e("br",null,null,-1),se=e("strong",null,"想要看自己的gitlab-runner启动没有，可以输入docker ps -a查看",-1),ie=e("br",null,null,-1),re=e("strong",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf0074db76d0~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:"image.png"})],-1),te={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},le=e("h3",{id:"_3-将你所需要发布的项目下新建一个-gitlab-ci-yml文件-让gitlab去执行自动化流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-将你所需要发布的项目下新建一个-gitlab-ci-yml文件-让gitlab去执行自动化流程","aria-hidden":"true"},"#"),n(" 3.将你所需要发布的项目下新建一个.gitlab-ci.yml文件，让gitlab去执行自动化流程")],-1),oe=e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf007679f2ad~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:""},null,-1),de={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},ce=i(`<h4 id="_3-1gitlab-ci-yml文件" tabindex="-1"><a class="header-anchor" href="#_3-1gitlab-ci-yml文件" aria-hidden="true">#</a> 3.1gitlab-ci.yml文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//做缓存的
cache:
  key: \${CI_PROJECT_NAME}
  paths:
    - node_modules/
//测试
# test_e2e:
#   image: cypress/browsers:chrome67
#   stage: test
#   script:
#     - npm i
#     - npm run test:e2e -- --headless --record --key b2a22185-8eeb-4f0e-9b21-2d61f769d8c7
#   only:
#     - master
//dev环境构建
dev:build:
  image: node
  stage: build
  script:
    - yarn
    - yarn build:dev
  only:
    - dev
  tags:
    - eye-runner
  artifacts:
    expire_in: 1 week
    paths:
      - dist //项目打包后的文件夹
//dev环境发布
dev:deploy:
  image: alpine:3.7
  stage: deploy
  script:
    - echo &quot;http://mirrors.aliyun.com/alpine/v3.7/main/&quot; &gt; /etc/apk/repositories
    - apk add --no-cache rsync openssh
    - mkdir -p ~/.ssh
    - echo &quot;$SSH_KEY_DEMO_PRIVATE&quot; &gt;&gt; ~/.ssh/id_rsa
    - echo &quot;$SSH_KEY_DEMO_PUB&quot; &gt;&gt; ~/.ssh/id_rsa.pub
    - chmod 600 ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa.pub
    - echo -e &quot;Host *\\n\\t StrictHostKeyChecking no \\n\\n&quot; &gt; ~/.ssh/config
    - rsync -rav --delete ./dist/ &quot;$SERVER_DEMO_HOST:$SERVER_DEMO_PATH&quot;//同步打包后的文件夹里的内容到nginx指定的静态资源文件夹
  only:
    - dev
  tags:
    - eye-runner


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),ue={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},pe=e("h4",{id:"_3-2变量说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-2变量说明","aria-hidden":"true"},"#"),n(" 3.2变量说明")],-1),he=e("br",null,null,-1),be=e("br",null,null,-1),ve=e("br",null,null,-1),ge={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},me=e("h4",{id:"_3-3注意",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-3注意","aria-hidden":"true"},"#"),n(" 3.3注意")],-1),_e=e("p",null,"在webpack项目中配置导出的文件名为你需要同步的文件夹的名称，并且访问路径按需为相对路径，或者绝对路径，具体看项目需求。上面的./dist/就是我们项目中的打包后生成的文件夹",-1),ke=e("strong",null,"到此我们就配置完成了，提交代码到指定分支，触发CI/CD",-1),fe={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},xe=e("h3",{id:"_4-打包构建-提交代码-触发钩子执行自动化构建发布",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-打包构建-提交代码-触发钩子执行自动化构建发布","aria-hidden":"true"},"#"),n(" 4.打包构建，提交代码，触发钩子执行自动化构建发布")],-1),je={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},ye=e("h4",{id:"提交代码触发ci-cd流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#提交代码触发ci-cd流程","aria-hidden":"true"},"#"),n(" 提交代码触发CI/CD流程")],-1),Ce={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},De=e("h3",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#"),n(),e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf009e19906e~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:"image.png"})],-1),Ee=e("p",null,[n("点击状态或者阶段都可以进入构建发布详情页面查看内容"),e("br"),e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf00bc62d806~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:"image.png"})],-1),Ie={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},qe=e("h4",{id:"构建-build",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建-build","aria-hidden":"true"},"#"),n(" 构建：build")],-1),ze=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf00c633a522~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:"image.png"})],-1),Re={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},Se=e("h4",{id:"发布-deploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#发布-deploy","aria-hidden":"true"},"#"),n(" 发布：deploy")],-1),Pe=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/19/16fbcf00d45c09e8~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image",alt:"image.png"})],-1),$e=e("p",null,"至此，大功告成，妈妈再也不用担心我发布线上代码耗费时间和出错了",-1),Oe={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"},we=e("h2",{id:"自动化构建发布-ci-cd-的优势",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动化构建发布-ci-cd-的优势","aria-hidden":"true"},"#"),n(" 自动化构建发布（CI/CD）的优势")],-1),He=e("p",null,"项目建立仅需配置一次，即可实现自动化部署，docker环境与宿主环境不会发生环境上的冲突，gitlab控制权限，发布过程更为安全，添加自动化测试，项目上线更为省心。",-1),Ve={href:"https://link.juejin.cn/?target=",target:"_blank",rel:"noopener noreferrer"};function Me(Te,Ae){const a=o("ExternalLinkIcon");return t(),l("div",null,[c,e("p",null,[e("a",u,[s(a)])]),p,e("p",null,[n("CICD 是 持续集成（Continuous Integration）和持续部署（Continuous Deployment）简称。指在开发过程中自动执行一系列脚本来减低开发引入 bug 的概率，在新代码从开发到部署的过程中，尽量减少人工的介入。"),e("a",h,[s(a)])]),b,e("p",null,[n("持续集成指在和向远程仓库 push 代码后，在这次提交合并入主分支前进行一系列测试，构建等流程。假设现在有个应用的代码存储在 gitlab 上，每天开发者都 push 很多次提交，针对每次 push，你可以创建一系列脚本进行自动测试，降低往应用里引入错误的概率。这就是持续集成，它可应用在包括开发分支在内的多个分支上。"),e("a",v,[s(a)])]),g,e("p",null,[n("持续部署在持续集成的基础上更进一步，指将推送指仓库默认分支的部署至产品环境。如果这部分需要手动触发，这就是一个持续交付（Continuous Delivery）环节。"),m,n(" Gitlab 内置了 CICD 工具，不需要使用第三方工具，所以我们使用gitlab-ci以及gitlab-runner来完成我们的前端自动化构建部署"),e("a",_,[s(a)])]),k,e("p",null,[n("前端发布流程基于gitlab-ci以及gitlab-runner，runner运行环境目前为docker，保证项目之间的开发版本不会有冲突，打包过后的前端包文件，通过"),f,n("同步到静态资源文件中，通过监听master（生产环境）dev（开发环境）变动自动执行发布流程。"),e("a",x,[s(a)])]),j,e("p",null,[y,e("a",C,[s(a)])]),D,E,e("p",null,[e("a",I,[s(a)])]),q,e("p",null,[z,e("a",R,[s(a)])]),S,e("p",null,[e("a",P,[s(a)])]),$,e("p",null,[O,e("a",w,[s(a)])]),H,e("p",null,[n("将公钥id_rsa.pub中的内容copy到authorized_keys中（做免密登录）"),e("a",V,[s(a)])]),M,e("p",null,[e("a",T,[s(a)])]),A,e("p",null,[n("接下来会提示你进行一系列的操作"),L,n(" 1.Please enter the gitlab-ci coordinator URL (e.g. "),e("a",G,[n("gitlab.com"),s(a)]),n(" ) "),e("a",U,[n("gitlab.com"),s(a)]),B,n(" 输入您的GitLab实例URL：（gitlab中的CI/CD中的runner里面有）"),K,n(" 2.Please enter the gitlab-ci token for this runner xxx"),N,n(" 输入您获得的令牌来注册token：（gitlab中的CI/CD中的runner里面有）"),F,n(" 3.Please enter the gitlab-ci description for this runner [hostname] my-runner"),Y,n(" 输入Runner的描述，稍后可以在GitLab的UI中进行更改："),J,n(" 4.Please enter the gitlab-ci tags for this runner (comma separated): my-tag,another-tag"),Q,n(" 输入与Runner有关的标签，稍后可以在GitLab的UI中进行更改："),X,n(" 5.Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell: docker"),W,n(" 6.输入Runner执行者："),Z,n(" Please enter the Docker image (eg. ruby:2.1): alpine:latest"),ee,n(" 如果您选择Docker作为执行程序，则会要求您为未在以下项目中定义一个的项目使用默认映像：这里就输入alpine:latest就行了")]),e("p",null,[ne,ae,se,ie,re,e("a",te,[s(a)])]),le,e("p",null,[oe,e("a",de,[s(a)])]),ce,e("p",null,[n("上述为dev环境配置，生产环境同理配置即可"),e("a",ue,[s(a)])]),pe,e("p",null,[n("SERVER_DEMO_HOST：目标CICD服务器IP地址"),he,n(" SERVER_DEMO_PATH：服务器上nginx指向的静态资源目录"),be,n(" SSH_KEY_DEMO_PRIVATE： 服务器私钥"),ve,n(" SSH_KEY_DEMO_PUB：服务器公钥"),e("a",ge,[s(a)])]),me,_e,e("p",null,[ke,e("a",fe,[s(a)])]),xe,e("p",null,[e("a",je,[s(a)])]),ye,e("p",null,[n("然后在gitlab项目中的CI/CD流水线中能看到自己的刚刚触发的CI/CD任务，如下图所示"),e("a",Ce,[s(a)])]),De,Ee,e("p",null,[e("a",Ie,[s(a)])]),qe,ze,e("p",null,[e("a",Re,[s(a)])]),Se,Pe,$e,e("p",null,[e("a",Oe,[s(a)])]),we,He,e("p",null,[e("a",Ve,[s(a)])])])}const Ge=r(d,[["render",Me],["__file","index.html.vue"]]);export{Ge as default};
