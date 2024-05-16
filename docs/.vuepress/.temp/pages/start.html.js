import comp from "D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/start.html.vue"
const data = JSON.parse("{\"path\":\"/start.html\",\"title\":\"文档\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"文档\"},\"headers\":[{\"level\":3,\"title\":\"文档\",\"slug\":\"文档\",\"link\":\"#文档\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"start.md\"}")
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
