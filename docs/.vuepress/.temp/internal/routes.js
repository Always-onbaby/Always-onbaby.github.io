export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/end.html", { loader: () => import(/* webpackChunkName: "end.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/end.html.js"), meta: {"title":""} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HOME"} }],
  ["/start.html", { loader: () => import(/* webpackChunkName: "start.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/start.html.js"), meta: {"title":"文档"} }],
  ["/get-started-test/get-started-test.html", { loader: () => import(/* webpackChunkName: "get-started-test_get-started-test.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/get-started-test/get-started-test.html.js"), meta: {"title":"Get Started"} }],
  ["/javaScript/javaScript.html", { loader: () => import(/* webpackChunkName: "javaScript_javaScript.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/javaScript/javaScript.html.js"), meta: {"title":""} }],
  ["/javaScript/px%E5%92%8Crpx%E7%9A%84%E8%BD%AC%E5%8C%96.html", { loader: () => import(/* webpackChunkName: "javaScript_px和rpx的转化.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/javaScript/px和rpx的转化.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/私有项目管理/博客文档/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
