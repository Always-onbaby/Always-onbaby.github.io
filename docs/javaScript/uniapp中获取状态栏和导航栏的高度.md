#### 在 uniapp 中获取状态栏和导航栏的高度

在微信小程序中，可以使用 `uni.getSystemInfo()` 方法获取设备的系统信息，包括状态栏的高度和顶部导航栏的高度。您可以使用这些信息计算顶部图标距离。
下面是一个示例代码，展示如何在 UniApp 中获取顶部图标距离

```js
uni.getSystemInfo({
  success: (res) => {
    // 获取手机顶部状态栏的高度
    const statusBarHeight = res.statusBarHeight || 0;

    // 获取导航栏的高度（手机状态栏高度 + 胶囊高度 + 胶囊的上下间距）
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    const navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 2;

    // 计算顶部图标距离
    const topIconDistance = statusBarHeight + navBarHeight;

    // 打印顶部图标距离
    console.log("顶部图标距离:", topIconDistance);
  },
  fail: (err) => {
    console.error("获取系统信息失败:", err);
  },
});
```
