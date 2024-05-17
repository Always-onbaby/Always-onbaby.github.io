import comp from "D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/get-started-test/index.html.vue"
const data = JSON.parse("{\"path\":\"/get-started-test/\",\"title\":\"Get Started Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Get Started Test\",\"article\":false,\"feed\":false,\"sitemap\":false},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
