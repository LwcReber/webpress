# this

谁调用，this就是谁，指向的对象是上下文对象context

### bind

绑定了this，并返回一个新的函数d

bind被调用时，新函数的this被指定为bind的第一个参数，其余参数作为新函数的参数，供调用时使用

需要判断是否使用new 调用bind

```js
Funtion.prototype.myBind = function (ctx) {
  let selfFn = this
  let baseArgs = [...arguments].slice(1) // 截取剩余的参数
  let tempFn = function () {}
  function bound () {
    const args = [...baseArgs, ...arguments]
    // 判断是否使用new来调用bind，如果是new的this指向实例
    return selfFn.apply(this instanceof selfFn ? this : cx, args)
  }
  // 如果是new调用的，需要把构造函数的原型都挂在实例上
  tempFn.prototype = selfFn.prototype
  bound.prototype = new tempFn() // 生成副本放在bound的原型上
  return bound
}
```



### call

接受的是参数列表

```js
Funtion.prototype.myCall = function(ctx) {
	const newCtx = ctx || window
	nexCtx.fn = this
	const args = [...arguments].slice(1)
	const res = newCtx.fn(...args)
	delete newCtx.fn
	return res
}
```

### apply

接受的是多个参数的数组

```js
Function.prototype.myApply = function (cx) {
	const newCtx = ctx || window
 	newCtx.fn = this
 	let res
 	if (arguments[1]) {
		res = newCtx.fn(...arguments[1])
	} else {
		res = newCtx.fn()
 	}
 	delete newCtx.fn
 	return res
}
```

