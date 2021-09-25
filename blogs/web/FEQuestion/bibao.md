---
title: 闭包回顾
description: "了解闭包是什么，闭包的形式"
date: 2021-09-25
categories:
 - 前端基础疑难解答
tags:
 - js
# sidebar: 'auto'
# subSidebar: false
# autoPrev: other-filename
# autoNext: other-filename
sidebarDepth: 2
# autoIgnore: false
# autoGroup-2: 前端疑难杂症问题
# autoGroup+10: group10
---

## 闭包

### 闭包是什么

<!-- ![3](/3.jpg) -->
![3](~@src/js/1.jpg)

![3](/src/js/1.jpg)

1.犀牛书：函数变量可以保存在函数作用域内

```js
function foo1() {
    var n = 1
}
try {
    console.log(n);
} catch (e) {
    console.log(e.message);
}
```

2.高级程序设计：闭包是指有权访问另一个函数作用域中的变量的函数(函数没导出)

```js
function foo2() {
    var i = 2
    function bar() {
        console.log(i);
    }
    bar()
}
foo2()
```



3.你不知道的js:当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行

```js
function foo3() {
    var n = 3
    return function bar() {
        console.log(n);
    }
}
foo3()()
```

4.MDN: 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

```js
function init() {
    var name = 'donggu'
    function showName() {   // showName()是内部函数，一个闭包
        console.log(name)   // 使用了父函数中声明的变量
    }
    showName()
}
init()
```

5.当函数的执行，导致函数被定义，并抛出

🤓思考题

```js
var g = 1
function showTest(fn) {
    var g = 0
    fn()
}
function test() {
    console.log(g);
}
showTest(test) // 1
```

### 闭包的形式

::: tip

1.函数的执行，导致函数被定义

2.闭包和函数的定义有关

3.this 和函数的执行方式有关
:::

+ 函数的返回值是函数

```js
function foo() {
  var n = 0;
  return function() {
    console.log(n)
  }
}
foo()
```

- 返回的变量是函数

```js
function foo() {
  var n = function() {}
  return n
}
foo()()
```

- 全局变量定义的闭包

```js
var outter
function foo() {
  var a = 10
  outter = function() {
    console.log(a)
  }
}
foo()
outter()
```

- 函数的参数的方式

```js
var inner = function(fn) {
    console.log(fn())
}

function foo(){
    var b = 'donggu'
    var n = function() {
        return b
    }
    inner(n)
}
foo()
```

- 循环赋值的问题

```js
function foo() {
  var arr = []
  for (var i = 0; i < 10; i++){
    arr[i] = function() {
      console.log(i)
    }
  }
  return arr
}

var bar = foo()
for(var j = 0; j < 10; j++){
  bar[j]()
}
// 10
```

想要输出1~9，可以嵌套一层闭包

```js
function foo() {
  var arr = []
  for (var i = 0; i < 10; i++){
    arr[i] = (function(j) {
      return function(){console.log(j)}
    })(i)
  }
  return arr
}

var bar = foo()
for(var j = 0; j < 10; j++){
  bar[j]()
}
// 1~9
```

- 迭代器

```js
var add = (function(){
  var count = 0
  return function(){
    return ++count
  }
})()
console.log(add())
console.log(add())
```

### 面试题

```js
function fun(n, o){
  console.log(o);
  return {
    fun: function(m) {
      return fun(m, n)
    }
  }
}

var a = fun(0) // undefined
a.fun(1) // 0
a.fun(2) // 0
a.fun(3) // 0

var b = fun(0) // undefined
  .fun(1) // 0
  .fun(2) // 1
  .fun(3) // 2

var c = fun(0).fun(1) // undefine , 0
c.fun(2) // 1
c.fun(3) // 1
```









