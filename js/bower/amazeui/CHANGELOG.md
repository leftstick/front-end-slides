# Amaze UI Change Log
---

### 2014.12 W1

**CSS**:

- `IMPROVED` #277 Icon Font HTTPS 支持；
- `CHANGED` #284 移除 `::selection` 样式，避免日文输入文字不显示问题。

**JS**:

- `FIXED` #165 部分浏览器中 Dropdown 收回去时闪烁问题。 



## Amaze UI 2.0.0-beta1

### CSS

#### 基础变化

- 移除所有标准属性的浏览器前缀，构建的时候通过 AutoPrefixer 添加；
- 部分组件中开始使用 Flexbox，兼容 IE 9 的样式独立到 `legacy.ie.less`。

#### 网格

- `CHANGED` #112 重命名网格 class，`{break-point}-col-{n}` -> `.am-u-{break-point}-{n}`;

#### 等分网格

- `CHANGED` #112 重命名等分网格 class，`{break-point}-block-grid-{n}` -> `.am-avg-{break-point}-{n}`;

#### 图片

- `CHANGED` 移除 `.am-img-bdrs`，使用 `.am-radius` 替代；
- `CHANGED` 移除 `.am-img-circle`，使用 `.am-circle` 替代。

#### 表格 Table

- `CHANGED` `.am-table-bd` 重命名为 `.am-table-bordered`；
- `CHANGED` `.am-table-bdrs` 重命名为 `.am-table-radius`；
- `NEW` 单元格状态更多颜色。

#### 评论列表 Comment

- `IMPOROVED` 头像大小调整为响应式，在小屏幕上头像变小；
- `NEW` 增加评论操作（编辑、删除等）样式。

#### 缩略图 Thumbnail

- `NEW` 增加缩略图列表样式 `.am-thumbnails`。

### JS

- `CHANGED` 使用 jQuery 替代 Zepto.js；
- `REMOVED` 不再使用 Sea.js；
- `CHANGED` 所有模块接口通过 `$.AMUI` 暴露，部分插件添加到 `$.fn`；
- `CHANGED` 自定义事件命名由 `:` 分隔符改为 `.` 分隔符；
- `IMPROVED` 调整部分代码以兼容 jQuery 及 IE 9；
- `NEW` #70 Slider 增加初始化接口及用户操作间隔一段时间以后恢复自动播放选项。

### Web 组件

- `IMPROVED` Menu、Header 按钮尺寸增大，更容易点击；
- `REMOVED` 删除搜狐畅言组件。

### 2014.11 W2

__CSS__：

- `CHANGED` #112 重命名等分网格 class，`{break-point}-block-grid-{n}` -> `.am-avg-{break-point}-{n}`;

## Amaze UI v1.0.0 （2014.10.28）

### 2014.10 W4

__JS插件__：

- `FIXED` #164 Alert 插件 closed:alert:amui 自定义事件未触发；
- `FIXED` #163 Pureview 插件在 Firefox 桌面版异常。

### 2014.10 W3

__CSS__：

- `IMPROVED` 分页组件添加 `.am-disabled` 后移除所有事件（`pointer-events: none;`）；

__Web 组件__：

- `FIXED` #155 修复 Accordion 一个页面中多个共存问题。


## Amaze UI v1.0.0-rc1

### 2014.10 W3

__JS插件__：

- `IMPROVED` #131 window `resize` 时关闭 OffCanvas；
- `NEW` Tabs 增加 tab 文字无法选择的说明。

__Web 组件__：

- `NEW` #144 Footer 增加关闭添加到桌面图标接口。

### 2014.10 W2

- 重新梳理代码规范，根据代码规范整理代码；
- 添加 JS 代码质量检测设置；


__JS插件__：

- `IMPROVED` 更新 Add2Home 至 `3.0.8`；
- `IMPROVED` 更新 iScroll 至 `5.1.3`；
- `FIXED` 修复 Share 插件中严格模式报错；

### 2014.10 W1

__CSS__：

- 增加 OSX 平台 Firefox(25+) 字体平滑样式；

__JS插件__：

- `NEW` Modal 增加宽度响应，视口大于 640 时，modal 的窗口的宽度显示为 540px；
- `IMPROVED` #79 OffCanvas 调整；
- `IMPROVED` #119 PureView loading 图标 z-index 调整，兼容渣浏览器；
- `IMPROVED` #120 PureView 图片容器 flexbox 样式调整，兼容渣浏览器。

