// import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",

  title: "VuePress",
  description: "My first VuePress Site",
  theme,

  bundler: viteBundler(),
});
