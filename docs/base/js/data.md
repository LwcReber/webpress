# 数据类型

### 基本数据类型

1. Undefined
2. Number
3. Null   null 和undefined区别，undefined派生自null都表示无效的值，所以null === undefined
4. String   indexOf、replace、split 分割字符串返回数组、slice 字符串提取片段
5. Boolean



### 引用类型

<br/>

#### Object

<br/>

##### 数据属性

configurable 是否可以通过delete删除

enumerable 是否可以通过for in 返回该属性

writeable 是否可以修改属性的值

value 字段的值

##### 访问器属性

configurable 是否可以通过delete删除

enumerable 是否可以通过for in 返回该属性

get  读取属性时调用函数

set 写入属性时调用函数



#### Array

concat

some

every

reduce，将元素计算为一个值

find

findIndex

includes

map

indexOf

join 转化为字符串，可以修改分隔符

push，pop  push插入元素，返回数组的新长度，pop删除并返回当前元素

shift，unshift   shift删除数组第一项，unshift添加元素到数组开头，返回新的长度

slice 截取数组，返回新数组，包含start到end(不包含)，不修改原数组

splice 添加、删除、替换  splice(index,howmany,item1,.....,itemX) 返回删除的项目



#### Function

arguments, 类数组对象，Array.prototype.slice.call(arguments) 转化数组， Array.from [...arguments]

其他类数组对象，DOM的NodeList

new Function(arg1, functionBody ) 传入行参，会执行JavaScript 语句的字符串，只能在全局作用域中执行



#### 判断数据类型

**typeof**

判断基本数据类型

 typeof NaN = 'number' 

fn typeof = 'function'

object array , null 判断为object

null也是object的原因，因为null是空对象的引用，空对象也是对象，所以判断为object



**instanceof**   定义 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型上

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```



**Object.prototype.toString.call(待判断数据).indexOf('数据类型')  !== -1**

