# new

过程

生成空对象

空对象的原型属性指向构造函数的原型对象

这个新对象会绑定到函数调用的this

如果函数没有返回其他对象，那么new表达式中的函数会自动返回这个新对象

```js
function New () {
	let obj = Object.create(null)
  let [constr, ...args] = [...arguments]
  obj.__proto__ = constr.prototype
  let res = constr.apply(obj, args) // 构造函数返回值
  if (res !== null && typeof res === 'object') {
    return res
  }
  return obj
}
```



### 闭包

有权访问另一个函数作用域中的变量的函数

减少了全局变量的使用

使用过度会导致内存泄露