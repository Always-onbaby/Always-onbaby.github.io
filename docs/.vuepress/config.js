// import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import theme from "./theme";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  lang: "zh-CN",

  title: "BLOG",
  description: "My first VuePress Site",
  theme,

  bundler: viteBundler({
    
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
  // plugins: ['@vuepress/register-components',{
  //   // componentsDir: 'components'
  //   components: [
  //     {
  //       name: 'OtherComponent',
  //       path: './components/OtherComponent.vue'
  //     }
  //   ]
  // }]
  // clientConfigFile: path.resolve(__dirname, "./enhance/clientConfig.ts"),
});
