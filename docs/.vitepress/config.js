import { defineConfig } from "vitepress";
import { getNavs } from "./nav";
import { getSidebar } from './sidebars/index'

var globalConfig = "每日一题";

export default defineConfig({
  lang: "zh-CN",
  base: "/",
  appearance: true,
  title: globalConfig,
  description: "VitePress is a Vite-powered static site generator",
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    siteTitle: globalConfig,
    logo: '/favicon.ico',
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2012-present DL",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lzdml",
      },
    ],
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "/Daily_Challenge/favicon.ico",
        },
      ],
    ],
    nav: getNavs(),
    sidebar: getSidebar()
  },
});
