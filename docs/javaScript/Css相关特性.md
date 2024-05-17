#### 设置选择底色

```
::selection {
  background-color: yellow; /* 设置选择文本的背景色 */
  color: black; /* 设置选择文本的前景色（文字颜色） */
}
```

#### 设置滚动条样式

```
::-webkit-scrollbar {
    width: 8px;
    height: 0.5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    background: #469aed;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    border-radius: 10px;
    background: #fff;
}
```

#### 设置单行文本和多行文本的溢出显示

```
.single-line {
    white-space: nowrap; /* 防止换行 */
    overflow: hidden; /* 隐藏溢出部分 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
}

.multi-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* 控制显示的行数 */
}
```

#### 在 scss 中循环和变量的使用

```javascript
//定义变量 文本溢出样式，clamp到多少行溢出时显示缩略字符
@mixin text-clamp($clamp: 1) {
    text-overflow: ellipsis;
    white-space: normal;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $clamp;
    overflow: hidden;
    line-height: normal;
}

// 使用循环并使用scss变量
@for $i from 1 through 5 {
    .ellipsis-#{$i} {
        @include text-clamp($i);
    }
}

@for $i from 10 through 100 {
    .f#{$i} {
        font-size: #{$i}px;
    }
}
```

#### css 定义全局变量

```
.vip-theme {
    --primary: #1aad19;
    --primary-opacity: #e8f6e8;
    --primary-hover: #148a14;
    --primary-tips: #ecf8ec;
    --success: #48c978;
}
```
