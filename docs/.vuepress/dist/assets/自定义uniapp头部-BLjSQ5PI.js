const n=`#### 自定义 uniapp 头部

\`\`\`html
<template>
  <view>
    <view v-if="isStatusBar" class="status-bar" :style="'height:' + statusBarHeight + 'px'">
      <!-- 状态栏背景,设置为不透明 -->
    </view>
    <view v-if="isFixed && isOccupy" class="top-header" :style="'height:' + topHeight + 'px'">
      <!-- 头部占位 -->
    </view>
    <view v-else-if="isStatusBar" class="top-header" :style="'height:' + statusBarHeight + 'px'">
      <!-- 状态栏占位 -->
    </view>
    <!-- 头部	 -->
    <view class="nav-bar flex" :class="{ activeIsFixed: isFixed }" :style="getNavBarStyle">
      <view class="back flex" v-if="isBack" @click="back" :style="iconWH">
        <view class="iconfont icon-31fanhui1"></view>
      </view>
      <view class="left flex" v-else-if="!onlyCenter" @click="leftClick" :style="iconWH">
        <slot name="left"></slot>
      </view>
      <view class="center flex" :class="isOnlyCenter" :style="'height:' + navbarHeight + 'px'">
        <slot></slot>
      </view>
      <view class="right flex" @click="rightClick" v-if="!onlyCenter" :style="iconWH">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script>
  /**
   * NavBar 自定义头部
   * @description 头部组件，主要用于头部导航
   * @property {Number, String} color 图标和文字颜色
   * @property {String} isBack 是否显示返回按钮
   * @property {Boolean} isFixed  是否固定顶部
   * @property {Boolean} onlyCenter  是否只显示中间部分
   * @property {String} bgColor  背景颜色
   * @property {Number} opacity 背景透明度
   * @property {Boolean} isOccupy 固定时默认占位
   * @property {Boolean} isStatusBar 默认包含系统状态栏
   * @property {Boolean} isSplitLine 头部分割线
   * @property {String} splitLineColor 头部分割线颜色
   * @property {Number} splitLineHeight 头部分割线高度
   * @property {String} styleSelf 自定义样式
   * @event {Function} back 返回
   * @event {Function} leftClick 左侧点击事件
   * @event {Function} rightClick 右侧点击事件
   */
  export default {
    name: "Header",
    data() {
      return {
        // 状态栏高度
        statusBarHeight: 0,
        // 状态栏加头部高度
        topHeight: 0,
      };
    },
    props: {
      // 头部高度
      navbarHeight: {
        type: [Number, String],
        default: 42,
      },
      // 显示返回按钮
      isBack: {
        type: [Boolean, String],
        default: false,
      },
      // 是否固定定位
      isFixed: {
        type: [Boolean, String],
        default: true,
      },
      // 是否只显示中间部分
      onlyCenter: {
        type: [Boolean, String],
        default: false,
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: "",
      },
      // 背景透明度
      opacity: {
        type: [Number, String],
        default: 1,
      },
      // 固定时默认占位
      isOccupy: {
        type: [Boolean, String],
        default: true,
      },
      // 默认包含系统状态栏
      isStatusBar: {
        type: [Boolean, String],
        default: true,
      },
      // 头部分割线
      isSplitLine: {
        type: [Boolean, String],
        default: true,
      },
      // 头部分割线颜色
      splitLineColor: {
        type: String,
        default: "#CCCCCC",
      },
      // 头部分割线高度
      splitLineHeight: {
        type: [Number, String],
        default: 1,
      },
      // 字体颜色
      color: {
        type: String,
        default: "",
      },
      // 自定义样式
      styleSelf: {
        type: String,
        default: () => {
          return "";
        },
      },
    },
    mounted() {
      this.getSystemInfo();
    },
    computed: {
      // 中间部分样式
      isOnlyCenter() {
        return this.onlyCenter ? "onlyCenter" : "";
      },
      // 头部样式
      getNavBarStyle() {
        let splitLine = this.isSplitLine ? \`border-bottom: \${Number(this.splitLineHeight)}px solid \${this.splitLineColor};\` : "";
        let top = this.isFixed ? \`top:\${Number(this.statusBarHeight)}px;\` : "";
        let bgColor = Number(this.opacity) === 0 ? "" : \`background-color:\${this.bgColor};\`;

        return \`height:\${Number(this.navbarHeight)}px;
				line-height:\${Number(this.navbarHeight)}px;
				background:rgba(255,255,255,\${Number(this.opacity)});
				color:\${this.color};
				\${bgColor}\${top}\${splitLine}\${this.styleSelf}\`;
      },
      iconWH() {
        return \`width: \${this.navbarHeight}px;height: \${this.navbarHeight}px;\`;
      },
    },
    methods: {
      // 返回
      back() {
        uni.navigateBack();
      },
      rightClick() {
        this.$emit("rightClick");
      },
      leftClick() {
        this.$emit("leftClick");
      },
      //获取状态栏高度
      getSystemInfo() {
        uni.getSystemInfo({
          success: (res) => {
            this.statusBarHeight = res.statusBarHeight;
            let navbar = this.navbarHeight;
            // #ifdef MP-WEIXIN
            // 胶囊居中
            const custom = wx.getMenuButtonBoundingClientRect();
            navbar = custom.height + (custom.top - res.statusBarHeight) * 2;
            // #endif
            if (!this.isStatusBar) this.statusBarHeight = 0;
            this.topHeight = this.statusBarHeight + navbar;
          },
        });
      },
    },
  };
<\/script>

<style scoped>
  .flex {
    display: flex;
  }

  .status-bar {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #ffffff;
    opacity: 1;
  }

  .nav-bar {
    font-size: 16px;
    width: 100vw;
  }

  .back,
  .left,
  .right {
    align-items: center;
    justify-content: center;
  }

  .center {
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .top-header {
    position: relative;
    top: 0;
    width: 100%;
  }

  .activeIsFixed {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 99;
  }

  .activeBgColor {
    border: solid 1px transparent;
    background-image: linear-gradient(#ffffff, #ffffff), linear-gradient(to right, #ff007f 0%, #00a0e9 100%);
    border-radius: 25px;
    background-clip: content-box, border-box;
    background-origin: border-box;
  }

  .onlyCenter {
    margin: 0 10px;
  }
</style>
\`\`\`
`;export{n as default};
