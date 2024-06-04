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

<!-- 动态组件，有些场景会用到多个组件来回切换的场景，比如Tab界面 -->

<!-- 确保在实际开发中，我么可以使用到这些技巧和总结的方式方法。比如Tab界面，无望东西 -->

<!-- 就是玩物 ，有些可以玩一辈子，有些也就玩玩过过新鲜劲 -->

<!-- 给到大前端进阶学习曲线 和知识汇总以及需要掌握的基础八股和资料 下场给主家敬酒 -->

```vue
<component :is="tabs[currentTab]">
```

在上面的示例中，被传给`:is`的值可以是以下几种情况

- 被注册的组件名
- 导入的组件对象

当使用`<component :is="">`在多个组件间作切换时。被切换掉的组件会被卸载。可以使用<KeepAlive>组件阿里强制被切换掉的组件仍然保持存货状态。

`<script type="text/x-template"></script>`
