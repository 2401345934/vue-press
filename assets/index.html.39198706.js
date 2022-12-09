import{_ as i,z as l,A as e,a6 as a}from"./framework.fef63301.js";const t="/vue-press/assets/tls.2c3619b1.webp",h={},r=a('<h1 id="http-及-tls" tabindex="-1"><a class="header-anchor" href="#http-及-tls" aria-hidden="true">#</a> HTTP 及 TLS</h1><h2 id="http-请求中的内容-http-请求由三部分构成-分别为" tabindex="-1"><a class="header-anchor" href="#http-请求中的内容-http-请求由三部分构成-分别为" aria-hidden="true">#</a> HTTP 请求中的内容 HTTP 请求由三部分构成，分别为</h2><ul><li><p>请求行</p></li><li><p>首部</p></li><li><p>实体</p></li><li><p>请求行大概长这样 GET /images/logo.gif HTTP/1.1，基本由请求方法、URL、协议版本组成，这其中值得一说的就是请求方法了。</p></li><li><p>请求方法分为很多种，最常用的也就是 Get 和 Post 了。虽然请求方法有很多，但是更多的是传达一个语义，而不是说 Post 能做的事情 Get 就不能做了。如果你愿意，都使用 Get 请求或者 Post 请求都是可以的。更多请求方法的语义描述可以阅读 文档。</p></li><li><p>首先先引入副作用和幂等的概念。</p></li><li><p>副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。</p></li><li><p>幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。因为前者是多了一个账号（资源），后者只是更新同一个资源。</p></li><li><p>在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。</p></li></ul><h3 id="在技术上说" tabindex="-1"><a class="header-anchor" href="#在技术上说" aria-hidden="true">#</a> 在技术上说</h3><ul><li>Get 请求能缓存，Post 不能</li><li>Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里（当然你想写到 body 里也是可以的），且会被浏览器保存历史纪录。Post 不会，但是在抓包的情况下都是一样的。</li><li>URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的</li><li>Post 支持更多的编码类型且不对数据类型限制</li></ul><h3 id="首部" tabindex="-1"><a class="header-anchor" href="#首部" aria-hidden="true">#</a> 首部</h3><p>首部分为请求首部和响应首部，并且部分首部两种通用，接下来我们就来学习一部分的常用首部。</p><h3 id="通用首部" tabindex="-1"><a class="header-anchor" href="#通用首部" aria-hidden="true">#</a> 通用首部</h3><h4 id="通用字段-作用" tabindex="-1"><a class="header-anchor" href="#通用字段-作用" aria-hidden="true">#</a> 通用字段 作用</h4><ul><li>Cache-Control 控制缓存的行为</li><li>Connection 浏览器想要优先使用的连接类型，比如 keep-alive</li><li>Date 创建报文时间</li><li>Pragma 报文指令</li><li>Via 代理服务器相关信息</li><li>Transfer-Encoding 传输编码方式</li><li>Upgrade 要求客户端升级协议</li><li>Warning 在内容中可能存在错误</li></ul><h3 id="请求首部" tabindex="-1"><a class="header-anchor" href="#请求首部" aria-hidden="true">#</a> 请求首部</h3><h4 id="请求首部-作用" tabindex="-1"><a class="header-anchor" href="#请求首部-作用" aria-hidden="true">#</a> 请求首部 作用</h4><ul><li>Accept 能正确接收的媒体类型</li><li>Accept-Charset 能正确接收的字符集</li><li>Accept-Encoding 能正确接收的编码格式列表</li><li>Accept-Language 能正确接收的语言列表</li><li>Expect 期待服务端的指定行为</li><li>From 请求方邮箱地址</li><li>Host 服务器的域名</li><li>If-Match 两端资源标记比较</li><li>If-Modified-Since 本地资源未修改返回 304（比较时间）</li><li>If-None-Match 本地资源未修改返回 304（比较标记）</li><li>User-Agent 客户端信息</li><li>Max-Forwards 限制可被代理及网关转发的次数</li><li>Proxy-Authorization 向代理服务器发送验证信息</li><li>Range 请求某个内容的一部分</li><li>Referer 表示浏览器所访问的前一个页面</li><li>TE 传输编码方式</li></ul><h3 id="响应首部" tabindex="-1"><a class="header-anchor" href="#响应首部" aria-hidden="true">#</a> 响应首部</h3><h4 id="响应首部-作用" tabindex="-1"><a class="header-anchor" href="#响应首部-作用" aria-hidden="true">#</a> 响应首部 作用</h4><ul><li>Accept-Ranges 是否支持某些种类的范围</li><li>Age 资源在代理缓存中存在的时间</li><li>ETag 资源标识</li><li>Location 客户端重定向到某个 URL</li><li>Proxy-Authenticate 向代理服务器发送验证信息</li><li>Server 服务器名字</li><li>WWW-Authenticate 获取资源需要的验证信息</li></ul><h3 id="实体首部" tabindex="-1"><a class="header-anchor" href="#实体首部" aria-hidden="true">#</a> 实体首部</h3><h4 id="实体首部-作用" tabindex="-1"><a class="header-anchor" href="#实体首部-作用" aria-hidden="true">#</a> 实体首部 作用</h4><ul><li>Allow 资源的正确请求方式</li><li>Content-Encoding 内容的编码格式</li><li>Content-Language 内容使用的语言</li><li>Content-Length request body 长度</li><li>Content-Location 返回数据的备用地址</li><li>Content-MD5 Base64加密格式的内容 MD5检验值</li><li>Content-Range 内容的位置范围</li><li>Content-Type 内容的媒体类型</li><li>Expires 内容的过期时间</li><li>Last_modified 内容的最后修改时间</li></ul><h2 id="tls" tabindex="-1"><a class="header-anchor" href="#tls" aria-hidden="true">#</a> TLS</h2><ul><li>HTTPS 还是通过了 HTTP 来传输信息，但是信息通过 TLS 协议进行了加密。</li><li>TLS 协议位于传输层之上，应用层之下。首次进行 TLS 协议传输需要两个 RTT ，接下来可以通过 Session Resumption 减少到一个 RTT。</li><li>在 TLS 中使用了两种加密技术，分别为：对称加密和非对称加密。</li></ul><h3 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h3><ul><li>对称加密就是两边拥有相同的秘钥，两边都知道如何将密文加密解密。</li><li>这种加密方式固然很好，但是问题就在于如何让双方知道秘钥。因为传输数据都是走的网络，如果将秘钥通过网络的方式传递的话，一旦秘钥被截获就没有加密的意义的。</li></ul><h3 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h3><ul><li>有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道。</li><li>这种加密方式就可以完美解决对称加密存在的问题。假设现在两端需要使用对称加密，那么在这之前，可以先使用非对称加密交换秘钥。</li><li>简单流程如下：首先服务端将公钥公布出去，那么客户端也就知道公钥了。接下来客户端创建一个秘钥，然后通过公钥加密并发送给服务端，服务端接收到密文以后通过私钥解密出正确的秘钥，这时候两端就都知道秘钥是什么了。</li></ul><h3 id="tls-握手过程如下图" tabindex="-1"><a class="header-anchor" href="#tls-握手过程如下图" aria-hidden="true">#</a> TLS 握手过程如下图</h3><p><img src="'+t+'" alt="图片"></p><ul><li>客户端发送一个随机值以及需要的协议和加密方式。</li><li>服务端收到客户端的随机值，自己也产生一个随机值，并根据客户端需求的协议和加密方式来使用对应的方式，并且发送自己的证书（如果需要验证客户端证书需要说明）</li><li>客户端收到服务端的证书并验证是否有效，验证通过会再生成一个随机值，通过服务端证书的公钥去加密这个随机值并发送给服务端，如果服务端需要验证客户端证书的话会附带证书</li><li>服务端收到加密过的随机值并使用私钥解密获得第三个随机值，这时候两端都拥有了三个随机值，可以通过这三个随机值按照之前约定的加密方式生成密钥，接下来的通信就可以通过该密钥来加密解密</li><li>通过以上步骤可知，在 TLS 握手阶段，两端使用非对称加密的方式来通信，但是因为非对称加密损耗的性能比对称加密大，所以在正式传输数据时，两端使用对称加密的方式通信。</li><li>PS：以上说明的都是 TLS 1.2 协议的握手情况，在 1.3 协议中，首次建立连接只需要一个 RTT，后面恢复连接不需要 RTT 了。</li></ul>',28),n=[r];function d(s,o){return l(),e("div",null,n)}const u=i(h,[["render",d],["__file","index.html.vue"]]);export{u as default};
