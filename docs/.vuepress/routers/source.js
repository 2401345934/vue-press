export default [
  {
    text: 'React',
    children: [
      { text: '渲染控制', link: '/source/react/render/' },
      { text: '事件机制', link: '/source/react/event-mechanism/' },
      { text: '协调与调度 ', link: '/source/react/coordination-scheduling/' },
      { text: 'Hooks原理', link: '/source/react/hooks/' },
    ]
  },
  {
    text: 'Vue',
    children: [
      { text: 'Vue/整体设计', link: '/source/vue/vue-design/' },
      {
        text: 'Vue/组件',
        children: [
          { text: '组件的渲染流程', link: '/source/vue/component/vue-component-create/' },
          { text: '组件的更新流程', link: '/source/vue/component/vue-component-update/' },
          { text: '组件的实例', link: '/source/vue/component/vue-component-instance/' },
          { text: '组件的 props', link: '/source/vue/component/vue-component-props/' },
          { text: '组件的生命周期', link: '/source/vue/component/vue-component-life-cycle/' },
          { text: '异步组件', link: '/source/vue/component/vue-component-async/' },
        ]
      },
      {
        text: 'Vue/响应式原理',
        children: [
          { text: 'reactive API', link: '/source/vue/reactive-principle/reactive/' },
          { text: '依赖收集', link: '/source/vue/reactive-principle/dep-collection/' },
          { text: '派发通知', link: '/source/vue/reactive-principle/notification/' },
          { text: '响应式实现的优化 Vue3.2 版本', link: '/source/vue/reactive-principle/implementation-optimized/' },
          { text: 'ref', link: '/source/vue/reactive-principle/ref/' },
          { text: 'shallowReactive', link: '/source/vue/reactive-principle/shallowReactive/' },
          { text: 'readonly', link: '/source/vue/reactive-principle/readonly/' },
          { text: '响应式原理总结', link: '/source/vue/reactive-principle/conclusion/' },
        ]
      },
      {
        text: '计算属性 computed',
        children: [
          { text: 'computed API', link: '/source/vue/computed/computed/' },
          { text: '计算属性的运行机制', link: '/source/vue/computed/operation-mechanism/' },
          { text: '计算属性 computed总结', link: '/source/vue/computed/conclusion/' },

        ]
      },
      {
        text: '监听器 wacher',
        children: [
          { text: 'watch API 的实现原理', link: '/source/vue/watch/realize-principle/' },
          { text: '异步队列任务的设计', link: '/source/vue/watch/design/' },
          { text: 'watchEffect API', link: '/source/vue/watch/watchEffect/' },
          { text: '开发环境 侦听器调试', link: '/source/vue/watch/dev-debg/' },
          { text: '监听器总结', link: '/source/vue/watch/conclusion/' },
        ]
      },
      {
        text: '模版解析',
        children: [
          { text: '生成 AST', link: '/source/vue/parsing/create-ast/' },
          { text: '创建解析上下文', link: '/source/vue/parsing/resolving-content/' },
          { text: '解析子节点', link: '/source/vue/parsing/resolving-children/' },
          { text: '创建 AST 根节点', link: '/source/vue/parsing/create-root/' },
          { text: '模版解析总结', link: '/source/vue/parsing/conclusion/' },
        ]
      },
      // parsing
      {
        text: 'AST 转换',
        children: [
          { text: 'AST 转换', link: '/source/vue/ast-transform/ast-transform/' },
          { text: '创建 tramsform 上下文', link: '/source/vue/ast-transform/create-transform/' },
          { text: '遍历 AST 节点', link: '/source/vue/ast-transform/each-transform/' },
          { text: '静态提升', link: '/source/vue/ast-transform/hoist-static/' },
          { text: '创建根节点的代码生成节点', link: '/source/vue/ast-transform/create-root/' },
          { text: 'AST 转换总结', link: '/source/vue/ast-transform/conclusion/' },
        ]
      },
      {
        text: '生成代码',
        children: [
          { text: '生成代码', link: '/source/vue/create-code/1/' },
          { text: '创建代码生成上下文', link: '/source/vue/create-code/2/' },
          { text: '生成预设代码', link: '/source/vue/create-code/3/' },
          { text: '生成预设代码', link: '/source/vue/create-code/4/' },
          { text: '生成资源声明代码', link: '/source/vue/create-code/5/' },
        ]
      },
    ]
  },
]