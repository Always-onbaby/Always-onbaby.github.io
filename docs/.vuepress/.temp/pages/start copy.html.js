import comp from "D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/start copy.html.vue"
const data = JSON.parse("{\"path\":\"/start%20copy.html\",\"title\":\"Start\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Start\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"start copy.md\"}")
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
