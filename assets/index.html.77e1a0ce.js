import{_ as l,z as d,A as t,X as e,C as n,T as a,a6 as s,Q as r}from"./framework.fef63301.js";const c={},u=s('<h1 id="gitlab-ci-从入门到实践" tabindex="-1"><a class="header-anchor" href="#gitlab-ci-从入门到实践" aria-hidden="true">#</a> GitLab CI 从入门到实践</h1><h2 id="一、gitlab-ci-是什么" tabindex="-1"><a class="header-anchor" href="#一、gitlab-ci-是什么" aria-hidden="true">#</a> 一、Gitlab CI 是什么？</h2><p>现代持续的软件开发导致了开发者需要持续的build, test 和 deploy 重复的代码更改，这些重复的过程非常的繁琐，但是对保证代码持续更新迭代来说又非常的重要。此时便需要一种非人为手动的方法来帮助我们自动完成这些重复的工作。</p><p>这个自动完成工作的理念被称为CI/CD. 在这里Gitlab CI/CD就是Gitlab官方发布的一种自动流水线帮助开发者完成重复性工作的一个服务。</p><p>比如字节某内部工具E*** CI 则是在Gitlab CI 和 Codebase CI的基础上改进，增加更细节的使用场景分类，对monorepo支持更加的友好。</p><h2 id="二、如何使用" tabindex="-1"><a class="header-anchor" href="#二、如何使用" aria-hidden="true">#</a> 二、如何使用？</h2><h3 id="gitlab-ci的使用主要需要2大步骤" tabindex="-1"><a class="header-anchor" href="#gitlab-ci的使用主要需要2大步骤" aria-hidden="true">#</a> Gitlab CI的使用主要需要2大步骤</h3><h3 id="步骤一-配置runner" tabindex="-1"><a class="header-anchor" href="#步骤一-配置runner" aria-hidden="true">#</a> 步骤一：配置runner</h3><blockquote><p>我们可以简单的把Gitlab runner给理解成<code>.gitlab-ci.yml</code> 文件内容的执行者，<code>.gitlab-ci.yml</code> 告诉了Gitlab runner去做什么。</p><p>Gitlab runner不是一个配置项，它是需要专门部署的，比如用docker部署一个runner镜像到可以连接内网的容器。也可以使用公司内配好的shared runners.</p></blockquote><p>使用公共的runner，或者自己创建一个runner</p><ol><li><h4 id="使用shared-runner" tabindex="-1"><a class="header-anchor" href="#使用shared-runner" aria-hidden="true">#</a> 使用shared runner</h4></li></ol><p>无需多余操作，请确保shared runner选项被enable了即可<strong>直接使用</strong>公共runner。（如下）</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/06f534c890984ad7a97475bca98e2d9c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><ol start="2"><li><h4 id="自己配置runner" tabindex="-1"><a class="header-anchor" href="#自己配置runner" aria-hidden="true">#</a> 自己配置runner</h4></li></ol>',14),o={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Frunner%2Finstall%2Fdocker.html",title:"https://docs.gitlab.com/runner/install/docker.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Frunner%2Fregister%2Findex.html%23docker",title:"https://docs.gitlab.com/runner/register/index.html#docker",target:"_blank",rel:"noopener noreferrer"},b=s(`<h4 id="a-安装docker" tabindex="-1"><a class="header-anchor" href="#a-安装docker" aria-hidden="true">#</a> A. 安装docker</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>brew install <span class="token operator">--</span>cask docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="b-启动gitlab-runner-container" tabindex="-1"><a class="header-anchor" href="#b-启动gitlab-runner-container" aria-hidden="true">#</a> B. 启动Gitlab runner container</h4><p>起一个docker container来执行Gitlab Runner镜像</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  docker run <span class="token punctuation">-</span>d <span class="token punctuation">-</span><span class="token punctuation">-</span>name gitlab<span class="token punctuation">-</span>runner <span class="token punctuation">-</span><span class="token punctuation">-</span>restart always \\
   <span class="token punctuation">-</span>v /Users/Shared/gitlab<span class="token punctuation">-</span>runner/config<span class="token punctuation">:</span>/etc/gitlab<span class="token punctuation">-</span>runner \\
   <span class="token punctuation">-</span>v /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock \\
   gitlab/gitlab<span class="token punctuation">-</span>runner<span class="token punctuation">:</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dca7cb3c3a8e4f5f8de42d872f95bf1e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p><strong>Note</strong>: macOS上面的共享文件夹要设置为<code>/Users/Shared/</code>而不是<code>/srv</code></p><h4 id="c-注册runner到gitlab" tabindex="-1"><a class="header-anchor" href="#c-注册runner到gitlab" aria-hidden="true">#</a> C. 注册runner到Gitlab</h4><p>只用docker起一个gitlab runner不能将我们当前使用的gitlab repository和上一步创建的runner进行关联。在此需要将其进行相互关联，将runner注册到我们的gitlab repository</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/801f5c22e20b4adfbd57193dbe25d03d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>使用上图得到的URL和token去替换下面指令的<code>--url</code>和<code>--registration-token</code></p><p><code>--tag-list</code> 为当前runner的标签，在配置流水线job的时候使用，在此可随意配置不同的标签名</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>docker run <span class="token punctuation">-</span><span class="token punctuation">-</span>rm <span class="token punctuation">-</span>v /Users/Shared/gitlab<span class="token punctuation">-</span>runner/config<span class="token punctuation">:</span>/etc/gitlab<span class="token punctuation">-</span>runner gitlab/gitlab<span class="token punctuation">-</span>runner register \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>non<span class="token punctuation">-</span>interactive \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>executor &quot;docker&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>docker<span class="token punctuation">-</span>image alpine<span class="token punctuation">:</span>latest \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>url &quot;https<span class="token punctuation">:</span>//gitlab.com/&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>registration<span class="token punctuation">-</span>token &quot;wc<span class="token punctuation">-</span>Reg7qUpGRB4Lw3q9Y&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>description &quot;gitlab—cicd<span class="token punctuation">-</span>runner&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>tag<span class="token punctuation">-</span>list &quot;yehanli<span class="token punctuation">,</span>liyehan&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>run<span class="token punctuation">-</span>untagged=&quot;true&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>locked=&quot;false&quot; \\
 <span class="token punctuation">-</span><span class="token punctuation">-</span>access<span class="token punctuation">-</span>level=&quot;not_protected&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eae0169c8551445ca5e0b055dba6df3c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>至此，Gitlab runner和配置均已成功，打开setting/CICD页面可以看到如下提示：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03fac75871da4cb687f96734e6ab2da3~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>在docker中我们也可以看到正在运行的runner(如下):</p><p>暂时无法在飞书文档外展示此内容</p><h3 id="步骤二-创建-gitlab-ci-yml文件" tabindex="-1"><a class="header-anchor" href="#步骤二-创建-gitlab-ci-yml文件" aria-hidden="true">#</a> 步骤二：创建<code>.gitlab-ci.yml</code>文件</h3><hr><p>在mono repo的根目录创建一个文件, 命名为<code>.gitlab-ci.yml</code>, 并将其push到master分支。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .gitlab-ci.yml
git commit -m &quot;Add .gitlab-ci.yml&quot;
git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note:</strong></p><ul><li>在较低gitlab版本(比如11.4)，如果在master主分支下没有<code>.gitlab-ci.yml</code>的话，在Gitlab左侧的导航栏不会有Gitlab Runner这个tab。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26b56339a1554678905efc940457c6c5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><ul><li>在项目的setting/CI/CD/General pipelines中，我们可以自定义设置CI设置文件的路径，默认如下</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c48c917d6d8c4cc8a41bf7d0ad635dbf~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h2 id="三、如何编写-gitlab-ci-yml文件" tabindex="-1"><a class="header-anchor" href="#三、如何编写-gitlab-ci-yml文件" aria-hidden="true">#</a> 三、如何编写.gitlab-ci.yml文件？</h2><p>首先，让我们先来熟悉下yaml的常见写法，以及对比下它与json有什么不同。</p>`,29),p={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.ansible.com%2Fansible%2Flatest%2Freference_appendices%2FYAMLSyntax.html",title:"https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html",target:"_blank",rel:"noopener noreferrer"},m=s(`<h3 id="yaml语法" tabindex="-1"><a class="header-anchor" href="#yaml语法" aria-hidden="true">#</a> YAML语法</h3><h4 id="数组写法" tabindex="-1"><a class="header-anchor" href="#数组写法" aria-hidden="true">#</a> 数组写法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;array&quot;: [&quot;red&quot;, &quot;blue&quot;, &quot;yellow&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转化为yaml为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>array:
  - red
  - blue
  - yellow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对象写法" tabindex="-1"><a class="header-anchor" href="#对象写法" aria-hidden="true">#</a> 对象写法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;student1&quot;: {
    &quot;name&quot;: &quot;小明&quot;
  },
  &quot;array&quot;: [&quot;red&quot;, &quot;blue&quot;, &quot;yellow&quot;],
  &quot;student2&quot;: {
    &quot;name&quot;: &quot;小明&quot;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转化为yaml为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 我是注释
student1:
  name: 小明
array:
  - red
  - blue
  - yellow
student2:
  name: 小明

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>yaml中不像json那样无法注释，我们可以用<code>#</code>进行注释</li></ul><h3 id="流水线环节梳理" tabindex="-1"><a class="header-anchor" href="#流水线环节梳理" aria-hidden="true">#</a> 流水线环节梳理</h3><p>流水线的流程，根据配置的.gitlab-ci.yml文件可以分为如下几个环节：</p><ol><li><p>在单个的流水线任务执行之前进行配置</p></li><li><p>定义单个流水线任务(job)，并对此任务进行针对配置</p></li></ol><h3 id="结构图" tabindex="-1"><a class="header-anchor" href="#结构图" aria-hidden="true">#</a> 结构图</h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/733d1e7793a44d97bbb402d7e4a83c48~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>单个流水线任务的形式可以参考如下示例，具体字段释义可以暂时忽略，会在之后详解：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 这个my_job的任务名是可以自定义起的</span>
<span class="token key atrule">my_job</span><span class="token punctuation">:</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master    
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yehanli
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &#39;job ========= 完成&#39;
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">retry</span><span class="token punctuation">:</span> <span class="token number">2</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab-ci-关键字" tabindex="-1"><a class="header-anchor" href="#gitlab-ci-关键字" aria-hidden="true">#</a> Gitlab-CI 关键字</h2>`,18),h=e("p",null,"Gitlab CI的关键字有很多，但实际常用的只有较小一部分。在此部分会对常用关键字进行详解。",-1),g={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fyaml%2F",title:"https://docs.gitlab.com/ee/ci/yaml/",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,".gitlab-ci.yml",-1),k={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fyaml%2F",title:"https://docs.gitlab.com/ee/ci/yaml/",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>首先让我们先来介绍下关键字，然后再看一份完整的配置demo进行详解。</p><h3 id="script" tabindex="-1"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h3><p>需要被运行的脚本。以数组形式配置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipeline_job:
  ......
  script:
    - cd &lt;文件夹目录路径&gt;
    - npm install
    - npm build
  ......

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="before-script" tabindex="-1"><a class="header-anchor" href="#before-script" aria-hidden="true">#</a> before_script</h3><p>在所有的流水线任务执行之前需要执行的脚本，或者单个流水线任务中的script执行之前执行某些script</p><h3 id="variables变量" tabindex="-1"><a class="header-anchor" href="#variables变量" aria-hidden="true">#</a> variables变量</h3><p>在Gitlab-CI中，变量大致可分为三类：</p>`,8),y=e("p",null,[n("Gitlab给我们预先定义的变量，比如"),e("code",null,"CI_COMMIT_BRANCH"),n(".")],-1),x={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Fpredefined_variables.html",title:"https://docs.gitlab.com/ee/ci/variables/predefined_variables.html",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,[e("p",null,"Setting => Gitlab CI/CD => variables中定义的变量")],-1),q=e("p",null,[e("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a79a7bf40eb64a4283eaeae26649b5ca~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image",alt:"图片"})],-1),F={start:"3"},I={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},C={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},R={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},G={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},E={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},w={href:"https://link.juejin.cn/?target=https%3A%2F%2Fdocs.gitlab.com%2Fee%2Fci%2Fvariables%2Findex.html%23create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",title:"https://docs.gitlab.com/ee/ci/variables/index.html#create-a-custom-cicd-variable-in-the-gitlab-ciyml-file",target:"_blank",rel:"noopener noreferrer"},M=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variables:
  TEST_VAR: &quot;All jobs can use this variable&#39;s value&quot;

job1:
  variables:
    TEST_VAR_JOB: &quot;Only job1 can use this variable&#39;s value&quot;
  script:
    - echo &quot;$TEST_VAR&quot;
  ......

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p>CI流水线运行环境的docker镜像(任何相关的代码运行环境镜像皆可)，比如字节某内部工具e***的镜像，里面装了nvm管理器.</p><ul><li>比较常用的有：node, python, java, etc...</li></ul><h3 id="stages" tabindex="-1"><a class="header-anchor" href="#stages" aria-hidden="true">#</a> stages</h3><p>Gitlab CI允许我们进行自定义的流水线阶段配置，我们可以将自己的流水线自我划分为若干<code>stages</code>，然后在不同的stage来做不同的事。（稍后会有示例）</p><p>stages会依次执行，如果前一个stage的任务没有运行完，后面的stage不会被触发。</p><p>一旦有一个stage中的任务fail掉了，下一个stage的任务便不会执行。如果当前stage定义了多个任务，那么其中一个任务失败，另外一个任务还是会被继续执行。</p><p>以下为自定义的stages：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stages:
  - first_stage
  - second_stage
  - third_stage
  - fourth_stage
  - fifth_stage

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有自定义stages，那么默认的stages为<code>.pre =&gt; build =&gt; test =&gt; deploy =&gt; .post</code></p><p>(自定义stages会<strong>重写</strong>除了<code>.pre</code>, <code>.post</code>之外所有的默认stages)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stages:
  - .pre # 执行在所有的stages之前
  - build
  - test
  - deploy
  - .post # 执行在所有的stages之后

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>: build 中如果定义多个jobs，这些jobs是并行执行的，别的stage中的为依次执行。</p><h3 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> stage</h3><p>stage为stages的一个子项，在我们自定义单个流水线任务时可以配置</p><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache" aria-hidden="true">#</a> cache</h3><p>缓存多个流水线任务之间共用的文件，目录， etc...</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cache:
  key: cache-node-modules
  # 在这里写出需要缓存的文件的路径，在此为node_modules
  paths:
    - node_modules

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retry" tabindex="-1"><a class="header-anchor" href="#retry" aria-hidden="true">#</a> retry</h3><p>一个job可以被重新执行的最大数量。必须是个正整数, 0-2, 2为最大值</p><ul><li>when可设置在特定失败原因的情况下执行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>job:
  script: rspec
  retry:
    max: 2
    when: runner_system_failure

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="only-except" tabindex="-1"><a class="header-anchor" href="#only-except" aria-hidden="true">#</a> only &amp; except</h3><ul><li><p>only: 设置流水线任务执行时机</p></li><li><p>except: 设置流水线任务不执行时机</p></li></ul><p>可配置选项（常用的几个）：</p><table><thead><tr><th>&lt;分支名&gt;</th><th>特定分支change的时候触发</th></tr></thead><tbody><tr><td>pushes</td><td>git push时触发，适用于所有分支</td></tr><tr><td>merge_requests</td><td>MR被创建时触发，适用于所有分支</td></tr><tr><td>web</td><td>手动在Gitlab Runner/pipeline里面点击run pipeline时触发<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a8ad4a548944afae78c11f9a4b3b68~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></td></tr></tbody></table><p>配置branch名称来规定触发任务的分支(如下)，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>myjob:
  only:
    - master
# 以上写法等同于
myjob:
  only:
    variables:
    # $CI_COMMIT_REF_NAME是一个gitlab的预设变量，代表当前commit给哪个branch上了
    - $CI_COMMIT_REF_NAME == &quot;master&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rules-if" tabindex="-1"><a class="header-anchor" href="#rules-if" aria-hidden="true">#</a> rules:if</h3><p>此字段可以在单个流水线job或者workflow字段下进行配置。</p><p><code>rules</code>关键词下可以进行if语句配置，如果if满足的话可执行某些自定义配置(会在流水线任务demo2中和<code>workflow</code>配置中展示如何使用)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rules:
  - if: $CI_COMMIT_REF_NAME =~ /feature/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>: <code>only &amp; except</code>和<code>rules:if</code>都是用来决定单个job执行时机的，在配置时只能存在一个，否则会报错。</p><h3 id="workflow" tabindex="-1"><a class="header-anchor" href="#workflow" aria-hidden="true">#</a> workflow</h3><p>需要和<code>rules</code>配合用来控制整个pipeline的行为，比如整个流水线执行与否。整个流水线正常运行的前提是其<code>rules</code>配置中的<code>if</code>语句至少需要触发一个.</p><p>在各个流水线任务的外层进行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>variables:
  IS_FEATURE: &quot;false&quot;
workflow:
  rules:
    - if: $CI_COMMIT_REF_NAME =~ /feature/
      variables:
        IS_FEATURE: &quot;true&quot;
    - when: always # Run the pipeline in other cases

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="when" tabindex="-1"><a class="header-anchor" href="#when" aria-hidden="true">#</a> when</h3><p>这个关键字和stage需要配合使用。如果一个stage fail掉了，那么我们应该期待下个stage怎么办呢？</p><p>(When to run a job?)</p><ul><li><p><code>on_success</code>(default): 所有之前stage的任务都执行成功了才执行当前stage的任务，或者之前fail的任务有配置了<code>allow_failure: true</code></p></li><li><p><code>on_failure</code> ：只有在之前的流水线任务有至少一次的fail之下才执行当前任务。</p></li><li><p><code>always</code>：无论之前的stage的流水线的任务状态如何，当前的任务都会触发。</p></li><li><p><code>never</code>：不运行当前任务</p></li><li><p><code>manual</code>：流水线手动触发,点击play，如下图</p></li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90db4cb0cc4a4cc5a1df5229317d30bc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><ul><li><code>delayed</code>：延迟一段时间执行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timed rollout 10%:
  stage: deploy
  script: echo &#39;Rolling out 10% ...&#39;
  when: delayed
  # 在之前的stage执行后30mins后再运行这个任务
  # 时间单位可以是seconds，minutes，day, week
  start_in: 30 minutes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags" aria-hidden="true">#</a> tags</h3><p>这个是设定Gitlab 在执行脚本时使用哪个runner</p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><p>配置时有些关键字比如<code>workflow</code>，<code>rules</code>什么的会显示报错 <code>XXX config conatins unknown keys.</code></p><p>这个是因为公司的Gitlab版本较旧，Gitlab 12.5之后才支持这些配置。</p><p><strong>e.g:</strong></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d7d5d8da67a44668a93b8261d19fb77~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p><code>only</code>中的<code>merge_requests</code>配置在11.6的版本后才支持，所以有些公司的Gitlab版本还是不支持 😦</p><h3 id="模块化写法" tabindex="-1"><a class="header-anchor" href="#模块化写法" aria-hidden="true">#</a> 模块化写法</h3><blockquote><p>随着流水线任务的变多，把所有的任务都写在.gitlab-ci.yml文件中会显得很臃肿</p><p>解决方法是拆分多个任务到不同的模块</p></blockquote><p>在<code>.gitlab.yml</code>文件中按照如下写法即可引入不同的yml文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include:
  - &#39;/yml/job_1_install.yml&#39;
  - &#39;/yml/job_2_build.yml&#39;
  - &#39;/yml/job_3_deploy.yml&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/236eb1e2df804ee1810634af7062838f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h2 id="四、demo配置-运行示例" tabindex="-1"><a class="header-anchor" href="#四、demo配置-运行示例" aria-hidden="true">#</a> 四、Demo配置+运行示例</h2><blockquote><p>下面让我们来配合运行示例看一看文件配置是如何生效的</p></blockquote><h3 id="流水线demo1-基础用法" tabindex="-1"><a class="header-anchor" href="#流水线demo1-基础用法" aria-hidden="true">#</a> 流水线Demo1(基础用法)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .gitlab-ci.yml
# 镜像为node的环境镜像，如果用的是别的环境可以更改为别的项目环境的镜像
image: node:latest

# 自定义stages
stages:
  - first_stage
  - second_stage
  - third_stage
  - fourth_stage
  - fifth_stage
  
# 自定义任务1
job_1_push:
  only:
    - pushes
  # 设置使用fe tags标签的shared runner
  tags:
    - yehanli
  # 当前任务需要执行的脚本
  script:
    - echo &#39;job1 ========= 完成&#39;
  # 设置当前任务的stage
  stage: first_stage
  
# 自定义任务2
job_2_push:
  only:
    - pushes
  tags:
    - yehanli
  script:
    - echo &#39;job2 ========= 完成&#39;
  stage: third_stage
# 自定义任务3
job_3_push:
  only:
    - pushes
  tags:
    - yehanli
  script:
    - echo &#39;job3 ========= 完成&#39;
  stage: fourth_stage
  # 设置当前任务为手动触发
  when: manual
  
# 自定义任务4
job_4_push:
  only:
    - pushes
    - tags
  tags:
    - yehanli
  script:
    - echo &#39;job4 ========= 完成&#39;
  stage: fourth_stage
  when: always
 
# 自定义任务5
job_5_web:
  only:
  # 设置为点击run pipeline时触发，流水线不自动触发
    - web
  tags:
    - yehanli
  script:
    - echo &#39;job5 ========= 完成&#39;
  stage: fifth_stage

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f65972ca1da43ed8c58de8ce8758b2d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>设置为手动执行的job3需要我们手动流水线点击进行执行。</p><p>如下为前4个jobs运行输出结果(点击上图的各个jobs即可看到下图输出)</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ebf004287d74f29978aeee195c97b6b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f34116649be4967bee739b9e84c69b1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/30e47eab685e4e25a5c1719bd2d28256~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e081e1f01fd4fbebf10e6a7ea8092be~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>如设想的一样，所有的jobs都按照设定执行了任务。</p><p>如图所示，我们没有定义second_stage的任务，那么默认就会跳过，按照成功处理</p><p>job5可以按照如下方式触发：</p><ol><li>pipeline界面点击run pipeline</li></ol><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61c54185717e404aa3fce26c74b9ef15~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><ol start="2"><li>选择branch，然后再点击run pipeline</li></ol><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/044bb49201b04553876e03475555a57e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>以下为输出结果</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e39062d764d40ba9987f355de90a19b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11b3695b7eef46209db50273d0c56cd4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><h3 id="流水线demo2-详细示例" tabindex="-1"><a class="header-anchor" href="#流水线demo2-详细示例" aria-hidden="true">#</a> 流水线Demo2(详细示例)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># .gitlab-ci.yml
image: node:latest
# # 在运行所有任务之前执行如下脚本
before_script:
  - echo &#39;====== 在所有jobs之前进行执行 =========&#39;

variables:
  IS_EXPERIENCING_MERGING: &quot;false&quot;
  IS_ON_MYBRANCH: &quot;false&quot;

workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == &quot;merge_request_event&quot;
      variables:
        IS_EXPERIENCING_MERGING: &quot;true&quot;
    - if: $CI_COMMIT_REF_NAME =~ /myBranch/
      variables:
        IS_ON_MYBRANCH: &quot;true&quot;
    - if: $CI_COMMIT_REF_NAME =~ /.*/

cache:
  key: cache-node-modules
  # 在这里写出需要缓存的文件的路径，在此为node_modules
  paths:
    - node_modules
    
# 自定义stages
stages:
  - first_stage
  - second_stage
  - third_stage
  - fourth_stage
  - fifth_stage

include:
  - &#39;/yml/job_1_install.yml&#39;
  - &#39;/yml/job_2_build.yml&#39;
  - &#39;/yml/job_3_deploy.yml&#39;
  - &#39;/yml/job_4_mybranch.yml&#39;
  - &#39;/yml/job_5_beforeMR.yml&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;/yml/job_1_install.yml&#39;
# install 阶段
job_1_install:
  only:
    - master
  tags:
    - yehanli
  before_script:
    - echo &#39;========== job1 的script之前执行 ==========&#39;
    - npm install
  script:
    - echo &#39;job1 ========= 完成&#39;
  stage: first_stage
  # 最多失败重试次数为3次
  retry: 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;/yml/job_2_build.yml&#39;
# build 阶段
job_2_build:
  only:
    - master
  tags:
    - yehanli
  script:
    - npm run build
    - echo &#39;job2 ========= 完成&#39;
  stage: second_stage
  retry: 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;/yml/job_3_deploy.yml&#39;
# deploy 阶段
job_3_deploy:
  image: docker
  only:
    - master
  tags:
    - yehanli
  script:
    - docker build -t reactimages .
    - if [ $(docker ps -aq --filter name=react-container) ]; then docker rm -f react-container; fi
    - docker run -d -p 8000:80 --name react-container reactimages
    - echo &#39;job3 ========= 完成&#39;
    
  stage: third_stage
  when: always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;/yml/job_4_mybranch.yml&#39;
job_4_mybranch:
  only:
    - myBranch
  tags:
    - yehanli
  script:
    - echo &#39;is it on myBranch?&#39; $IS_ON_MYBRANCH
    - echo &#39;job4 ========= 完成&#39;
  stage: fourth_stage
  retry: 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># &#39;/yml/job_5_beforeMR.yml&#39;
job_5_afterMR:
  rules:
    - if: &#39;$CI_COMMIT_BRANCH == &quot;master&quot;&#39; 
  tags:
    - yehanli
  script:
      - echo &#39;Is experiencing merging?&#39; $IS_EXPERIENCING_MERGING
      - echo &#39;========== job_5_afterMR 完成 ===========&#39;
  stage: fifth_stage
  retry: 2

job_5_beforeMR:
  rules:
    - if: &#39;$CI_MERGE_REQUEST_TARGET_BRANCH_NAME == &quot;master&quot;&#39;
  tags:
    - yehanli
  script:
      - echo &#39;Is experiencing before-merge?&#39; $IS_EXPERIENCING_MERGING
      - echo &#39;========== job_5_beforeMR 完成 ===========&#39;

  stage: fifth_stage
  retry: 2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># pull 官方的镜像，重命名为builder
FROM node:latest as builder
# 设置工作目录为/app
WORKDIR /app
# 按照package.json来安装依赖
COPY package.json ./
COPY package-lock.json ./
RUN npm install --registry=https://bnpm.byted.org
# 加入/app下
COPY . ./
# build一下
RUN npm run build
# 将 /app/dist dir 放入 /nginx/html dir
# Nginx是一款轻量级的Web服务器
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,85);function A(N,S){const i=r("ExternalLinkIcon");return d(),t("div",null,[u,e("blockquote",null,[e("p",null,[n("部署Gitlab runner官方文档："),e("a",o,[n("Run GitLab Runner in a container | GitLab"),a(i)])]),e("p",null,[n("关联runner到gitlab官方文档："),e("a",v,[n("Registering runners | GitLab"),a(i)])])]),b,e("p",null,[n("Yaml Syntax写法详情具体请见 => "),e("a",p,[n("YAML Syntax ‒ Ansible Documentation"),a(i)])]),m,e("blockquote",null,[h,e("p",null,[n("如果需要特殊配置可参考关键字文档=> "),e("a",g,[n("Keyword reference for the "),f,n(" file |"),a(i)]),n(),e("a",k,[n("GitLab"),a(i)])])]),_,e("ol",null,[e("li",null,[y,e("ol",null,[e("li",null,[e("a",x,[n("Predefined variables reference | GitLab"),a(i)])])])]),j]),q,e("ol",F,[e("li",null,[n("在.gitlab-ci.yml中定义的变量(如下示例) "),e("a",I,[n("GitLab"),a(i)]),n(),e("a",C,[a(i)]),e("a",R,[n("CI"),a(i)]),e("a",G,[n("/"),a(i)]),e("a",E,[n("CD"),a(i)]),n(),e("a",w,[n("variables | GitLab"),a(i)])])]),M])}const O=l(c,[["render",A],["__file","index.html.vue"]]);export{O as default};
