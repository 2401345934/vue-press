import{_ as e,z as i,A as n,a6 as s}from"./framework.fef63301.js";const l={},d=s(`<h2 id="基于rem的适配方案" tabindex="-1"><a class="header-anchor" href="#基于rem的适配方案" aria-hidden="true">#</a> 基于rem的适配方案</h2><h3 id="rem是什么" tabindex="-1"><a class="header-anchor" href="#rem是什么" aria-hidden="true">#</a> rem是什么？</h3><p>rem是指相对于根元素的字体大小的单位，在日常开发过程中我们通常把根元素（html/body）的字体设置为10px,方便于我们计算（此时子元素的1rem就相当于10px）。</p><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><p>不固定宽高比的Web应用，适用于绝大部分业务场景 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dff5429951ce4068bc19ae37bdbcc6af~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="px2rem.gif"></p><h3 id="项目实战" tabindex="-1"><a class="header-anchor" href="#项目实战" aria-hidden="true">#</a> 项目实战</h3><ol><li>安装依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i postcss-pxtorem autoprefixer amfe-flexible --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>postcss-pxtorem 是PostCSS的插件，用于将像素单元生成rem单位<br> autoprefixer 浏览器前缀处理插件<br> amfe-flexible 可伸缩布局方案 替代了原先的<code>lib-flexible</code> 选用了当前众多浏览器兼容的<code>viewport</code></p></blockquote><ol start="2"><li>项目根目录创建 <code>postcss.config.js</code> 文件 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc6ec08fb25b44aeaa9254e725389169~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="QQ图片20220927110819.png"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
 plugins: {
  autoprefixer: {
   overrideBrowserslist: [
    &quot;Android 4.1&quot;,
    &quot;iOS 7.1&quot;,
    &quot;Chrome &gt; 31&quot;,
    &quot;ff &gt; 31&quot;,
    &quot;ie &gt;= 8&quot;,
    &quot;last 10 versions&quot;, // 所有主流浏览器最近10版本用
   ],
   grid: true,
  },
  &quot;postcss-pxtorem&quot;: {
   rootValue: 192, // 设计稿宽度的1/ 10 例如设计稿按照 1920设计 此处就为192
   propList: [&quot;*&quot;, &quot;!border&quot;], // 除 border 外所有px 转 rem
   selectorBlackList: [&quot;.el-&quot;], // 过滤掉.el-开头的class，不进行rem转换
  },
 },
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>main.ts/js</code> 文件中导入依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import &quot;amfe-flexible/index.js&quot;;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>项目重启</li></ol><h2 id="基于scale的适配方案" tabindex="-1"><a class="header-anchor" href="#基于scale的适配方案" aria-hidden="true">#</a> 基于scale的适配方案</h2><p>在CSS3中，我们可以使用transform属性的scale()方法来实现元素的缩放效果。缩放，指的是“缩小”和“放大”的意思。</p><ul><li>transform: scaleX(x); / 沿x轴方向缩放/</li><li>transform: scaleY(y); / 沿y轴方向缩放/</li><li>transform: scale(); / 同时沿x轴和y轴缩放/</li></ul><h3 id="适用场景-1" tabindex="-1"><a class="header-anchor" href="#适用场景-1" aria-hidden="true">#</a> 适用场景</h3><p>固定宽高比的Web应用，如大屏或者固定窗口业务应用 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9efd3e99a284af9b561a9ee7c623498~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="scale.gif"></p><h3 id="项目实战-1" tabindex="-1"><a class="header-anchor" href="#项目实战-1" aria-hidden="true">#</a> 项目实战</h3><ol><li>新建<code>resize.ts/js</code>文件 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/679548a8cd874f47bd8d6ae5a777e6ad~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="QQ图片20220927111729.png"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { ref } from &quot;vue&quot;;

export default function windowResize() {
 // * 指向最外层容器
 const screenRef = ref();
 // * 定时函数
 const timer = ref(0);
 // * 默认缩放值
 const scale = {
  width: &quot;1&quot;,
  height: &quot;1&quot;,
 };
    
 // * 设计稿尺寸（px）
 const baseWidth = 1920;
 const baseHeight = 1080;

 // * 需保持的比例（默认1.77778）
 const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));
 const calcRate = () =&gt; {
  // 当前宽高比
  const currentRate = parseFloat(
   (window.innerWidth / window.innerHeight).toFixed(5)
  );
  if (screenRef.value) {
   if (currentRate &gt; baseProportion) {
    // 表示更宽
    scale.width = (
     (window.innerHeight * baseProportion) /
     baseWidth
    ).toFixed(5);
    scale.height = (window.innerHeight / baseHeight).toFixed(5);
    screenRef.value.style.transform = \`scale(\${scale.width}, \${scale.height})\`;
   } else {
    // 表示更高
    scale.height = (
     window.innerWidth /
     baseProportion /
     baseHeight
    ).toFixed(5);
    scale.width = (window.innerWidth / baseWidth).toFixed(5);
    screenRef.value.style.transform = \`scale(\${scale.width}, \${scale.height})\`;
   }
  }
 };

 const resize = () =&gt; {
  clearTimeout(timer.value);
  timer.value = window.setTimeout(() =&gt; {
   calcRate();
  }, 200);
 };

 // 改变窗口大小重新绘制
 const windowDraw = () =&gt; {
  window.addEventListener(&quot;resize&quot;, resize);
 };

 // 改变窗口大小重新绘制
 const unWindowDraw = () =&gt; {
  window.removeEventListener(&quot;resize&quot;, resize);
 };

 return {
  screenRef,
  calcRate,
  windowDraw,
  unWindowDraw,
 };
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>相关界面引入<code>resize.ts/js</code> <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/464430e5a9fc458a924482d0d3d7bb9f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="QQ图片20220927112000.png"></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
    &lt;div class=&quot;screen-container&quot;&gt;
        &lt;div class=&quot;screen-content&quot; ref=&quot;screenRef&quot;&gt;
            &lt;span class=&quot;screen-title&quot;&gt;基于scale的适配方案&lt;/span&gt;
            &lt;img class=&quot;screen-img&quot; src=&quot;https://img2.baidu.com/it/u=1297807229,3828610143&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG?w=500&amp;h=281&quot; alt=&quot;&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import windowResize from &#39;../../utils/resize&#39;;
import {onMounted, onUnmounted} from &#39;vue&#39;;

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize()

onMounted(() =&gt; {
    // 监听浏览器窗口尺寸变化
    windowDraw()
    calcRate()
})

onUnmounted(() =&gt; {
    unWindowDraw();
})

&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.screen-container {
    height: 100%;
    background-color: lightcyan;
    display: flex;
    justify-content: center;
    align-items: center;

    .screen-content {
        width: 1920px;
        height: 1080px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .screen-title {
            font-size: 32px;
        }

        .screen-img {
            margin-top: 20px;
        }
    }
}
&lt;/style&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),a=[d];function r(t,c){return i(),n("div",null,a)}const u=e(l,[["render",r],["__file","index.html.vue"]]);export{u as default};
