import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown:{
    // 代码块行号显示
  lineNumbers: true,
    // 图片懒加载
  image: {
    lazyLoading: true,
      // 代码框内复制按钮的 title 提示
      },
    codeCopyButtonTitle: '复制',
      },
  
  title: "忧的主页",
  description: "主页",
  lang: 'zh-Hans',
  head: [['link', { rel: 'icon', href: '/.vitepress/public/favicon.ico' }]],
    vite: {
    publicDir: './public/'
    },
  srcDir: "",//等下需要新建一个目录，统一放这里
  // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
  lastUpdated: true, // string | boolean
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
    }),

    nav: [
      { text: '首页', link: '/' },
      { text: '空调', link: '/新奇小玩应/airconditioner' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sorrow-Scarlet' },
      {
        icon: 
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z"></path></svg>',
        },
        link: "https://space.bilibili.com/47130830"
      }
    ],
        footer: {
      message: '许可协议<a href="https://github.com/Sorrow-Scarlet/Sorrow-Scarlet.github.io/blob/main/LICENSE">GPL-V3',
      copyright: 'Copyright © 2025 幻梦·忧',
    }



  }

  
})


