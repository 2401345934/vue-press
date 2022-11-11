import { defineUserConfig, defaultTheme } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'
import sidebar from "./sidebar"

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Alan',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    backToTopPlugin(),
    searchPlugin({
      // 配置项
    }),
  ],
  base:'/vue-press/',
  theme: defaultTheme({
    sidebar,
    navbar: [
      // NavbarItem
      { text: "面试题", link: "/interview-questions/westore/principle/", activeMatch: '/interview-questions/' },
      { text: "源码", link: "/source/react/render/", activeMatch: '/source/' },
      { text: "utils", link: "/utils/utils/business-utils/", activeMatch: '/utils/' },
      { text: "工程师基本素养", link: "/basic-quality/http/http-https/", activeMatch: '/basic-quality/' },
      { text: "算法&数据结构", link: "/data-structures-algorithms/introduction/", activeMatch: '/data-structures-algorithms/' },
      { text: "工程化", link: "/engineering/npm/private/", activeMatch: '/engineering/' },
      { text: "工作工具", link: "/tool/compressed-image/", activeMatch: '/tool/' },
      { text: "vite-component-doc", link: "/my-vite-component/introduce/", activeMatch: '/my-vite-component/' },
      { text: "CHANGELOG", link: "/CHANGELOG/", activeMatch: '/CHANGELOG/' },
    ],
  }),
})
