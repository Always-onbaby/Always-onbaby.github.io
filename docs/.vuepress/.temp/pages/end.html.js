import comp from "D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/end.html.vue"
const data = JSON.parse("{\"path\":\"/end.html\",\"title\":\"简介\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"简介\"},\"headers\":[{\"level\":3,\"title\":\"文档2\",\"slug\":\"文档2\",\"link\":\"#文档2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"end.md\"}")
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
