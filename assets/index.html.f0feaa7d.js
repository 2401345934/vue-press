import{_ as l,z as e,A as i,a6 as t}from"./framework.fef63301.js";const a={},c=t('<h1 id="模版解析总结" tabindex="-1"><a class="header-anchor" href="#模版解析总结" aria-hidden="true">#</a> 模版解析总结</h1><ul><li>模版解析是 vue 编译过程的第一步 把 template 解析生成 AST对象</li><li>整个解析过程是一个自顶向下的分析过程 <ul><li>也就是从代码开始根据当前解析的上下文 通过分析词法来分析当前的代码</li><li>并找到对应的解析处理逻辑 创建 AST 节点</li></ul></li><li>过程中 可能会遇到元素节点的解析存在递归解析子节点的情况 <ul><li>其实就是 树的深度遍历和解析过程</li><li>解析过程中不断前进代码 更新解析上下文 根据生成的 AST 节点数组创建 AST 根节点</li></ul></li><li>最后还会处理空白字符 删除 合并一些空白字符</li><li>已经在生产环境下删除注释节点 提升后续的编译效率</li></ul>',2),n=[c];function r(o,s){return e(),i("div",null,n)}const d=l(a,[["render",r],["__file","index.html.vue"]]);export{d as default};
