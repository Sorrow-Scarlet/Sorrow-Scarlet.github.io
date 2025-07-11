import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown:{
    // 代码块行号显示
  lineNumbers: true,
    // 图片懒加载
  image: {
    lazyLoading: true },
  },
  cleanUrls: true,
  title: "忧的主页",
  description: "主页",
  lang: 'zh-Hans',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    vite: {
    publicDir: './public/'
    },
  srcDir: "",//等下需要新建一个目录，统一放这里
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  ignoreDeadLinks: true, //忽略死链查询，即文档中嵌入的一些链接无法访问也不会导致站点报错
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: 
    {
      provider: "local", //启用vitepress本身的搜索
    },
    lastUpdatedText: "最后更新", // string
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: "深色模式",
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    outlineTitle: "页面内容",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    logo: "/logo.png",
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回主页",
  },
    sidebar: generateSidebar({
      // VitePress Sidebar's options here...
          // 侧边栏的根目录，默认为docs
      documentRootPath: "/docs",
      // 使用h1的标题作为侧边栏的标题
      useTitleFromFileHeading: true,
      // 使用文件夹的index.md
      useFolderTitleFromIndexFile: true,
      // 指向文件夹的链接
      useFolderLinkFromIndexFile: true,
      // 根据md文件的order进行排序
      sortMenusByFrontmatterOrder: true,
      // 排序之后将不是文件夹的放后面
      sortFolderTo: "top",
      // 菜单展开功能
      collapsed: false,
      includeFolderIndexFile: false,
    }),

    nav: [
      { text: '首页', link: '/' },
      { text: '空调', link: '/新奇小玩应/airconditioner' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sorrow-Scarlet' },
      { icon:'bilibili', link: "https://space.bilibili.com/47130830"}
    ],
        footer: {
      message: '许可协议<a href="https://github.com/Sorrow-Scarlet/Sorrow-Scarlet.github.io/blob/main/LICENSE">GPL-V3',
      copyright: 'Copyright © 2025 幻梦·忧',
    }
  }
})


