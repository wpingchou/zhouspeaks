export const redirects = JSON.parse("{\"/Flask+Vue+Element%20%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA.html\":\"/Flask_Vue_Element%20%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/\",\"/Vuepress+Vercel+Github%20%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2.html\":\"/Vuepress_Vercel_Github%20%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/\",\"/%E5%88%B0%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E5%8D%B3%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E8%BF%9C%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E4%B9%85%E6%9C%9F%E3%80%81%E5%87%B8%E6%80%A7.html\":\"/%E5%88%B0%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E5%8D%B3%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E8%BF%9C%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E4%B9%85%E6%9C%9F%E3%80%81%E5%87%B8%E6%80%A7/\",\"/%E5%8F%8C%E9%9A%9C%E7%A2%8D%E6%9C%9F%E6%9D%83(%E7%A6%BB%E6%95%A3%E8%A7%82%E5%AF%9F)%E2%80%94%E2%80%94%E8%A7%A3%E6%9E%90%E8%A7%A3.html\":\"/article/fjy78b6v/\"}")

export const routes = Object.fromEntries([
  ["/Flask_Vue_Element%20%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/", { loader: () => import(/* webpackChunkName: "Flask_Vue_Element 环境搭建_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/Flask_Vue_Element 环境搭建/index.html.js"), meta: {"title":"Flask+Vue+Element 环境搭建"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Vuepress_Vercel_Github%20%E5%85%8D%E8%B4%B9%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/", { loader: () => import(/* webpackChunkName: "Vuepress_Vercel_Github 免费搭建博客_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/Vuepress_Vercel_Github 免费搭建博客/index.html.js"), meta: {"title":"Vuepress+Vercel+Github 免费搭建博客"} }],
  ["/%E5%88%B0%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E5%8D%B3%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E8%BF%9C%E6%9C%9F%E6%94%B6%E7%9B%8A%E7%8E%87%E3%80%81%E4%B9%85%E6%9C%9F%E3%80%81%E5%87%B8%E6%80%A7/", { loader: () => import(/* webpackChunkName: "到期收益率、即期收益率、远期收益率、久期、凸性_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/到期收益率、即期收益率、远期收益率、久期、凸性/index.html.js"), meta: {"title":"到期收益率、即期收益率、远期收益率、久期、凸性"} }],
  ["/article/fjy78b6v/", { loader: () => import(/* webpackChunkName: "article_fjy78b6v_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/article/fjy78b6v/index.html.js"), meta: {"title":"双障碍期权(离散观察)——解析解"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"F:/vuepress-starter/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
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
