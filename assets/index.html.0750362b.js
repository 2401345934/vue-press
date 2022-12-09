import{_ as e,z as a,A as i,a6 as o}from"./framework.fef63301.js";const l={},r=o('<h1 id="浏览器存储" tabindex="-1"><a class="header-anchor" href="#浏览器存储" aria-hidden="true">#</a> 浏览器存储</h1><h2 id="cookie-vs-localstorage-vs-sessionstorage" tabindex="-1"><a class="header-anchor" href="#cookie-vs-localstorage-vs-sessionstorage" aria-hidden="true">#</a> cookie vs localStorage vs sessionStorage</h2><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><ul><li>cookie是客户端的解决方案，是一种网络服务器存储在计算机或移动设备上的纯文本文件，是服务器发送到Web浏览器上的一小块数据。一般大小限制在4kb以内。</li><li>cookie是一个在服务器和客户端之间来回传送文本值的内置机制，服务器可以根据cookie追踪用户在不同页面的访问信息。</li><li>当接收到客户端发出的HTTP请求时，服务器可以发送带有响应的Set-Cookie标头，然后将cookie与HTTP请求头一起发送请求。</li></ul><h4 id="cookie的用处" tabindex="-1"><a class="header-anchor" href="#cookie的用处" aria-hidden="true">#</a> cookie的用处</h4><ul><li>会话管理：用户账号密码</li><li>个性化：用户偏好设置</li><li>追踪：记录和分析用户行为</li></ul><h4 id="cookie的特点" tabindex="-1"><a class="header-anchor" href="#cookie的特点" aria-hidden="true">#</a> cookie的特点</h4><ul><li>大小限制在4KB以内</li><li>都会消耗网络的带宽</li><li>不加密则不安全</li><li>使用JS操作Cookie比较复杂</li></ul><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3><p>只读的localStorage允许访问一个Document的对象Storage，存储的数据将保存在浏览器会话中。 addeventlistener 方法 可以监听 localStreage 变化</p><h4 id="异同" tabindex="-1"><a class="header-anchor" href="#异同" aria-hidden="true">#</a> 异同</h4><h5 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h5><ul><li>cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效</li><li>localStorage：除非被手动清除，否则将会永久保存。</li><li>sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。</li></ul><h4 id="存放数据大小" tabindex="-1"><a class="header-anchor" href="#存放数据大小" aria-hidden="true">#</a> 存放数据大小</h4><ul><li>cookie：4KB左右</li><li>localStorage和sessionStorage：可以保存5MB的信息。</li></ul><h4 id="http请求" tabindex="-1"><a class="header-anchor" href="#http请求" aria-hidden="true">#</a> http请求</h4><ul><li>cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</li><li>localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信</li></ul><h4 id="易用性" tabindex="-1"><a class="header-anchor" href="#易用性" aria-hidden="true">#</a> 易用性</h4><ul><li>cookie：需要程序员自己封装，源生的Cookie接口不友好</li><li>localStorage和sessionStorage：源生接口可以接受，亦可再次封装来对Object和Array有更好的支持</li></ul><h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4><ul><li>从安全性来说，因为每次http请求都会携带cookie信息，这样无形中浪费了带宽，所以cookie应该尽可能少的使用，另外cookie还需要指定作用域，不可以跨域调用，限制比较多。但是用来识别用户登录来说，cookie还是比stprage更好用的。其他情况下，可以使用storage，就用storage。</li><li>storage在存储数据的大小上面秒杀了cookie，现在基本上很少使用cookie了，因为更大总是更好的，哈哈哈你们懂得。</li><li>localStorage和sessionStorage唯一的差别一个是永久保存在浏览器里面，一个是关闭网页就清除了信息。localStorage可以用来夸页面传递参数，sessionStorage用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数。</li></ul><h4 id="浏览器支持情况" tabindex="-1"><a class="header-anchor" href="#浏览器支持情况" aria-hidden="true">#</a> 浏览器支持情况</h4><p>localStorage和sessionStorage是html5才应用的新特性，可能有些浏览器并不支持，这里要注意。 session 和sessionStroage 的区别 session 是服务端存储的，sessionStroage是客户端存储的，顺便说一句，session 也是依赖于cookie实现的</p><h3 id="localstorage和sessionstorage" tabindex="-1"><a class="header-anchor" href="#localstorage和sessionstorage" aria-hidden="true">#</a> localStorage和sessionStorage</h3><h4 id="两者的共同点在于" tabindex="-1"><a class="header-anchor" href="#两者的共同点在于" aria-hidden="true">#</a> 两者的共同点在于</h4><ul><li>存储大小均为5M左右</li><li>都有同源策略限制</li><li>仅在客户端中保存，不参与和服务器的通信</li></ul><h4 id="两者的不同点在于" tabindex="-1"><a class="header-anchor" href="#两者的不同点在于" aria-hidden="true">#</a> 两者的不同点在于</h4><ul><li>生命周期 —— 数据可以存储多少时间 <ul><li>localStorage: 存储的数据是永久性的，除非用户人为删除否则会一直存在。</li><li>sessionStorage: 与存储数据的脚本所在的标签页的有效期是相同的。一旦窗口或者标签页被关闭，那么所有通过 sessionStorage 存储的数据也会被删除。</li></ul></li><li>作用域 —— 谁拥有数据的访问权 <ul><li>localStorage: 在同一个浏览器内，同源文档之间共享 localStorage 数据，可以互相读取、覆盖。</li><li>sessionStorage: 与 localStorage 一样需要同一浏览器同源文档这一条件。不仅如此，sessionStorage 的作用域还被限定在了窗口中，也就是说，只有同一浏览器、同一窗口的同源文档才能共享数据。 为了更好的理解sessionStorage,我们来看个例子： 例如你在浏览器中打开了两个相同地址的页面A、B,虽然这两个页面的源完全相同，但是他们还是不能共享数据，因为他们是不同窗口中的。但是如果是一个窗口中，有两个同源的iframe元素的话，这两个iframe的 sessionStorage 是可以互通的。</li></ul></li></ul>',28),s=[r];function t(h,c){return a(),i("div",null,s)}const n=e(l,[["render",t],["__file","index.html.vue"]]);export{n as default};
