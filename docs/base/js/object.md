# ,面向对象

OOP特点：封装，继承，多态

### 创建对象的几种模式

1. 工厂模式

   ```js
   function createPerson(name, age, job) {
   	var o = new Object()
     o.name = name
     o.age = age
     o.job = job
   	o.say = function () {
     	alert(this.name)
     }
     return o
   }
   var person1 = createPerson('John', 29, 'teacher')
   ```

   没有解决对象识别的问题，无法知道一个对象的类型

   

2. 构造函数模式

   ```js
   function Person(name, age, job) {
     this.name = name
     this.age = age
     this.job = job
     this.say = function () {alert(this.name)}
   }
   var person1 = new Person('kuyu', 21, 'teacher')
   ```

   使用new来创建新对象

   对象内的每个方法都要重新创建一次，创建同样任务的function实例是没有必要，增加了不必要的开销

3. 原型模式

   ```js
   function Person () {}
   Person.prototype = {
   	constructor: Person,
     name: 'Nick',
     age: 12,
     friens: ['aa', 'b'],
     say: function () {alert(this.name)}
   }
   var person1 = new Person()
   
   ```

   所有实例将会共享所有属性

4. 组合使用构造函数和原型模式

   ```js
   function Person (name, age, job) {
     this.name = name
     this.age = age
     this.job = job
     this.friends = ['aa', 'bb']
   }
   Person.prototype = {
     constructor: Person,
     sayName: function () {alert(this.name)}
   }
   var person1 = new Person('Nick', 21, 'teacher')
   var person2 = new Person('Nick2', 21, 'teacher')
   console.log(person1.friends === person2.friends) // false
   ```

5. 动态原型模式

   ```js
   function Person (name, age, job) {
     this.name = name
     this.age = age
     this.job = job
     if (typeof this.say != 'function') {
       Person.prototype.say = function () {alert(this.name)}
     }
   }
   var friend = new Person('Nick', 21, 'teacher')
   friend.say()
   ```

6. 寄生构造函数模式

   ```js
   function Person (name, age, job) {
     vaer o = new Object()
     o.name = name
     o.age = age
     o.job = job
     o.say = function () {alert(this.name)}
     return o
   }
   var friend = new Person('UU', 21, 'teacher')
   ```

   跟工厂函数一模一样，构造函数在没有返回值的情况下会，默认会返回新对象实例，二有一个return语句时，可以重写调用构造函数返回的值。不能依赖instanceof操作符来确定对象类型

7. 稳妥构造函数模式

   所谓稳妥对象是指没有公共属性，也不引用this的对象，与寄生构造函数木事相似，有两点不同，1是新创建的对象实例方法，不引用this，2是不使用new来调用构造函数

   ```js
   function Person (name, age, job) {
     vaer o = new Object()
     o.say = function () {alert(name)}
     return o
   }
   var friend = Person('UU', 21, 'teacher')
   ```

   稳妥构造函数提供了安全性，只有通过调用say方法才能访问name值，没有其他属性可以拿到name



### 继承的方式

#### 1. 原型链

每一个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，实例都包含一个指向原型对象的内部指针

原型链基本模式

```js
function SuperType() {
	this.property = true
}
SuperType.prototype.getSuperValue = function () {
  return this.property
}
function SubType () {
  this.subproperty = false
}
// 继承SuperType
SubType.prototype = new SuperType()
SubType.prototype.getSubvalue = function () {
  return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue()) // true
```

![](/base/img/prototype.png)

Instance指向SubType的原型，SubType的原型又指向SuperType的原型

问题，1：实例会共享超类的构造函数定义的引用类型。2：创建子类型的实例时，无法在不影响所有对象实例的情况下，给超类的构造函数传递参数

#### 2. 借用构造函数

在子类构造函数内部调用超类构造函数

```js
function SuperType () {
  this.color = ['red', 'blue', 'black']
}
function SubType() {
  // 继承SuperType
  SuperType.call(this)
}
var instance1  = new SubType()
instance1.colors.push('green')
console.log(instance1.colors) // 'red, blue, black, green

var instance2  = new SubType()
console.log(instance2.colors) // 'red, blue, black

```

通过使用call()、apply()方法，在创建SubType实例是调用了SuperType构造函数，新的SubType会执行SuperType中定义的所有初始化代码，这样每个SubType实例都有自己的一份属性副本

问题：无法避免构造函数模式的函数复用问题

####  3.  组合继承

将原型链和结构构造函数组合在一起

```js
function SuperType (name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

SuperType.prototype.say = function () {
 	console.log(this.name)
}
function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}
SubType.prototype = new SuperType() // 
SubType.prototype.sayAge = function () {
  console.log(this.age)
}
var instance1 = new SubType('sub1', 23)
instance1.color.push('green')
console.log(instance1.color) // red, blue, black, green
instance1.say() // sub1
instance1.sayAge() // 23

var instance2 = new SubType('sub2', 25)
console.log(instance2.color) // red, blue, black
instance2.say() // sub2
instance2.sayAge() // 25

```

#### 4. 原型式继承

```
function object(o) {
	function F(){}
	F.prototype = o
	return new F()
}
```

#### 5. 寄生式继承

与原型式继承紧密相关

```js
function createAnthrer(original) {
  var clone = object(original)
  clone.say = function(){console.log('hi')}
  return clone
}

```

#### 6. 寄生组合式继承

```js
function SuperType(name) {
	this.name = name
	this.colors = ['red', 'blue']
}
SuperType.prototype.say = function(){this.name}
function SubType(name, age) {
  SuperType.call(this, name) // 第二次调用
  this.age
}
SubType.prototype = new SuperType() // 第一次调用
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function(){console.log(this.age)}
```

第一次调用SuperType，SubType.prototype得到2个属性：name、colors，当调用SubType构造函数是，再次调用SuperType构造函数，这样在新的对象创建了实例的的属性name和colors