__Web 组件__：

- `NEW` Header 增加固定顶部样式。
- `FIXED` 修复 Figure、Gallery、Paragraph 图片查看变形， via #120 #119


### 2014.09 W5

- `NEW` 文档标题添加链接按钮；
- `FIXED` #103 #17 Modal 关闭打开/关闭时间间隔过短操作失效问题；
- `NEW` FastClick 升级到 `1.0.3`；
- `IMPROVED` 调整 FastClick 加载模式，解决在 Chrome 模拟器中链接不能点击的问题；

## Amaze UI v1.0.0-beta2

### 2014.09 W4

#### Build 文件

- 文件名与项目名称统一；
- 增加 `basic`、`widgets` 两个版本供用户选择；
- 上传到 [http://staticfile.org/](http://staticfile.org/)，搜索 amazeui 查看相关文件链接。

#### 官网

- 优化左侧菜单固定效果，菜单高度超过窗口高度时增加滚动条。

#### CSS

- 重新样式梳理 `z-index`；

__Button__：

- `NEW` 增加圆角和直角样式；
- `IMPROVED` 按钮样式细节调整。

__Button Group__：

- `CHANGED` 使用 `flexbox` 实现按钮等分。

__Comment__：

- 尖角样式细节调整。

__Form__：

- `CHANGED` 调整 `select` 样式。

__Input Group__：

- `NEW` 增加不同颜色样式；
- `IMPROVED` 处理不同尺寸垂直对齐问题。


#### JS 插件

__Button__：

- `NEW` 增加 loading 文字设置接口；
- `NEW` 增加 reset 文字设置接口；
- `NEW` 增加 spinner 设置接口。

__Modal__：

- `IMPROVED` #2 解决打开/关闭时窗口抖动问题；
- `FIXED` #1 解决 Firefox transitionend 事件处理问题（Firefox bug，参见 http://codepen.io/harryfino/full/jphis ）。

__PureView__：

- `NEW` 增加获取大图选项，可以通过 `a` 的 `href` 或者 `img` 的 `data-rel` 获取大图地址；
- `NEW` 是否显示分享按钮选项；
- `NEW` 增加在微信中打开时调用微信图片查看器选项；
- `NEW` 增加图片 Loading 图标；
- `IMPROVED` 解决打开/关闭窗口抖动问题；
- `IMPROVED` 解决图片比例失调问题。

__Sticky__：

- `CHANGED` #90 底部边距计算逻辑有问题，暂时取消。

__Tabs__：

- `IMPROVED` #96 改进触控事件处理逻辑，避免标签中有 DOM 元素时触控失效问题。


#### Web 组件

- 重新样式梳理 `z-index`；

__Figure、Paragraph__：

- 移除遗留的无用的样式。

__Figure__：

- `NEW` `data-rel` 接口，可以设置大图路径；

__Gallery__：

- `NEW` `data-rel` 接口，可以设置大图路径；
- `IMPROVED` PureView 调用逻辑增强，判断是否设置了 PureView 的选项。


### 2014.09 W3

#### CSS

__Badge__：

- `NEW` 增加圆角和直角样式。

__Pagination__：

- `NEW` 增加居中、右对齐样式。

__Topbar__：

- `NEW` 增加顶部/底部固定样式。

#### JS 插件

__Dropdown__:

- `IMPROVED` #78 增加上拉效果，调整尖角样式；
- `NEW` #77 增加 `boundary` 选项，判断边界；
- `NEW` 增加 `justify` 选项，可以设置下拉内容宽度参照对象。

__Smooth Scroll__:

- `IMPROVED` #35 兼容性增强；
- `NEW` 增加 `speed` 选项。

__Sticky__：

- `IMPROVED` 动态获取元素的宽高，支持响应式；
- `IMPROVED` 解决 #55 中的问题；
- `NEW` 使用占位符包裹元素，避免窗口抖动问题；
- `NEW` 增加 `media` 选项，可以设置 Media Query；
- `NEW` 增加 `bottom` 选项。

__ScrollSpyNav__:

- `FIXED` 链接点击失效问题。

__Popover__：

- `IMPROVED` 每次打开时重新计算弹出层的位置，减少位置偏移问题；
- `IMPROVED` 增加 `focus` 触发；
- `IMPROVED` 样式调整。

__Progress__：

- `CHANGED` 样式主色调整为绿色。

#### Web 组件

__Gotop__：

- `IMPROVED` #6 兼容 Firefox；
- `NEW` `fixed` 主题根据滚动条位置自动显隐。

__Menu__：

- `IMPROVED` #73 调整触发按钮高度。

__Tabs__：

- `IMPROVED` #72 使用 `flexbox` 实现均分，提高微信 webview 兼容性。


### 2014.09 W2

__CSS__：

- `IMPROVED` Close 增加使用 Icon Font 的样式；
- `IMPROVED` Comment 样式调整：采纳网友建议（感谢 [@麦田一根葱](http://www.yuxiaoxi.com/)、[@老黄](http://amazeui.org/css/comment)），增加内容左右对齐；更多高亮颜色；
- `NEW` Utility 增加 `.am-angle` 尖角样式。

__JS 插件__：

- `IMPROVED` 使用 [hammer.js](https://github.com/hammerjs/hammer.js)，移除 Zepto.js touch 扩展；
- `IMPROVED` Tabs、PureView 使用 hammer.js；
- `IMPROVED` AddToHomeScreen 升级至 `3.0.7`；
- `CHANGED` 删除 TouchGallery 插件；
- `FIXED` Tabs 修复标签里包含其他元素点击失效问题；
- `IMPROVED` Tabs 没有设置或者多个标签设置了激活状态时默认激活第一个。

__Web 组件__：

- `IMPROVED` Gallery 使用 PureView 插件；
- `IMPROVED` Figure 使用 PureView 插件；
- `IMPROVED` Paragraph 使用 PureView 插件；
- `CHANGED` 移除 Navbar `package.json` 中图标位置设置选项；

### 2014.09 W1

__JS 插件__：

- `NEW` 新增移动端图片浏览插件（还在优化完善）。

__Navbar 组件__：

- `IMPROVED` 使用 Flexbox 实现工具栏平均分布；
- `FIXED` 修复二维码 URL。


### 2014.08 W4

__Navbar 组件__：

- `IMPROVED` 重写交互；
- `IMPROVED` 使用 Amaze UI Share 插件，移除百度分享；
- `CHANGED` 删除图标位置选项，只提供图标在上方的样式；
- `IMPROVED` 主题细节调整。

__JS Tabs 插件__：

- `NEW` 新增 Tabs 插件，使用 CSS3 实现平滑滚动及回弹效果。

__Tabs 组件__：

- `IMPROVED` 使用新提取的 `Tabs` 插件，解决高度自适应问题；
- `CHANGED` 调整数据接口，删除标签宽度选项；
- `IMPROVED` 调整主题。

__Paragraph 组件__：

- `IMPROVED` 使用 `iScroll-lite.js` 提高组件中 `table` 拖拽的体验。

__布局示例__：

- 调整路径，下载包中 Amaze UI 相关的资源使用本地文件。

### 2014.08 W3

#### 官网

- 首页增加更新订阅；
- 文档增加目录。

#### Web 组件

- 增加 Web 组件本地预览服务器；
- 公用的 Demo 数据提取到 `package.json` 的 `demoContent` 下面；
- 组件细节调整。


### 2014.08 W2

#### Web 组件

__Titlebar__:

- `NEW` 更新数据结构；
- `NEW` 精简主题；
- `NEW` 页头功能转移到 Header 组件，本组件专注于页内标题栏。

__Pagination__:

- `NEW` 删除 `options.select` 选项，根据主题判断要生产的 HTML 结构；
- `NEW` 合并三个类似的主题为 `select`；
- `NEW` 主题颜色调整，细节优化。

__Accordion__:

- `IMPROVED` 使用 `Collapse` 插件实现交互，移除原来单独写的代码；
- `IMPROVED` 主题细节调整。

__Header__:

- `NEW` 新增 header 组件，专注于页头功能实现。

__Gotop__

- `NEW` 新的数据接口；
- `NEW` 精简主题；
- `NEW` 根据滚动条位置自动悬浮。


其他组件细节亦有调整。
