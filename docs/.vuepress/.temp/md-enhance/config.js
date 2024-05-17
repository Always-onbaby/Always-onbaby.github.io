import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.11/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.43_markdown-it@14.1.0_vuepress@2.0.0-rc.11/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
