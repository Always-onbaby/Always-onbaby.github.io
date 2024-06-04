# Get Started

This is a normal page, which contains VuePress basics.

## Pages

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

## Content

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file

<!-- provide 和 inject 依赖注入 要为后代组件提供数据，需要使用到provide选项
export default {
  provide: {
    message:"hello~"
  }
}
对于provide对象上的每一个属性，后代组件会用其key为注入名查找期望注入的值，属性的值就是要提供的数据。
如果我们需要提供依赖当前组件实例的状态，可以使用函数的形式来使用provide\
provide() {
  return {
    message: this.message
  }
}
-->
<!-- 有权 有势 有靠山 黑暗世界的一小部分 出入西门府 -->

<!-- 小时候是没有可看的书籍供我们阅读，不知道怎么打发大把的时间，主要任务是放牛，但是放牛吧，你只要把牛赶出来，基本上都不需要管啥事，一般中午或者晚上回家的时候顺便把牛赶回家就行了。有时候甚至家里牛都自己回家了（跟着牛群一起，到了家门口的话自然就回家了）。所以还是有大把时间不知道干嘛，上树捉鸟，下河泡澡，下雨的时候田里，沟里捞鱼，中午顶着大太阳去给抓回的鸟找食物，什么蚱蜢，蛤蟆，蚯蚓都整过，虽然挺丰富多彩，但是没什么深度，玩了就是玩了，没有可匹配的文字感悟和对比，根本不知道别人是怎么玩的，度过这童年的，以及这是一种怎么样珍贵的时节，有什么不一样，总之就是浑浑噩噩瞎玩。

现在想想，那是怎样珍贵的时节哦，夏天放牛的时候找个阴凉的地方一窝，搞本书无忧无虑的可以看一整天。冬天就更好玩了，找个稻谷草垛往里面一钻，又暖和又安逸，再有一本书，武侠小说也好，名著也好，真真的美滋滋啊。

可惜啊，回不去回不去了。

现在书倒是有了，电子书。纸质书一大堆，没那个时间看（早七点出发上班，晚上9点到家），没那个精力看（一天的工作已经整的精疲力尽了，有时候还吵个架，担心这担心那的，父母身体，小孩身体，学习，房贷，工资发了立马得还信用卡，一堆事），也没那个环境 -->

<!-- 还是尽量找点碎片时间去看，礼拜六，礼拜天啥的，刷抖音的时候，玩游戏的时候。还有就死尽量引导小孩去体会阅读，认识到知识的力量，意识到阅读的快乐。 -->

<!-- 嘴欠 街上卖炊饼的五大的媳妇 navBar sideBar -->

<!-- 经济独立腰杆直 权利的迷药 -->

<!-- onLoad(async(options)  => {
  const _options = await getOptions()
}) -->

<!-- 影像方面，iPhone 16 Pro系列将会配备4800万主摄、4800万超广角和1200万潜望长焦，支持5倍光学变焦，支持OIS光学防抖 -->
