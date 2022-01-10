# html

### script 标签

async 属性规定一旦脚本可用，则会异步执行
async 只用于加载外部脚本（使用src属性时）,有src也有内部执行代码时，只加载src内容，内部代码不执行

defer 属性规定当页面已完成加载后，才会执行脚本
defer 属性仅适用于外部脚本（只有在使用 src 属性时）


如果既不使用 async 也不使用 defer：在浏览器继续解析页面之前，立即读取并执行脚本

src和href的区别
src 资源来源地址，是引入该资源   img，script，iframe 标签上用
href 超文本引用，a，link标签上用
link标签链接样式表

