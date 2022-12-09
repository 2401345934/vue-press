import{_ as i,z as a,A as e,a6 as l}from"./framework.fef63301.js";const r={},h=l('<h1 id="浏览器进程" tabindex="-1"><a class="header-anchor" href="#浏览器进程" aria-hidden="true">#</a> 浏览器进程</h1><h2 id="浏览器四大进程" tabindex="-1"><a class="header-anchor" href="#浏览器四大进程" aria-hidden="true">#</a> 浏览器四大进程</h2><ul><li>Browser进程：浏览器的主进程（负责协调、主控），只有一个。 <ul><li>负责浏览器界面显示，与用户交互。如前进，后退等</li><li>负责各个页面的管理，创建和销毁其他进程</li><li>将渲染（Renderer）进程得到的内存中的Bitmap（位图），绘制到用户界面上</li><li>网络资源的管理，下载等</li></ul></li><li>第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建</li><li>GPU进程：最多一个，用于3D绘制等</li><li>浏览器渲染进程（即通常所说的浏览器内核）（Renderer进程，内部是多线程的）：主要作用为页面渲染，脚本执行，事件处理等</li></ul><h2 id="浏览器多进程的优势" tabindex="-1"><a class="header-anchor" href="#浏览器多进程的优势" aria-hidden="true">#</a> 浏览器多进程的优势</h2><p>相比于单进程浏览器，多进程有如下优点：</p><ul><li>避免单个page crash影响整个浏览器</li><li>避免第三方插件crash影响整个浏览器</li><li>多进程充分利用多核优势</li><li>方便使用沙盒模型隔离插件等进程，提高浏览器稳定性 简单点理解：如果浏览器是单进程，那么某个Tab页崩溃了，就影响了整个浏览器，体验有多差；同理如果插件崩溃了也会影响整个浏览器；而且多进程还有其它的诸多优势。当然，多进程，内存等资源消耗也会更大，有点空间换时间的意思。</li></ul><h2 id="渲染进程包括哪些线程" tabindex="-1"><a class="header-anchor" href="#渲染进程包括哪些线程" aria-hidden="true">#</a> 渲染进程包括哪些线程</h2><h3 id="gui渲染线程" tabindex="-1"><a class="header-anchor" href="#gui渲染线程" aria-hidden="true">#</a> GUI渲染线程</h3><ul><li>负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。</li><li>当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行</li><li>注意，GUI渲染线程与JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。</li></ul><h3 id="js引擎线程-单线程" tabindex="-1"><a class="header-anchor" href="#js引擎线程-单线程" aria-hidden="true">#</a> JS引擎线程(单线程)</h3><ul><li>也称为JS内核，负责处理Javascript脚本程序。（例如常常听到的谷歌浏览器的V8引擎，新版火狐的JaegerMonkey引擎等）</li><li>JS引擎线程负责解析Javascript脚本，运行代码。</li><li>JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）中无论什么时候都只有一个JS线程在运行JS程序</li><li>同样注意，GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</li></ul><h3 id="事件触发线程" tabindex="-1"><a class="header-anchor" href="#事件触发线程" aria-hidden="true">#</a> 事件触发线程</h3><ul><li>归属于渲染进程而不是JS引擎，用来控制事件轮询（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）</li><li>当JS引擎执行代码块如鼠标点击、AJAX异步请求等，会将对应任务添加到事件触发线程中</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理任务队列的队尾，等待JS引擎的处理</li><li>注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）</li></ul><h3 id="定时触发器线程" tabindex="-1"><a class="header-anchor" href="#定时触发器线程" aria-hidden="true">#</a> 定时触发器线程</h3><ul><li>定时器setInterval与setTimeout所在线程</li><li>浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果任务队列处于阻塞线程状态就会影响记计时的准确）</li><li>因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）</li><li>注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。</li></ul><h3 id="异步http请求线程" tabindex="-1"><a class="header-anchor" href="#异步http请求线程" aria-hidden="true">#</a> 异步http请求线程</h3><ul><li>用于处理请求XMLHttpRequest，在连接后是通过浏览器新开一个线程请求。如ajax，是浏览器新开一个http线程</li><li>将检测到状态变更（如ajax返回结果）时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入js引擎线程的事件队列中。再由JavaScript引擎执行。</li></ul>',17),t=[h];function d(n,s){return a(),e("div",null,t)}const u=i(r,[["render",d],["__file","index.html.vue"]]);export{u as default};
