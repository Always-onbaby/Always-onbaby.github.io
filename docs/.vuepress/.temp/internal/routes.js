export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HOME"} }],
  ["/start.html", { loader: () => import(/* webpackChunkName: "start.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/start.html.js"), meta: {"title":"文档"} }],
  ["/get-started-test/get-started-test.html", { loader: () => import(/* webpackChunkName: "get-started-test_get-started-test.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/get-started-test/get-started-test.html.js"), meta: {"title":"Get Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/end.html", { loader: () => import(/* webpackChunkName: "end.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/end.html.js"), meta: {"title":"简介"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
