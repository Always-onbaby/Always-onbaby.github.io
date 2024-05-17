import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("OtherComponent", defineAsyncComponent(() => import("D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/components/OtherComponent.vue")))
  },
}
