# 面向对象

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



### 原型链



### 继承的方式

