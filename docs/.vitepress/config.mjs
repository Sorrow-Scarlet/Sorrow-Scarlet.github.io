import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar";  

const vitepressSidebarOptions = {  
  documentRootPath: '/docs',  
  collapsed: false, //折叠组关闭
  collapseDepth: 2, //折叠组2级菜单
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: "_", //删除前缀的符号
};  

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
  srcDir: "",//等下需要新建一个目录，统一放这里
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
        sidebar: generateSidebar(vitepressSidebarOptions),  
    nav: [
      { text: '首页', link: '/' },
      { text: '空调', link: '/airconditioner' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sorrow-Scarlet' },
      {
        icon: 
        {
          svg: '',
        },
        link: "https://bilibili.com"
      }
    ]
  }

  
})
