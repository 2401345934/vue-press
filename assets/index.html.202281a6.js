import{_ as p,z as a,A as e,a6 as i}from"./framework.fef63301.js";const r={},h=i('<h1 id="迭代思维" tabindex="-1"><a class="header-anchor" href="#迭代思维" aria-hidden="true">#</a> 迭代思维</h1><h2 id="_1-0版" tabindex="-1"><a class="header-anchor" href="#_1-0版" aria-hidden="true">#</a> 1.0版</h2><p>师兄说，一开始的时候，我们整个支付系统只是电商系统中的小模块。就是这个代码量加起来不到一万行左右的支付模块，支持了我们早期所有的支付业务。</p><p>相应的，当时整个支付团队总共也就3到4个人。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b987ac82922e49578f23fae74da4bfed~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="工程师思维_19.jpg"></p><p>后来，随着业务的开展，我们需要建设更多的支付工具、对接更多的支付渠道，我们需要更复杂的支付工具运营能力，这个时候我们发现这个小模块已经不够用了。</p><p>更为要命的是，要在电商系统里开发支付模块，就必须让支付研发团队的项目节奏和电商研发团队保持一致，但这两个团队的研发节奏天然就是不同的。时间长了，在两个团队间项目协调带来的冲突时常发生，这不但影响了大家的研发效率，更糟糕的是，团队内的士气和团队间的友谊也受到了严重的伤害。</p><p>在电商系统里跑了大概1年多时间之后，大家实在不想在这个憋屈的支付模块里缝缝补补了。小小的身躯里塞满了本不属于它的复杂功能，为电商而定制、硬编码的逻辑俯拾即是，这应该是新人看到这个模块时的第一感受，再这样下去这个支付模块就要变成“巨婴”了！</p><p>忍无可忍之下，架构师们决定把整个支付模块从电商系统里搬出来，让他演变成一个独立的支付系统。值得一提的是，新建系统并不意味着老支付模块完全没有用了——新系统的设计经验都来自于老支付模块。</p><h2 id="_2-0版" tabindex="-1"><a class="header-anchor" href="#_2-0版" aria-hidden="true">#</a> 2.0版</h2><p>于是，到了第2年的时候，我们已经把所有的业务迁移到了新的支付系统上。在这个支付系统里，我们有收单模块、收银支付模块、账务模块、会员模块等等。随着规模的扩大，我们团队的人数也翻了倍。</p><p>新系统建立起来之后，支付系统已经有了一定的雏形，和电商拆分之后，团队的研发效率也得到了提升。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/287ac0d388f44247996854fceb183411~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="工程师思维_20.jpg"></p><p>说到这里，师兄吸了一口烟，说他自己就是在这个时候招进来的。</p><p>当然，我知道故事到这里并没有结束，否则刚来公司的我就不会看到系统满天飞的情况了。</p><p>果然，吐完烟圈之后，师兄继续说了下去：</p><p>大家在这个新系统里迭代了2年多时间。随着支付场景和支付渠道的增加，似曾相识的问题又出现了，我们发现就算是一个有着十几万代码的系统，也已经无法支持井喷般的业务需求了。何况当时我们的系统还是为自己的电商业务定制的，现在的它还不能作为产品服务外部商户。另外，负责研发不同模块的技术团队，也因为彼此的研发周期和风格不同而开始踩脚。</p><p>业务需求无法快速满足，研发效率再一次达到了瓶颈。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ae1becc03ef4bb48ca38dc9106667fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="抓狂.jpeg"></p><p>现在，这个巨大的单体支付系统承载了太多的东西，之前那种痛苦的感觉又回来了。</p><h2 id="_3-0版" tabindex="-1"><a class="header-anchor" href="#_3-0版" aria-hidden="true">#</a> 3.0版</h2><p>于是在支付系统建成的第三年年末春节之前，在慎重的论证（一群人开会吵了一周）之后，架构师们终于作出一个重要的决定——对这个庞大的单核支付系统做SOA拆分！</p><p>按照不同领域，我们将拆分出不同功能职责的系统。而SOA拆分之后的系统，其实就是之前在支付系统中的各个独立模块。当然，系统拆分之后，研发人员的数量自然又增加了不少。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d45ef7ca6f6441e81745e1ffb0e810f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="工程师思维_21.jpg"></p><p>可以看到，这些系统并非空想而来，它们继承了老支付系统的所有关键设计，最终组成了我入职时看到的这个罗马。</p><p>我想，如果我不曾问师兄，或者师兄未曾说起，谁会想到这么多系统组成的支付系统的前身尽然是一个只有几千行代码的模块呢？</p><p>最后，师兄拧灭烟头，转头看着我，一字一顿地说：</p><blockquote><p>罗马并非是一天建成的，罗马是一步步迭代出来的。</p></blockquote><p>甚至，一开始的时候，大家都没有想过要建一个罗马出来。</p><h2 id="迭代思维-1" tabindex="-1"><a class="header-anchor" href="#迭代思维-1" aria-hidden="true">#</a> 迭代思维</h2><h2 id="一点澄清" tabindex="-1"><a class="header-anchor" href="#一点澄清" aria-hidden="true">#</a> 一点澄清</h2><p><strong>首先，这里我们必须纠正这个浮躁时代存在的“急于求成、一夜暴富”的错误观念。</strong></p><p>“罗马并不是在一天建成的”。</p><p><strong>和故事中支付系统的建设过程一样，我们在工作中、生活中，没有什么事情是一蹴而就的。</strong></p><p>我们必须承认，绝大多数事情的发展都是渐进式地展开的。只是有些事情发展的非常慢，以至于在看到结果之前的很长一段时间里，我们都以为自己只是在重复着一件看似相同（其实不同的）事情。</p><p>很多时候，我们对新事物的学习过程都是这样的：</p><p>1）最开始的时候，我们做得磕磕绊绊，甚至连主要目标都完成得很勉强。</p><p>2）经过无数次尝试之后，我们会变得越来越熟练。除了能够闭眼轻松完成主要目标之外，就连之前无暇顾及的细节现在也可以被我们兼顾到了。</p><p>3）继续深入之后，我们可能还会遇到很多之前根本没有考虑到的状况，这会给我们看似重复的旅行带来很多惊喜（甚至惊吓）和新的体验，会促使我们重新审视这件事的内涵和外延，启发我们寻找新的思路和方法。</p><p>而这个过程所要用到的时间，虽然这里我只写了短短三句话，但实际却因事情的复杂度的不同而变化，可以是三小时、三天、三年、甚至三十年。</p><p>需要注意的是，哪怕只是短短的三小时，如果你在三小时里反复尝试了三千次，那就不是一蹴而就，而是渐进式的。</p><p>一蹴而就的事情一般都是一锤子买卖，渐进式的事情则需要千锤百炼。</p><h2 id="迭代思维的本质" tabindex="-1"><a class="header-anchor" href="#迭代思维的本质" aria-hidden="true">#</a> 迭代思维的本质</h2><p>理解了上面的内容，就不难理解迭代思维了。</p><p>所谓迭代思维就是一种快速试错的思维。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/347b88db87334dabaaf9abea353a4858~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="迭代思维.jpeg"></p><p>当我们要做一件事的时候，我们可以从这个事情的最基础版本（这里姑且称为1.0版）开始。</p><p>做完1.0版之后，我们要去收集和分析反馈，这个反馈可以是自己的主观感受也可以是他人的评价。</p><p>之后，按照反馈，我们可以为这件事情增加复杂度，把它升级到1.0版——这将是一个全新的版本。</p><p>然后依次类推：执行，收集反馈，增加复杂度，升级版本，直到产出的结果让我们（或者利益相关者）满意为止——这个让我们满意的版本就是迭代的最终版。</p><p>在这个过程中，我们要反复尝试，在每次尝试之中都可以为这件事情加入一些新的挑战或者做出一些新的优化，让一开始空洞而虚幻目标注入灵魂，让他渐变得丰满而现实，直到最后达成我们的目标。</p><p><strong>这个反复而渐进的过程，就是迭代过程。做事时使用这样的思维方式，就是迭代思维。</strong></p><p>实际上，迭代思维是我们的生物本能。</p><p>还记得小时候我们学走路时下意识表现出来的学习模式吗？不妨让我们回忆一下：一开始我们并不是在走路，而是在爬行，尝试站立，然后迭代。在掌握了平衡的技巧之后，我们才能开始蹒跚而行，这个过程自然免不了无数次跌倒，一开始走路的样子自然也非常笨拙，但是到最后我们总能站起来继续前进。</p><p>可以看到，当具体的目标和方法不是很明确，需要我们边做边学、在实践中实时地对目标和方法进行调整时，迭代思维就能发挥作用。</p><p>同时，考虑到投入成本，为了防止我们陷入迭代的无限循环而实际上已经无法再有突破的情况发生。在实际使用迭代思维时，我们必须设计好终止条件。</p><p>总的来说，迭代思维是一种我们与生俱来的本能思维，在目标和方法都不是很明确的复杂情况下，它要求我们一小步一小步地去尝试和改进，直至成功。</p><p>当然，在使用迭代思维之前，我们先要摒弃成人之后才学会的急功近利的心理趋向，保持平和的心态，重新回到最自然的状态——渐进地前进。</p><p>到这里，关于迭代思维的介绍就结束了。下一节，我们将会介绍一种应用了迭代思维的工具——PDCA循环。</p><h2 id="pdca循环" tabindex="-1"><a class="header-anchor" href="#pdca循环" aria-hidden="true">#</a> PDCA循环</h2><h2 id="什么是pdca循环" tabindex="-1"><a class="header-anchor" href="#什么是pdca循环" aria-hidden="true">#</a> 什么是PDCA循环</h2><p>PDCA循环首先由美国质量管理专家沃特·阿曼德·休哈特提出，而后由丰田的戴明推广，因此又称戴明环。</p><p>虽然原创于质量管理领域，但是几乎所有设计流程的场景都可以使用PDCA循环。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5eb6cbda57e8422b8f675637c7910ec4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="PDCA.jpeg"></p><p>PDCA循环一般会有多个周期（也就是迭代），在一个周期里，我们将我们将要做的事情分成四个阶段，即Plan（计划）、Do（执行）、Check（检查）和 Action（处理）。</p><ul><li><p>Plan（计划）：也即事前计划阶段。在这个阶段，我们一般需要回答具体做什么，具体怎么做以及做出什么结果（或者做到什么程度）。这个阶段可以把计划做得足够详细，这样在执行阶段就会很轻松。</p></li><li><p>Do（执行）：也即事中执行阶段。这个阶段主要按照计划进行实施，实施过程最好能有记录。如果你的计划足够详细，那么在这一步可以“无脑”执行。</p></li><li><p>Check（检查）：也即结果检查阶段，这个阶段需要对实际结果和预期结果进行检查和分析，哪里做的好？哪里做的不好？改进方案是什么？是否需要调整既定目标？检查的结果最好能形成报告。更重要的是，还要考虑当前的结果是否已经达到预期，判读是否停止迭代。</p></li><li><p>Action（处理）：在处理阶段，我们要参考检查阶段的报告，将已经符合预期的部分固化为标准流程，将对不符合预期部分的改进方案带入下一个迭代实施。</p></li><li><p>最后，继续执行下一次PDCA，以此类推，循环往复。</p></li></ul><p>可以看到，在每一次PDCA中都是有所改进的。如果能够严格执行PDCA循环，那么从理论上，当PDCA循环的次数达到一定的数量，我们一定可以趋于完美——这正是迭代思维的精髓所在。</p><h2 id="pdca的例子" tabindex="-1"><a class="header-anchor" href="#pdca的例子" aria-hidden="true">#</a> PDCA的例子</h2><p>为了更好地理解PDCA循环，这里列举三个比较典型的例子：</p><h3 id="例1" tabindex="-1"><a class="header-anchor" href="#例1" aria-hidden="true">#</a> 例1</h3><p>在公司里，我们经常在生产环境做线上变更，比如切库、FO演练等等。在变更之前，我会做一个简单的PDCA文档，内容大概如下：</p><blockquote><p>P：变更内容是什么？预期影响是什么？执行步骤是什么？怎么判断变更成功？出现问题的应对策略是什么？在什么时间实施变更？</p><p>D：按照计划中的执行步骤执行变更。</p><p>C：检查执行结果是否符合预期，比如变更时间是不是超了？变更过程中是不是出现了不在计划里的问题？如果不符合预期，哪里出了问题？解决方案又是什么？</p><p>A：形成标准变更流程，记录问题和解决方案，准备下一次变更。</p></blockquote><p>除了PDCA循环本身越做越好的好处之外，做这个PDCA文档还有如下两个好处：</p><blockquote><p>第一，有些变更操作步骤很多，人脑一定是靠不住的，此时这个PDCA文档就是我的操作手册，让我不至于在实际操作时手忙脚乱。</p><p>第二，有可能当天晚上我有事，无法去做变更，那么我只需要将这份PDCA文档交给替代我的人，他就可以几乎无脑地完成所有的操作。</p></blockquote><p>当然，因为这个PDCA主要是来指导执行的，所以这是一个执行式的PDCA，下面再举一个计划式PDCA的例子。</p><h3 id="例2" tabindex="-1"><a class="header-anchor" href="#例2" aria-hidden="true">#</a> 例2</h3><p>在写“工程师思维”的系列文章时，我也做了一个PDCA，大体如下：</p><blockquote><p>P：写“工程师思维”系列文章，以故事的方式分享我在公司学到的工程师思维，计划用半年时间写10篇左右，然后在网上发布（具体发布在哪里等等）。</p><p>D：实际写这10篇文章并发布（对于每篇独立的文字章，我也会有每篇文章的PDCA循环）</p><p>C：检查文章发布之后的效果，有多少朋友会阅读，哪篇文章最受欢迎等等。如果阅读量很少，为什么会这样？解决方案是什么？</p><p>A：形成写系列文章的标准流程。在本次PDCA中没有解决的问题，若有方案，带入下一个PDCA中去解决。</p></blockquote><p>可以看到，这是一个粗粒度的PDCA循环，这种周期很长而且每一个要素都比较笼统的PDCA循环，我把它称之为计划式的PDCA循环。</p><p>对于计划式的PDCA循环，我们应该把重点放在P阶段和C阶段。而在D阶段，我们可以建立单独的PDCA循环专门推进，比如，作为“工程师思维”中的其中一篇文章，你现在看到的这篇文章，它的写作过程对我来说就是在推进一个小的PDCA循环，这是一个执行式的PDCA循环。</p><h3 id="例3" tabindex="-1"><a class="header-anchor" href="#例3" aria-hidden="true">#</a> 例3</h3><p>那么，结合本文开头的故事，如果我们用PDCA循环的视角来看，建设一套庞大的支付系统需要怎么做呢？这里简单分析如下：</p><blockquote><p>P：建设一个支付系统，能够支持XX业务，支持XX支付工具，支付处理的TPS（每秒钟交易量）能够达到XXX。</p><p>D：投入资源，系统设计，估算工作量，编码，测试，发布上线（当然可能是分多次发布的。）</p><p>C：检查建设是否符合预期，能够支持XX业务吗？能够快速支持XX支付工具吗？不行？为什么？是目标变了还是功能没做好？后续的优化方案是什么？</p><p>A：沉淀建设经验、固化研发流程，将优化方案带入下一个PDCA循环。</p></blockquote><p>可以看到，一开始我们并没有打算要建设一个庞大复杂的系统，这一点并不在我们的计划里。</p><p>只是，在经过了几轮的PDCA循环之后，这个系统自然而然就变得庞大起来了，这也是一个意外的结果。</p><p>此时其实我们应该研究一下（别忘了，研究动作应该发生在C阶段）——为了达成我们的计划，我们真的需要这么复杂的系统吗？</p><h2 id="使用pdca的要点" tabindex="-1"><a class="header-anchor" href="#使用pdca的要点" aria-hidden="true">#</a> 使用PDCA的要点</h2><h3 id="_1-p阶段是重中之重" tabindex="-1"><a class="header-anchor" href="#_1-p阶段是重中之重" aria-hidden="true">#</a> 1）P阶段是重中之重</h3><p>从PDCA循环可以看到，P阶段制定计划的合理与否，方向正确与否，直接关系到后面DCA几个阶段的正确。</p><p>我们常说“做正确的事情，而不只是把事情做对。”P阶段的计划产出，基本就是在界定什么是正确的事情。在过去的研发生涯里，我见过开局一张图、没有带脑子的产品设计文档（PRD），也见过细节满满、思考深入的技术分析文档，前者简直就是灾难，而后者几乎可以让我们事半功倍。总之，作为一切的开始，P阶段非常非常非常的重要。</p><h3 id="_2-管理者和执行者" tabindex="-1"><a class="header-anchor" href="#_2-管理者和执行者" aria-hidden="true">#</a> 2）管理者和执行者</h3><p>如果你是管理者，那么在PDCA循环中，应该重点抓P阶段和C阶段。在计划阶段做好计划，让下属知道自己要干什么；在检查阶段做好检查（也就是我们常说的追结果），让下属直到你对结果的要求。</p><p>如果你是执行者，那么在PDCA循环中，应该重点抓D阶段和A阶段，尽力确保计划阶段和处理阶段的动作和管理者的意图能够没有偏差地执行下去。此外，你可以建立自己的PDCA循环来辅助自己的执行。</p><p>很多时候，管理者想要的东西和实际做出来的东西相去甚远，本质上就是PDCA循环没有执行到位——这就好像灵魂和肉体完全不在一个节奏上，南辕北辙，自然也就不可能指哪儿打哪儿。</p><p>以上，就是对PDCA循环的所有介绍，但是PDCA不能解决所有的问题，此时就需要另外一种迭代工具。</p><h2 id="ooda循环" tabindex="-1"><a class="header-anchor" href="#ooda循环" aria-hidden="true">#</a> OODA循环</h2><p>作为传统的迭代工具，PDCA适用于环境稳定、按部就班的事务处理场景。</p><p>然而，进入互联网时代之后，我们的工作和生活在快节奏中变得愈发不确定，每天我们都要处理各种突发事件，计划和方案刚作出来就面临着过期的窘境。</p><p>在这种瞬息万变的情况下，我们需要快速的反应和决策能力，此时死板的PDCA循环就不那么好用了。</p><p>在这种情况下，该怎么实践迭代思维呢？</p><p>幸好，我们还有OODA循环。</p><h2 id="什么是ooda循环" tabindex="-1"><a class="header-anchor" href="#什么是ooda循环" aria-hidden="true">#</a> 什么是OODA循环</h2><p>OODA循环出自信息战领域，发明者是美国陆军上校约翰·包以德，因而又被称为包以德循环。</p><p>在OODA循环的四个字母中代表四个不同的阶段：第一个O表示观察（Observe）、第二个O表示调整（Orient）、D代表决策（Decide），A代表行动（Act）。</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/826dc80dbfaa47f3a1e2b1940a9300b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="OODA.jpeg"></p><p>具体来说，OODA的每个阶段要做如下事项：</p><ul><li><p>观察阶段（O）：观察外部环境变化，观察对手情况变化，观察自身情况变化，获得观察数据。观察过程的要求是足够快，即便观察到的信息不完整也没关系，只要足够快，即便是不完整的信息也可以在下次观察时补充完整。</p></li><li><p>调整阶段（O）：根据观察的结果，对自己已经掌握的知识进行调整，产出后续的行动计划。这一步非常关键，需要我们借助观察结果调整和观察结果相冲突的历史知识（knowledge），对结果和知识匹配的情况进行加深。这一步的要求同样也是要快，因为在战场上，如果你能先于你的敌人发现信息和知识的差异，你就能抢占先机。这一步结束之后，你需要根据最新的知识产出一份计划行动列表。</p></li><li><p>决策阶段（D）：根据调整阶段产生的计划行动列表，结合自己的实际情况，选择一个（或多个）最优的计划执行。同样的，战场形势瞬息万变，决策过程的要求还是要快。</p></li><li><p>执行阶段（A）：按照决策的结果进行执行，执行后产生新的结果，开始下一个OODA。</p></li></ul><blockquote><p>OODA循环理论认为：武装冲突可以看作是敌对双方互相较量谁能更快更好地完成OODA循环。双方都要从观察开始，观察自己、观察环境和敌人。基于观察，获取相关的外部信息，根据感知到的外部威胁，及时调整系统，做出应对决策，并采取相应行动。</p></blockquote><h2 id="使用场景和例子" tabindex="-1"><a class="header-anchor" href="#使用场景和例子" aria-hidden="true">#</a> 使用场景和例子</h2><p><strong>OODA循环非常适合需要快速决策和快速推进的场景。</strong></p><p>比如，在我每天工作的环境中，除了自己提前安排好的任务之外，还需要处理大量的突发性事件。</p><p>这些突发性事件，可能是部门的同事突然拉起的会议（“我们聊到这里才想起来还需要找你看一下这个问题”），可能是业务突然插入的需求（“这个需求很着急，业务方希望明天就要上线，但是我帮你争取了三题时间”），也可能是锅从天降的线上故障（“这个故障，你们得订正一下数据。”）等等。在这种情况下，就非常适合使用OODA循环来处理一天的工作推进。</p><p>当然，OODA循环本来就是为了军事对抗而发明的：我的OODA循环快于你的OODA循环，我能打断你的OODA循环，我就能胜出。</p><p>所以，对于办公室政治这种风云诡局、瞬息万变的场景，OODA循环同样非常适用。比如，如何快速观察你的竞争对手明里暗里都做了什么好事？如何基于这些信息对政治风向进行判断并标记敌友，然后推导出下一步的行动计划？如何在众多行动选项中选出一个当下最好的行动？如何干扰或者打断对手的OODA循环等等。</p><p>在快节奏的场景中使用OODA循环的例子非常之多，读者可以自己开动脑筋寻找，这里不再列举。</p><p><strong>最后要说明的是，PDCA循环和OODA循环在使用时并不冲突。</strong> 二者适用的场景和作用的范围都不一样。PDCA适合按部就班的计划和稳扎稳打地推进，重在人和环境的对抗。而OODA适合瞬息万变的“战场局势”和灵活机动的应对能力，重在“人”和“人”、“公司”和“公司”的对抗。</p><p>在日常的工作和生活中，我们可以交替使用PDCA循环和OODA。如果是管理需要长期执行的日常工作和生活，那么PDCA循环一定是首选。如果在PDCA的实际执行阶段（D），我们发现自己所面对的是一个瞬息万变的环境，则可以切换到OODA循环。</p><h2 id="应用中的组合拳" tabindex="-1"><a class="header-anchor" href="#应用中的组合拳" aria-hidden="true">#</a> 应用中的组合拳</h2><p>本文是工程师思维的第四篇文章。截止到现在，我们已经介绍了四种工程师思维——灰度思维、复盘思维、根因思维、迭代思维。</p><p><strong>值得一提的是，这些思维工具并不是孤立出现的，一个经验丰富的工程师往往能够联合好几种思维工具、打出一套“组合拳”。</strong></p><p>比如，在PDCA循环中，D和A阶段涉及到实际操作，可以用到灰度思维，C阶段涉及到结果的检查和分析，可用结合复盘思维使用。</p><p>同样，在OODA循环中，D阶段可以配合灰度思维使用，A阶段可以配合灰度思维使用。</p><p>当然，“打组合拳”也是一件需要慢慢磨练和迭代的事情，这本身就可以使用迭代思维来优化。</p><h2 id="本章小结" tabindex="-1"><a class="header-anchor" href="#本章小结" aria-hidden="true">#</a> 本章小结</h2><p>胖子不是一口气吃出来的，罗马也不是一天建成的。工程师们解决问题，也不存在一蹴而就的说法。</p><p>过去所有的经验告诉我们，问题都是一点一点的解决的，优化也是一点一点的做出来的——这正是迭代思维的核心思想。</p><p>想要实践迭代思维，可以从实践两个迭代工具——PDCA循环和OODA循环开始。</p><p>前者适用于确定的环境和稳定的流程性事务——工程师的日常中几乎充满着这样的情况，你一定要学会PDCA循环。</p><p>而后者则适用于不确定的对抗性环境——当你发现自己身处一个瞬息万变的“战场环境”时，OODA循环一定会对你有所帮助。</p><p>当然，我们会看到，在PDCA循环和OODA循环里，都有出现了字母D（执行），这足以说明执行的重要性。</p><p><strong>因为，再好的计划和观察，如果最后不能指导执行的话，都只是没有意义的精神内耗。</strong></p><p>去做，一点一点的去做，去做，日复一日地去做。务实地做，笃定地做，忘我地做。</p><p>这，就是迭代思维。</p>',133),c=[h];function d(t,o){return a(),e("div",null,c)}const D=p(r,[["render",d],["__file","index.html.vue"]]);export{D as default};
