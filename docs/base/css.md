# css

### 定位position

static 默认属性

relative 相对定位，相对元素自身位置进行定位

absolute 绝对定位，相对上一个父级有定位的元素进行定位（非static即可）

fixed 固定定位，相对于浏览器窗口进行定位，当父级元素有transform或者filter属性时，会失效，会跟absolute定位表现一样，

sticky 粘性定位，基于用户滚动位置来定位，指定对应的阀值之一才会有效，否则跟相对定位一样



### float

清除浮动的方法

1. 设置高度
2. 浮动元素设置overflow: hidden，或者overflow: auto
3. 浮动元素后面添加元素，设置clear: both 属性，通常添加伪类元素
4. 父元素也设置浮动



### flex布局

flex-grow 定义该项放大比例，默认为0，占据剩余空间

flex-shrink 定义该项目缩小比例，默认为1。如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

flex-basis 定义了在分配多余空间之前，项目占据的主轴空间，默认值为`auto`，即项目的本来大小。

flex 是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选

flex: 1  ===  flex: 1 1 auto



### 水平垂直居中的方法

1. 父：position relative 子：absolute left top 50% margin left top 宽高一半
2. 父：position relative 子 absolute left top 50% transform: translate (-50%, -50%)
3. 子postition relative   上下左右 0 ，宽高固定， margin： auto
4. table-cell 父级table-cell vertical-align: middle
5. flex布局，align-items:center，justify-content:center

### BFC

定义：**块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。**BFC是一个独立的布局环境，BFC内部的元素布局与外部互不影响**

部分引用 https://zhuanlan.zhihu.com/p/127187654 

#### 布局规则

1. 内部的box会在垂直方向一个个地放置
2. box垂直方向上的距离又margin决定，属于同一个BFC的两个相邻的Box margin会重叠。不同的BFC不会
3. 每个盒子的做边框紧跟着包含块的左边框，浮动元素也是一样
4. BFC不会鱼float box重叠
5. BFC就是页面上换一个隔离的独立的容器，容器内子元素不会影响外部的元素
6. 计算BFC高度是，浮动元素也参与计算

#### 触发条件（开启条件）

1. body根元素
2. float属性不是none
3. position absolute、fixed
4. overflow不是visible
5. display inline-block、table-cell、flex、inline-flex
6. 使用display: flow-root，一个新的 display 属性的值，它可以创建无副作用的 BFC。在父级块中使用 display: flow-root 可以创建新的 BFC

#### 可以解决哪些场景

1. 清除内部的浮动，触发父元素bfc，放置浮动导致父元素高度坍塌
2. 设置不同的bfc，阻止margin重叠。套一个父元素设置overflow:hidden
3. 阻止元素被浮动元素覆盖，各自是独立的渲染区域
4. 两栏自适应布局，给固定栏添加宽度，不固定的开启BFC，原理：BFC区域不会与float box重叠
5. 解决文字环绕问题

