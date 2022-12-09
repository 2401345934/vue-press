import{_ as l,z as d,A as a,X as n,C as e,T as r,a6 as i,Q as t}from"./framework.fef63301.js";const c={},o=i(`<h1 id="九种跨域方式实现原理" tabindex="-1"><a class="header-anchor" href="#九种跨域方式实现原理" aria-hidden="true">#</a> 九种跨域方式实现原理</h1><h2 id="一、什么是跨域" tabindex="-1"><a class="header-anchor" href="#一、什么是跨域" aria-hidden="true">#</a> 一、什么是跨域？</h2><h3 id="_1-什么是同源策略及其限制内容" tabindex="-1"><a class="header-anchor" href="#_1-什么是同源策略及其限制内容" aria-hidden="true">#</a> 1.什么是同源策略及其限制内容？</h3><p>同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指&quot;协议+域名+端口&quot;三者相同，即便两个不同的域名指向同一个ip地址，也非同源。</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/23/1638b3579d9eeb32~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="url的组成"></p><p><strong>同源策略限制内容有：</strong></p><ul><li>Cookie、LocalStorage、IndexedDB 等存储性内容</li><li>DOM 节点</li><li>AJAX 请求发送后，结果被浏览器拦截了</li></ul><p>但是有三个标签是允许跨域加载资源：</p><ul><li><code>&lt;img src=XXX&gt;</code></li><li><code>&lt;link href=XXX&gt;</code></li><li><code>&lt;script src=XXX&gt;</code></li></ul><h3 id="_2-常见跨域场景" tabindex="-1"><a class="header-anchor" href="#_2-常见跨域场景" aria-hidden="true">#</a> 2.常见跨域场景</h3><p><strong>当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域</strong>。不同域之间相互请求资源，就算作“跨域”。常见跨域场景如下图所示：</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/23/1638b3579dde630e~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p><p>特别说明两点：</p><p><strong>第一：如果是协议和端口造成的跨域问题“前台”是无能为力的。</strong></p><p><strong>第二：在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”</strong>。</p><p>这里你或许有个疑问：<strong>请求跨域了，那么请求到底发出去没有？</strong></p><p><strong>跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了</strong>。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会?因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。</p><h2 id="二、跨域解决方案" tabindex="-1"><a class="header-anchor" href="#二、跨域解决方案" aria-hidden="true">#</a> 二、跨域解决方案</h2><h3 id="_1-jsonp" tabindex="-1"><a class="header-anchor" href="#_1-jsonp" aria-hidden="true">#</a> 1.jsonp</h3><h4 id="_1-jsonp原理" tabindex="-1"><a class="header-anchor" href="#_1-jsonp原理" aria-hidden="true">#</a> 1) JSONP原理</h4><p><strong>利用 <code>&lt;script&gt;</code> 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP请求一定需要对方的服务器做支持才可以。</strong></p><h4 id="_2-jsonp和ajax对比" tabindex="-1"><a class="header-anchor" href="#_2-jsonp和ajax对比" aria-hidden="true">#</a> 2) JSONP和AJAX对比</h4><p>JSONP和AJAX相同，都是客户端向服务器端发送请求，从服务器端获取数据的方式。但AJAX属于同源策略，JSONP属于非同源策略（跨域请求）</p><h4 id="_3-jsonp优缺点" tabindex="-1"><a class="header-anchor" href="#_3-jsonp优缺点" aria-hidden="true">#</a> 3) JSONP优缺点</h4><p>JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。<strong>缺点是仅支持get方法具有局限性,不安全可能会遭受XSS攻击。</strong></p><h4 id="_4-jsonp的实现流程" tabindex="-1"><a class="header-anchor" href="#_4-jsonp的实现流程" aria-hidden="true">#</a> 4) JSONP的实现流程</h4><ul><li>声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据(服务器返回的data)。</li><li>创建一个<code>&lt;script&gt;</code>标签，把那个跨域的API数据接口地址，赋值给script的src,还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。</li><li>服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是<code>show(&#39;我不爱你&#39;)</code>。</li><li>最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数（show），对返回的数据进行操作。</li></ul><p>在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.html
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) =&gt; {
    let script = document.createElement(&#39;script&#39;)
    window[callback] = function(data) {
      resolve(data)
      document.body.removeChild(script)
    }
    params = { ...params, callback } // wd=b&amp;callback=show
    let arrs = []
    for (let key in params) {
      arrs.push(\`\${key}=\${params[key]}\`)
    }
    script.src = \`\${url}?\${arrs.join(&#39;&amp;&#39;)}\`
    document.body.appendChild(script)
  })
}
jsonp({
  url: &#39;http://localhost:3000/say&#39;,
  params: { wd: &#39;Iloveyou&#39; },
  callback: &#39;show&#39;
}).then(data =&gt; {
  console.log(data)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码相当于向<code>http://localhost:3000/say?wd=Iloveyou&amp;callback=show</code>这个地址请求数据，然后后台返回<code>show(&#39;我不爱你&#39;)</code>，最后会运行show()这个函数，打印出&#39;我不爱你&#39;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// server.js
let express = require(&#39;express&#39;)
let app = express()
app.get(&#39;/say&#39;, function(req, res) {
  let { wd, callback } = req.query
  console.log(wd) // Iloveyou
  console.log(callback) // show
  res.end(\`\${callback}(&#39;我不爱你&#39;)\`)
})
app.listen(3000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-jquery的jsonp形式" tabindex="-1"><a class="header-anchor" href="#_5-jquery的jsonp形式" aria-hidden="true">#</a> 5) jQuery的jsonp形式</h4><p><strong>JSONP都是GET和异步请求的，不存在其他的请求方式和同步请求，且jQuery默认就会给JSONP的请求清除缓存。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$.ajax({
url:&quot;http://crossdomain.com/jsonServerResponse&quot;,
dataType:&quot;jsonp&quot;,
type:&quot;get&quot;,//可以省略
jsonpCallback:&quot;show&quot;,//-&gt;自定义传递给服务器的函数名，而不是使用jQuery自动生成的，可省略
jsonp:&quot;callback&quot;,//-&gt;把传递函数名的那个形参callback，可省略
success:function (data){
console.log(data);}
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-cors" tabindex="-1"><a class="header-anchor" href="#_2-cors" aria-hidden="true">#</a> 2.cors</h3><p><strong>CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现</strong>。</p><p>浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是后端。只要后端实现了 CORS，就实现了跨域。</p><p>服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。</p><p>虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为<strong>简单请求</strong>和<strong>复杂请求</strong>。</p><h4 id="_1-简单请求" tabindex="-1"><a class="header-anchor" href="#_1-简单请求" aria-hidden="true">#</a> 1) 简单请求</h4><p>只要同时满足以下两大条件，就属于简单请求</p><p>条件1：使用下列方法之一：</p><ul><li>GET</li><li>HEAD</li><li>POST</li></ul><p>条件2：Content-Type 的值仅限于下列三者之一：</p><ul><li>text/plain</li><li>multipart/form-data</li><li>application/x-www-form-urlencoded</li></ul><p>请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器； XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。</p><h4 id="_2-复杂请求" tabindex="-1"><a class="header-anchor" href="#_2-复杂请求" aria-hidden="true">#</a> 2) 复杂请求</h4><p>不符合以上条件的请求就肯定是复杂请求了。 复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为&quot;预检&quot;请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。</p><p>我们用<code>PUT</code>向后台请求时，属于复杂请求，后台需做如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 允许哪个方法访问我
res.setHeader(&#39;Access-Control-Allow-Methods&#39;, &#39;PUT&#39;)
// 预检的存活时间
res.setHeader(&#39;Access-Control-Max-Age&#39;, 6)
// OPTIONS请求不做任何处理
if (req.method === &#39;OPTIONS&#39;) {
  res.end() 
}
// 定义后台返回的内容
app.put(&#39;/getData&#39;, function(req, res) {
  console.log(req.headers)
  res.end(&#39;我不爱你&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们看下一个完整复杂请求的例子，并且介绍下CORS请求相关的字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.html
let xhr = new XMLHttpRequest()
document.cookie = &#39;name=xiamen&#39; // cookie不能跨域
xhr.withCredentials = true // 前端设置是否带cookie
xhr.open(&#39;PUT&#39;, &#39;http://localhost:4000/getData&#39;, true)
xhr.setRequestHeader(&#39;name&#39;, &#39;xiamen&#39;)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if ((xhr.status &gt;= 200 &amp;&amp; xhr.status &lt; 300) || xhr.status === 304) {
      console.log(xhr.response)
      //得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader(&#39;name&#39;))
    }
  }
}
xhr.send()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//server1.js
let express = require(&#39;express&#39;);
let app = express();
app.use(express.static(__dirname));
app.listen(3000);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//server2.js
let express = require(&#39;express&#39;)
let app = express()
let whitList = [&#39;http://localhost:3000&#39;] //设置白名单
app.use(function(req, res, next) {
  let origin = req.headers.origin
  if (whitList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader(&#39;Access-Control-Allow-Origin&#39;, origin)
    // 允许携带哪个头访问我
    res.setHeader(&#39;Access-Control-Allow-Headers&#39;, &#39;name&#39;)
    // 允许哪个方法访问我
    res.setHeader(&#39;Access-Control-Allow-Methods&#39;, &#39;PUT&#39;)
    // 允许携带cookie
    res.setHeader(&#39;Access-Control-Allow-Credentials&#39;, true)
    // 预检的存活时间
    res.setHeader(&#39;Access-Control-Max-Age&#39;, 6)
    // 允许返回的头
    res.setHeader(&#39;Access-Control-Expose-Headers&#39;, &#39;name&#39;)
    if (req.method === &#39;OPTIONS&#39;) {
      res.end() // OPTIONS请求不做任何处理
    }
  }
  next()
})
app.put(&#39;/getData&#39;, function(req, res) {
  console.log(req.headers)
  res.setHeader(&#39;name&#39;, &#39;jw&#39;) //返回一个响应头，后台需设置
  res.end(&#39;我不爱你&#39;)
})
app.get(&#39;/getData&#39;, function(req, res) {
  console.log(req.headers)
  res.end(&#39;我不爱你&#39;)
})
app.use(express.static(__dirname))
app.listen(4000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码由<code>http://localhost:3000/index.html</code>向<code>http://localhost:4000/</code>跨域请求，正如我们上面所说的，后端是实现 CORS 通信的关键。</p><h3 id="_3-postmessage" tabindex="-1"><a class="header-anchor" href="#_3-postmessage" aria-hidden="true">#</a> 3.postMessage</h3><p>postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：</p><ul><li>页面和其打开的新窗口的数据传递</li><li>多窗口之间消息传递</li><li>页面与嵌套的iframe消息传递</li><li>上面三个场景的跨域数据传递</li></ul><p><strong>postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递</strong>。</p><blockquote><p>otherWindow.postMessage(message, targetOrigin, [transfer]);</p></blockquote><ul><li>message: 将要发送到其他 window的数据。</li><li>targetOrigin:通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串&quot;*&quot;（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。</li><li>transfer(可选)：是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。</li></ul><p>接下来我们看个例子： <code>http://localhost:3000/a.html</code>页面向<code>http://localhost:4000/b.html</code>传递“我爱你”,然后后者传回&quot;我不爱你&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// a.html
  &lt;iframe src=&quot;http://localhost:4000/b.html&quot; frameborder=&quot;0&quot; id=&quot;frame&quot; onload=&quot;load()&quot;&gt;&lt;/iframe&gt; //等它加载完触发一个事件
  //内嵌在http://localhost:3000/a.html
    &lt;script&gt;
      function load() {
        let frame = document.getElementById(&#39;frame&#39;)
        frame.contentWindow.postMessage(&#39;我爱你&#39;, &#39;http://localhost:4000&#39;) //发送数据
        window.onmessage = function(e) { //接受返回数据
          console.log(e.data) //我不爱你
        }
      }
    &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// b.html
  window.onmessage = function(e) {
    console.log(e.data) //我爱你
    e.source.postMessage(&#39;我不爱你&#39;, e.origin)
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-websocket" tabindex="-1"><a class="header-anchor" href="#_4-websocket" aria-hidden="true">#</a> 4.websocket</h3><p>Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信，同时也是跨域的一种解决方案。WebSocket和HTTP都是应用层协议，都基于 TCP 协议。但是 <strong>WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据</strong>。同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。</p><p>原生WebSocket API使用起来不太方便，我们使用<code>Socket.io</code>，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。</p><p>我们先来看个例子：本地文件socket.html向<code>localhost:3000</code>发生数据和接受数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// socket.html
&lt;script&gt;
    let socket = new WebSocket(&#39;ws://localhost:3000&#39;);
    socket.onopen = function () {
      socket.send(&#39;我爱你&#39;);//向服务器发送数据
    }
    socket.onmessage = function (e) {
      console.log(e.data);//接收服务器返回的数据
    }
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// server.js
let express = require(&#39;express&#39;);
let app = express();
let WebSocket = require(&#39;ws&#39;);//记得安装ws
let wss = new WebSocket.Server({port:3000});
wss.on(&#39;connection&#39;,function(ws) {
  ws.on(&#39;message&#39;, function (data) {
    console.log(data);
    ws.send(&#39;我不爱你&#39;)
  });
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-node中间件代理-两次跨域" tabindex="-1"><a class="header-anchor" href="#_5-node中间件代理-两次跨域" aria-hidden="true">#</a> 5. Node中间件代理(两次跨域)</h3><p>实现原理：<strong>同源策略是浏览器需要遵循的标准，而如果是服务器向服务器请求就无需遵循同源策略。</strong> 代理服务器，需要做以下几个步骤：</p><ul><li><p>接受客户端请求 。</p></li><li><p>将请求 转发给服务器。</p></li><li><p>拿到服务器 响应 数据。</p></li><li><p>将 响应 转发给客户端。</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/17/1685c5bed77e7788~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.image" alt="图片"></p></li></ul><p>我们先来看个例子：本地文件index.html文件，通过代理服务器<code>http://localhost:3000</code>向目标服务器<code>http://localhost:4000</code>请求数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.html(http://127.0.0.1:5500)
 &lt;script src=&quot;https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js&quot;&gt;&lt;/script&gt;
    &lt;script&gt;
      $.ajax({
        url: &#39;http://localhost:3000&#39;,
        type: &#39;post&#39;,
        data: { name: &#39;xiamen&#39;, password: &#39;123456&#39; },
        contentType: &#39;application/json;charset=utf-8&#39;,
        success: function(result) {
          console.log(result) // {&quot;title&quot;:&quot;fontend&quot;,&quot;password&quot;:&quot;123456&quot;}
        },
        error: function(msg) {
          console.log(msg)
        }
      })
     &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// server1.js 代理服务器(http://localhost:3000)
const http = require(&#39;http&#39;)
// 第一步：接受客户端请求
const server = http.createServer((request, response) =&gt; {
  // 代理服务器，直接和浏览器直接交互，需要设置CORS 的首部字段
  response.writeHead(200, {
    &#39;Access-Control-Allow-Origin&#39;: &#39;*&#39;,
    &#39;Access-Control-Allow-Methods&#39;: &#39;*&#39;,
    &#39;Access-Control-Allow-Headers&#39;: &#39;Content-Type&#39;
  })
  // 第二步：将请求转发给服务器
  const proxyRequest = http
    .request(
      {
        host: &#39;127.0.0.1&#39;,
        port: 4000,
        url: &#39;/&#39;,
        method: request.method,
        headers: request.headers
      },
      serverResponse =&gt; {
        // 第三步：收到服务器的响应
        var body = &#39;&#39;
        serverResponse.on(&#39;data&#39;, chunk =&gt; {
          body += chunk
        })
        serverResponse.on(&#39;end&#39;, () =&gt; {
          console.log(&#39;The data is &#39; + body)
          // 第四步：将响应结果转发给浏览器
          response.end(body)
        })
      }
    )
    .end()
})
server.listen(3000, () =&gt; {
  console.log(&#39;The proxyServer is running at http://localhost:3000&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// server2.js(http://localhost:4000)
const http = require(&#39;http&#39;)
const data = { title: &#39;fontend&#39;, password: &#39;123456&#39; }
const server = http.createServer((request, response) =&gt; {
  if (request.url === &#39;/&#39;) {
    response.end(JSON.stringify(data))
  }
})
server.listen(4000, () =&gt; {
  console.log(&#39;The server is running at http://localhost:4000&#39;)
})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码经过两次跨域，值得注意的是浏览器向代理服务器发送请求，也遵循同源策略，最后在index.html文件打印出<code>{&quot;title&quot;:&quot;fontend&quot;,&quot;password&quot;:&quot;123456&quot;}</code></p><h3 id="_6-nginx反向代理" tabindex="-1"><a class="header-anchor" href="#_6-nginx反向代理" aria-hidden="true">#</a> 6.nginx反向代理</h3><p>实现原理类似于Node中间件代理，需要你搭建一个中转nginx服务器，用于转发请求。</p><p>使用nginx反向代理实现跨域，是最简单的跨域方式。只需要修改nginx的配置即可解决跨域问题，支持所有浏览器，支持session，不需要修改任何代码，并且不会影响服务器性能。</p><p>实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。</p>`,82),v={href:"https://link.juejin.cn/?target=http%3A%2F%2Fnginx.org%2Fen%2Fdownload.html",title:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;
    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后通过命令行<code>nginx -s reload</code>启动nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// index.html
var xhr = new XMLHttpRequest();
// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;
// 访问nginx中的代理服务器
xhr.open(&#39;get&#39;, &#39;http://www.domain1.com:81/?user=admin&#39;, true);
xhr.send();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// server.js
var http = require(&#39;http&#39;);
var server = http.createServer();
var qs = require(&#39;querystring&#39;);
server.on(&#39;request&#39;, function(req, res) {
    var params = qs.parse(req.url.substring(2));
    // 向前台写cookie
    res.writeHead(200, {
        &#39;Set-Cookie&#39;: &#39;l=a123456;Path=/;Domain=www.domain2.com;HttpOnly&#39;   // HttpOnly:脚本无法读取
    });
    res.write(JSON.stringify(params));
    res.end();
});
server.listen(&#39;8080&#39;);
console.log(&#39;Server is running at port 8080...&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-window-name-iframe" tabindex="-1"><a class="header-anchor" href="#_7-window-name-iframe" aria-hidden="true">#</a> 7.window.name + iframe</h3><p>window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。</p><p>其中a.html和b.html是同域的，都是<code>http://localhost:3000</code>;而c.html是<code>http://localhost:4000</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // a.html(http://localhost:3000/b.html)
  &lt;iframe src=&quot;http://localhost:4000/c.html&quot; frameborder=&quot;0&quot; onload=&quot;load()&quot; id=&quot;iframe&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
    let first = true
    // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
    function load() {
      if(first){
      // 第1次onload(跨域页)成功后，切换到同域代理页面
        let iframe = document.getElementById(&#39;iframe&#39;);
        iframe.src = &#39;http://localhost:3000/b.html&#39;;
        first = false;
      }else{
      // 第2次onload(同域b.html页)成功后，读取同域window.name中数据
        console.log(iframe.contentWindow.name);
      }
    }
  &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.html为中间代理页，与a.html同域，内容为空。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // c.html(http://localhost:4000/c.html)
  &lt;script&gt;
    window.name = &#39;我不爱你&#39;  
  &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。</p><h3 id="_8-location-hash-iframe" tabindex="-1"><a class="header-anchor" href="#_8-location-hash-iframe" aria-hidden="true">#</a> 8.location.hash + iframe</h3><p>实现原理： a.html欲与c.html跨域相互通信，通过中间页b.html来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。</p><p>具体实现步骤：一开始a.html给c.html传一个hash值，然后c.html收到hash值后，再把hash值传递给b.html，最后b.html将结果放到a.html的hash值中。 同样的，a.html和b.html是同域的，都是<code>http://localhost:3000</code>;而c.html是<code>http://localhost:4000</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // a.html
  &lt;iframe src=&quot;http://localhost:4000/c.html#iloveyou&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
    window.onhashchange = function () { //检测hash的变化
      console.log(location.hash);
    }
  &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // b.html
  &lt;script&gt;
    window.parent.parent.location.hash = location.hash 
    //b.html将结果放到a.html的hash值中，b.html可通过parent.parent访问a.html页面
  &lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // c.html
 console.log(location.hash);
  let iframe = document.createElement(&#39;iframe&#39;);
  iframe.src = &#39;http://localhost:3000/b.html#idontloveyou&#39;;
  document.body.appendChild(iframe);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-document-domain-iframe" tabindex="-1"><a class="header-anchor" href="#_9-document-domain-iframe" aria-hidden="true">#</a> 9.document.domain + iframe</h3><p><strong>该方式只能用于二级域名相同的情况下，比如 <code>a.test.com</code> 和 <code>b.test.com</code> 适用于该方式</strong>。 只需要给页面添加 <code>document.domain =&#39;test.com&#39;</code> 表示二级域名都相同就可以实现跨域。</p><p>实现原理：两个页面都通过js强制设置document.domain为基础主域，就实现了同域。</p><p>我们看个例子：页面<code>a.zf1.cn:3000/a.html</code>获取页面<code>b.zf1.cn:3000/b.html</code>中a的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// a.html
&lt;body&gt;
 helloa
  &lt;iframe src=&quot;http://b.zf1.cn:3000/b.html&quot; frameborder=&quot;0&quot; onload=&quot;load()&quot; id=&quot;frame&quot;&gt;&lt;/iframe&gt;
  &lt;script&gt;
    document.domain = &#39;zf1.cn&#39;
    function load() {
      console.log(frame.contentWindow.a);
    }
  &lt;/script&gt;
&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// b.html
&lt;body&gt;
   hellob
   &lt;script&gt;
     document.domain = &#39;zf1.cn&#39;
     var a = 100;
   &lt;/script&gt;
&lt;/body&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><ul><li>CORS支持所有类型的HTTP请求，是跨域HTTP请求的根本解决方案</li><li>JSONP只支持GET请求，JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。</li><li>不管是Node中间件代理还是nginx反向代理，主要是通过同源策略对服务器不加限制。</li><li>日常工作中，用得比较多的跨域方案是cors和nginx反向代理</li></ul>`,25);function m(b,p){const s=t("ExternalLinkIcon");return d(),a("div",null,[o,n("p",null,[e("先下载"),n("a",v,[e("nginx"),r(s)]),e("，然后将nginx目录下的nginx.conf修改如下:")]),u])}const g=l(c,[["render",m],["__file","index.html.vue"]]);export{g as default};
