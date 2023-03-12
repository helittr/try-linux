import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { defaultTheme } from 'vuepress';
import { nprogressPlugin } from '@vuepress/plugin-nprogress';

export default defineUserConfig({
  lang: "zh-CN",
  title: "Try-Linux",
  description: "Try-Linux 文档",
  base: "/try-linux/",
  theme: defaultTheme({
    logo: null,
    repo: 'https://github.com/helittr/try-linux',
    colorModeSwitch: true,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '开始使用',
        link: '/use/',
      },
      {
        text: '项目',
        link: '/project/',
      },
      {
        text: '学习内核',
        link: '/learn/',
      }
    ],
    sidebar: [
      '/README.md',
    ],
    editLink: true,
    docsBranch: 'master',
    docsDir: 'doc',
    lastUpdatedText: '上一次更新文档',
    contributors: true,
    notFound: ["Not found", '页面不存在'],
  }),

  plugins: [
    searchProPlugin({
      indexContent: true,

      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    nprogressPlugin(),
  ],
  markdown: {
    linkify: true,
  }
});
