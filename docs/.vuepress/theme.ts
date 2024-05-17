// import { hopeTheme } from "vuepress-theme-hope";
import { defaultTheme } from "@vuepress/theme-default";

// 我们默认导出了主题对象
export default defaultTheme({
  // 主题配置
  home: "/",
  logo: "https://vuejs.press/images/hero.png",

  // navbar: ['/', "/get-started", "/end", "/start"],
  navbar: [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "get-started",
      link: "/get-started",
    },
    {
      text: "end",
      link: "/end",
    },
    {
      text: "常见问题",
      children: [{ text: "JavaScript", link: "/javaScript/javaScript" }],
    },
  ],
});
