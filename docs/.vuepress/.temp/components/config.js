import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.28_vuepress@2.0.0-rc.11/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_vuepress@2.0.0-rc.11/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_vuepress@2.0.0-rc.11/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/私有项目管理/博客文档/vuepress-starter/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.43_vuepress@2.0.0-rc.11/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
});
