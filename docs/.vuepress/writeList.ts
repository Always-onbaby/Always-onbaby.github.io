export const homeList = [
  {
    label: "链接视频下载",
  },
];

export const getList = () => {
  const _list: any = [];
  // @ts-ignore
  const globModules = import.meta.glob("../javaScript/**/*.md", {
    // raw 以字符串的资源加载 ， url 显示加载资源为一个url。不指定在build的时候会报错
    query: "raw",
  });

  for (const [key, value] of Object.entries(globModules)) {
    const name = key.slice(key.indexOf("/javaScript"), key.lastIndexOf("."));
    const _name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
    _list.push({
      label: _name,
      link: `${name}.html`,
      time: new Date().getTime(),
    });
  }
  return _list;
};
